import { sql } from "drizzle-orm";
import {
  mysqlTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";


// Table schema for the users
export const users = mysqlTable("user", {
  id: serial("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 256 }).notNull(),
  email: varchar("email", { length: 256 }).notNull().unique(),
  password: varchar("password", { length: 256 }).notNull(),
  role: varchar("role", { length: 50 }).notNull().default("user"),
  joiningDate: timestamp("joining_date").default(sql`CURRENT_TIMESTAMP`),
  educational: varchar("educational", { length: 256 }),
  phoneNumber: varchar("phone_number", { length: 20 }),
  address: varchar("address", { length: 256 }),
  workId: varchar("work_id", { length: 256 }),
  graduationYear: varchar("graduation_year", { length: 4 }),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at").onUpdateNow(),
});

export type User = typeof users.$inferSelect