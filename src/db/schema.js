import { integer, pgTable, serial, varchar } from 'drizzle-orm/pg-core';  

export const gradeLevels = pgTable('grade_levels', {
  id: serial('id').primaryKey(),
  name: varchar('grade_name', { length: 50 }).notNull()
})

export const classes = pgTable('classes', {
  id: serial('id').primaryKey(),
  name: varchar('class_name', { length: 50 }).notNull(),
  gradeLevelId: integer("grade_level_id").references(() => gradeLevels.id, {onDelete: "cascade"}).notNull()
})

export const publicAnnouncements = pgTable('public_announcements', {
  id: serial('id').primaryKey(),
  content: varchar('content', { length: 255 }).notNull(),
})