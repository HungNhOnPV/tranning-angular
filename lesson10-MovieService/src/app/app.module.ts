import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieAddEditComponent } from './components/movie-add-edit/movie-add-edit.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

// Service
import { MovieService } from './services/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieAddEditComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
