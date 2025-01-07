'use server'

import { db } from "@/db/db";
import { classes, gradeLevels } from "@/db/schema";
import { revalidatePath } from "next/cache";

export async function AddNewGrade (pv, formData) {
  const data = {
    name: formData.get("grade-name")
  }
  try {
    await db.insert(gradeLevels).values(data)
    console.log("data inserted")
    revalidatePath("/admin-dashboard")
  }
  catch (err) {
    console.log("error inserting data")
    console.log(err)
  }
  
}

export async function AddNewClass (pv, formData) {
  const data = {
    name: formData.get("class-name"),
    gradeLevelId: pv,
  }
  try {
    await db.insert(classes).values(data)
    console.log("data inserted")
    revalidatePath("/admin-dashboard")
  }
  catch (err) {
    console.log("error inserting data")
    console.log(err)
  }
}
