import { files_table, folders_table } from "@/db/schema";
import { db } from "@/db/index";
import DriveContent from "./drive-content";

export default async function GoogleDriveClone() {
  const files = await db.select().from(files_table);
  const folders = await db.select().from(folders_table);
 return <DriveContent files={files} folders={folders} parents={[]} currentFolderId={1} />;
}

