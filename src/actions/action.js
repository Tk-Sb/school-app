'use server'

import { db } from "@/db/db";
import { classes, gradeLevels } from "@/db/schema";
import { eq } from "drizzle-orm";
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

export async function EditGradeLevelName (pv, formData) {
  const data = {
    id: pv,
    newName: formData.get("new-grade-name"),
  }
  try {
    await db.update(gradeLevels).set({name: data.newName}).where(eq(gradeLevels.id, data.id))
    console.log("data updated")
    revalidatePath("/admin-dashboard")
  }
  catch (err) {
    console.log("error inserting data")
    console.log(err)
  }
}

export async function Delete (pv, formData) {
  const data = {
    id: pv
  }
  try {
    await db.delete(gradeLevels).where(eq(gradeLevels.id, data.id))
    console.log("data deleted")
    revalidatePath("/admin-dashboard")
  }
  catch (err) {
    console.log("error inserting data")
    console.log(err)
  }
}