import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LifecycleHookComponent } from './components/lifecycle-hook/lifecycle-hook.component';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleHookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
