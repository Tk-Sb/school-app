import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon("postgresql://neondb_owner:fN8wmB5ivcYG@ep-snowy-paper-a2o1bc1x.eu-central-1.aws.neon.tech/neondb?sslmode=require")
export const db = drizzle(sql)