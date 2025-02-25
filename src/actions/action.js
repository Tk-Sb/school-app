'use server'

import { db } from "@/db/db";
import { classes, gradeLevels, publicAnnouncements } from "@/db/schema";
import { eq, inArray } from "drizzle-orm";
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
    newName: formData.get("new-name"),
  }
  try {
    await db.update(gradeLevels).set({name: data.newName}).where(eq(gradeLevels.id, data.id))
    console.log("data updated")
    revalidatePath("/admin-dashboard")
  }
  catch (err) {
    console.log("error updating data")
    console.log(err)
  }
}

export async function EditClassName (pv, formData) {
  const data = {
    id: pv,
    newName: formData.get("new-name"),
  }
  try {
    await db.update(classes).set({name: data.newName}).where(eq(classes.id, data.id))
    console.log("data updated")
    revalidatePath("/admin-dashboard")
  }
  catch (err) {
    console.log("error updating data")
    console.log(err)
  }
}


export async function DeleteGrade (pv, formData) {
  const data = {
    id: pv
  }
  try {
    await db.delete(gradeLevels).where(eq(gradeLevels.id, data.id))
    console.log("data deleted")
    revalidatePath("/admin-dashboard")
  }
  catch (err) {
    console.log("error deleting data")
    console.log(err)
  }
}

export async function DeleteClass (pv, formData) {
  const data = {
    id: pv
  }
  try {
    await db.delete(classes).where(eq(classes.id, data.id))
    console.log("data deleted")
    revalidatePath("/admin-dashboard")
  }
  catch (err) {
    console.log("error deleting data")
    console.log(err)
  }
}

export async function AddNewPublicAnnouncement (pv, formData) {
  const data = {
    content: formData.get("content")
  }
  try {
    await db.insert(publicAnnouncements).values(data)
    console.log("data inserted")
    revalidatePath("/admin-dashboard")
  }
  catch (err) {
    console.log("error inserting data")
    console.log(err)
  }
}

export async function EditPublicAnnouncement (pv, formData) {
  const data = {
    id: pv,
    newContent: formData.get("new-content"),
  }
  try {
    await db.update(publicAnnouncements).set({content: data.newContent}).where(eq(publicAnnouncements.id, data.id))
    console.log("data updated")
    revalidatePath("/admin-dashboard")
  }
  catch (err) {
    console.log("error updating data")
    console.log(err)
  }
}

export async function DeletePublicAnnouncement (pv, formData) {
  const data = {
    ids: pv
  }
  try {
    await db.delete(publicAnnouncements).where(inArray(publicAnnouncements.id, data.ids))
    console.log("data deleted")
    revalidatePath("/admin-dashboard")
  }
  catch (err) {
    console.log("error deleting data")
    console.log(err)
  }
}

export async function AddNewStudent (pv, formData) {
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