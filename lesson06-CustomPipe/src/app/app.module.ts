import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SortNumberPipe } from "./pipes/sort-number.pipe";
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [AppComponent, SortNumberPipe, CapitalizePipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
