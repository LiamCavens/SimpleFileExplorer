import { Injectable } from "@angular/core";
import { File } from "./file";
import { FileStructureComponent } from "./components/file-structure/file-structure.component";
import { BehaviorSubject, Observable } from "rxjs";

export interface FileData {
  results: { url: string }[];
}


const originalFiles = [
  {
    type: "pdf",
    name: "Employee Handbook",
    added: "2017-01-06"
  },
  {
    type: "pdf",
    name: "Public Holiday policy",
    added: "2016-12-06"
  },
  {
    type: "folder",
    name: "Expenses",
    files: [
      {
        type: "doc",
        name: "Expenses claim form",
        added: "2017-05-02"
      },
      {
        type: "doc",
        name: "Fuel allowances",
        added: "2017-05-03"
      }
    ]
  },
  {
    type: "csv",
    name: "Cost centres",
    added: "2016-08-12"
  },
  {
    type: "folder",
    name: "Misc",
    files: [
      {
        type: "doc",
        name: "Christmas party",
        added: "2017-05-02"
      },
      {
        type: "doc",
        name: "Welcome to the company!",
        added: "2015-04-24"
      }
    ]
  }
];


@Injectable({
  providedIn: "root"
})
export class FileExplorerService {
  
  files = new BehaviorSubject<File[]>(originalFiles);

  onNameSearch(str: string) {
    if (!str) return this.files.next(originalFiles);
    let allFiles = this.getAllFiles();  
    const filesWithSimilarName = allFiles.filter(file =>
      file.name.includes(str)
    );

    this.files.next(filesWithSimilarName);
  }

  onTypeSearch(type: string) {
    if (!type) return this.files.next(originalFiles);
    let allFiles = this.getAllFiles();
    const filesWithType = allFiles.filter(file => file.type === type);
    console.log(filesWithType);
    console.log('tits');
    this.files.next(filesWithType);
  }

  getFiles() {
    return originalFiles;
  }

  getAllFiles() {
    let allFiles = [];
    originalFiles.forEach(file => {
      if (file.type === "folder") {
        file.files.forEach(fileInFolder => {
          allFiles.push(fileInFolder);
        });
      } else if (file.type !== "folder") allFiles.push(file);
    });
    return allFiles;
  }
}
