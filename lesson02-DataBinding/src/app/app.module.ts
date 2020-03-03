import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentToViewComponent } from './components/component-to-view/component-to-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentToViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
