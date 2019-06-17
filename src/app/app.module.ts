import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./components/header/header.component";
import { FileStructureComponent } from './components/file-structure/file-structure.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FileStructureComponent,
    SearchFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
