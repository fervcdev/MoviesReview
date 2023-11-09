import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { CinemaService } from 'src/app/services/cinema.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css'],
})
export class TopRatedComponent {
  topRatedMovies: Movie[] = [];

  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    infinite: false,
  };
  constructor(private tmdbService: CinemaService, private router: Router) {}

  ngOnInit() {
    this.tmdbService.getTopRatedMovies().subscribe((data: any) => {
      this.topRatedMovies = data.results;
    });
  }

  getDetails(movie: Movie) {
    this.router.navigate(['/movie-detail', movie.id]);
  }
}
