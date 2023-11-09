import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { CinemaService } from 'src/app/services/cinema.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
})
export class UpcomingComponent {
  upcomingMovies: Movie[] = [];

  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    infinite: false,
  };
  constructor(private tmdbService: CinemaService, private router: Router) {}

  ngOnInit() {
    this.tmdbService.getUpcomingMovies().subscribe((data: any) => {
      this.upcomingMovies = data.results;
    });
  }

  getDetails(movie: Movie) {
    this.router.navigate(['/movie-detail', movie.id]);
  }
}
