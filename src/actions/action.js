import { db } from "@/db/db";
import { gradeLevels } from "@/db/schema";

// export async function AddNewGrade (pv, formData) {
//   const data = formData.get("grade-name")
//   console.log(data)
//   // await db.insert(gradeLevels).values() 
//   return
// }

export const AddNewGrade = async (pv, formData) => {
  const data = formData.get("grade-name")
  console.log("iri")
  // await db.insert(gradeLevels).values() 
  
}