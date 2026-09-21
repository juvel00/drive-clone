import type { File, Folder } from "../lib/mock-data"
import {  FileIcon, Upload, ChevronRight, Folder as FolderIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
export  function FileRow(props:{file: File, handleFileClick: (fileId: string) => void}){
  const { file, handleFileClick } = props
    return (
        <li key={file.id} className="px-6 py-4 border-b border-gray-700 hover:bg-gray-750">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-6 flex items-center">
                      <a href={file.url ?? "#"} className="flex items-center text-gray-100 hover:text-blue-400" target="_blank" >
                        <FileIcon className="mr-3" size={20} />
                        {file.name}
                      </a>
                    
                  </div>
                  <div className="col-span-3 text-gray-400">{file.type}</div>
                  <div className="col-span-3 text-gray-400">{file.size}</div>
                </div>
              </li>
    )
}

export  function FolderRow(props:{folder: Folder, handleFolderClick: (folderId: string) => void}){
  const { folder, handleFolderClick } = props
    return (
        <li key={folder.id} className="px-6 py-4 border-b border-gray-700 hover:bg-gray-750">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-6 flex items-center">
                    {folder.type === "folder" ? (
                      <button
                        onClick={() => handleFolderClick(folder.id)}
                        className="flex items-center text-gray-100 hover:text-blue-400"
                      >
                        <FolderIcon className="mr-3" size={20} />
                        {folder.name}
                      </button>
                    ) : (
                      <Link href={`/f/${folder.id}`} className="flex items-center text-gray-100 hover:text-blue-400">
                        <FileIcon className="mr-3" size={20} />
                        {folder.name}
                      </Link>
                    )}
                  </div>
                  <div className="col-span-3 text-gray-400"></div>
                  <div className="col-span-3 text-gray-400"></div>
                </div>
              </li>
    )
}