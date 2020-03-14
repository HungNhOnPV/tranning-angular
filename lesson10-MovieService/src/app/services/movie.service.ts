import { Injectable } from '@angular/core';
import { Movie } from '../Models/movie.class';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[] = [
    new Movie(1, 'Lac Troi', 'https://www.youtube.com/watch?v=Llw9Q6akRo4', 'Son Tung MTP'),
    new Movie(2, 'Lac Troi', 'https://www.youtube.com/watch?v=Llw9Q6akRo4', 'Son Tung MTP')
  ];

  constructor() { }

  getAllMovie = () => {
    return this.movies;
  }

  getAddMovie = (movie: Movie) => {
    movie.id = this.getLastID(this.movies);
    this.movies.push(movie);
  }

  getLastID = movie => {
    if(movie) {
      movie.sort((a, b) => {
        if(a.id > b.id) return 1;
        else if(a.id < b.id) return -1;
        else return 0;
      });
      return movie.length + 1;
    }
    return 1;
  }
}
