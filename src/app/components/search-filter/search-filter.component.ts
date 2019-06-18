import { Component, OnInit } from "@angular/core";
import { FileExplorerService } from "../../file-explorer.service";

@Component({
  selector: "search-filter",
  templateUrl: "./search-filter.component.html",
  styleUrls: ["./search-filter.component.less"]
})
export class SearchFilterComponent {
  filterType = "name";
  sortValue = "ascending";
  constructor(private fileExplorerDataService: FileExplorerService) {}

  onButtonFilter(filterSearchType: string) {
    this.filterType = filterSearchType;
  }

  onSortButton(){
    this.fileExplorerDataService.sortFiles(this.sortValue, this.filterType);
    if (this.sortValue === 'ascending'){
      return this.sortValue = 'descending';
    } else {
      return this.sortValue = 'ascending';
    }
  }

  onSearch(filterValue: string) {
    if (this.filterType === "name")
      this.fileExplorerDataService.onNameSearch(filterValue.toLowerCase());
    if (this.filterType === "type")
      this.fileExplorerDataService.onTypeSearch(filterValue.toLowerCase());
  }
}
