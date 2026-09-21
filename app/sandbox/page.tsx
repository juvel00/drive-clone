import {db} from  "@/db/index";
import {  mockFiles, mockFolders } from "../../lib/mock-data"
import { files_table, folders_table } from "@/db/schema";
export default function SandboxPage() {
    
    return(
        <div className="flex flex-col gap-4">
            Seed function
            <form
                action={async () =>{
                    "use server";
                    const folderInsert = await db.insert(folders_table).values(
                        mockFolders.map((folder,index)=>({
                            ownerId: "demo-owner",
                            name: folder.name,
                            parent: index !== 0 ? 1 : null,
                        })),
                    )
                    const fileInsert = await db.insert(files_table).values(
                        mockFiles.map((file,index)=>({
                            ownerId: "demo-owner",
                            name: file.name,
                            size: parseInt(file.size),
                            url: file.url,
                            parent: (index%3)+1,
                        })))
                }}
            >
                <button type="submit">Seed Data</button>
            </form>
        </div>
    )
}