import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { CinemaService } from 'src/app/services/cinema.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent {
  popularMovies: Movie[] = [];

  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    infinite: false,
  };
  constructor(private tmdbService: CinemaService, private router: Router) {}
  ngOnInit() {
    this.tmdbService.getPopularMovies().subscribe((data: any) => {
      this.popularMovies = data.results;
    });
  }

  getDetails(movie: Movie) {
    this.router.navigate(['/movie-detail', movie.id]);
  }
}
