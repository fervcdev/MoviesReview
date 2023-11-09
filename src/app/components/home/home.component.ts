import { Component } from '@angular/core';
import { CinemaService } from 'src/app/services/cinema.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  movies: any[] = [];

  constructor(private tmdbService: CinemaService, private router: Router) {}

  navigateToMovie(movieId: number) {
    this.router.navigate(['/movie', movieId]);
  }
}
