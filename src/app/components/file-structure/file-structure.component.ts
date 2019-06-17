import { Component, OnInit } from '@angular/core';
import { FileExplorerService } from "../../file-explorer.service";
import { File } from "../../file";

@Component({
  selector: 'file-structure',
  templateUrl: './file-structure.component.html',
  styleUrls: ['./file-structure.component.less']
})
export class FileStructureComponent implements OnInit {
  allFiles: File[];
  childrenFiles: File[];
  parentFile: string;

  constructor(private fileExplorerService: FileExplorerService) { }

  ngOnInit() {
    this.fileExplorerService.files.subscribe(files => {
      this.allFiles = files
    })
    this.childrenFiles = []
  }

  showChildren(file){
    this.childrenFiles = [];
    if (file.type !== 'folder') return this.childrenFiles;
    file.files.forEach(childFile => {
      this.childrenFiles.push(childFile);
    });
    this.parentFile = file.name;
    return this.childrenFiles;
  }
}
