import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../Models/movie.class';

@Component({
  selector: 'app-movie-add-edit',
  templateUrl: './movie-add-edit.component.html',
  styleUrls: ['./movie-add-edit.component.css']
})
export class MovieAddEditComponent implements OnInit {

  constructor(
    private _movieService: MovieService
  ) { }

  ngOnInit(): void {
  }

  onAddVideo = (name: string, link: string, author: string) => {
    let movie: Movie = new Movie(null, name, link, author);
    this._movieService.getAddMovie(movie);
  }

}
