import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  movies: Movie[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      if (params['myArray']) {
        this.movies = JSON.parse(params['myArray']);
      }
    });
  }
  getYearFromDate(dateString: string): number {
    return new Date(dateString).getFullYear();
  }

  goMovieDetails(movie: Movie) {
    this.router.navigate(['/movie-detail', movie.id]);
  }
}
