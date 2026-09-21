import {
  pgTable,
  text,
  integer,
  bigint,
  timestamp,
  index,
} from "drizzle-orm/pg-core";



export const files_table = pgTable(
  "files_table",
  {
    id: bigint("id", { mode: "number" })
      .primaryKey()
      .generatedAlwaysAsIdentity(),

    ownerId: text("owner_id").notNull(),

    name: text("name").notNull(),

    size: integer("size").notNull(),

    url: text("url").notNull(),

    parent: bigint("parent", { mode: "number" }).notNull(),

    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (table) => [
    index("files_parent_index").on(table.parent),
    index("files_owner_id_index").on(table.ownerId),
  ],
);

export type DB_FileType = typeof files_table.$inferSelect;

export const folders_table = pgTable(
  "folders_table",
  {
    id: bigint("id", { mode: "number" })
      .primaryKey()
      .generatedAlwaysAsIdentity(),

    ownerId: text("owner_id").notNull(),

    name: text("name").notNull(),

    parent: bigint("parent", { mode: "number" }),

    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (table) => [
    index("folders_parent_index").on(table.parent),
    index("folders_owner_id_index").on(table.ownerId),
  ],
);

export type DB_FolderType = typeof folders_table.$inferSelect;