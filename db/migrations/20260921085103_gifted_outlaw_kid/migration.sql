CREATE TABLE "files_table" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "files_table_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"owner_id" text NOT NULL,
	"name" text NOT NULL,
	"size" integer NOT NULL,
	"url" text NOT NULL,
	"parent" bigint NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "folders_table" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "folders_table_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"owner_id" text NOT NULL,
	"name" text NOT NULL,
	"parent" bigint,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX "files_parent_index" ON "files_table" ("parent");--> statement-breakpoint
CREATE INDEX "files_owner_id_index" ON "files_table" ("owner_id");--> statement-breakpoint
CREATE INDEX "folders_parent_index" ON "folders_table" ("parent");--> statement-breakpoint
CREATE INDEX "folders_owner_id_index" ON "folders_table" ("owner_id");