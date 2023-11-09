import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { CinemaService } from 'src/app/services/cinema.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css'],
})
export class NowPlayingComponent {
  nowPlayingMovies: Movie[] = [];

  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    infinite: false,
  };
  constructor(private tmdbService: CinemaService, private router: Router) {}

  ngOnInit() {
    this.tmdbService.getNowPlayingMovies().subscribe((data: any) => {
      this.nowPlayingMovies = data.results;
    });
  }

  getDetails(movie: Movie) {
    this.router.navigate(['/movie-detail', movie.id]);
  }
}
