import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { DataDrivenFormComponent } from './components/data-driven-form/data-driven-form.component';
import { ErrorValidateComponent } from './components/error-validate/error-validate.component';
@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    DataDrivenFormComponent,
    ErrorValidateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
