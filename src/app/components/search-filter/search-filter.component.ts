import { Component, OnInit } from "@angular/core";
import { FileExplorerService } from "../../file-explorer.service";

@Component({
  selector: "search-filter",
  templateUrl: "./search-filter.component.html",
  styleUrls: ["./search-filter.component.less"]
})
export class SearchFilterComponent {
  filterType = "name";
  sortType = "";
  constructor(private fileExplorerDataService: FileExplorerService) {}

  onButtonFilter(filterSearchType: string) {
    this.filterType = filterSearchType;
    if (this.sortType = "filter") {
      this.sortType = "ascending";
      this.fileExplorerDataService.sortFiles( this.sortType, filterSearchType);
    }
    if (this.sortType = "ascending") {
      this.sortType = "descending";
    }
    if (this.sortType = "descending") {
      this.sortType = "filter";
    }
  }

  onSearch(filterValue: string) {
    if (this.filterType === "name")
      this.fileExplorerDataService.onNameSearch(filterValue.toLowerCase());
    if (this.filterType === "type")
      this.fileExplorerDataService.onTypeSearch(filterValue.toLowerCase());
  }
}
