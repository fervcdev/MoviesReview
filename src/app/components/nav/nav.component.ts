import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { CinemaService } from 'src/app/services/cinema.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  movies: Movie[] = [];
  searchTerm: string = '';
  searchTermChanged = new Subject<string>();
  showAutocomplete = false;

  constructor(private router: Router, private tmdbService: CinemaService) {}

  ngOnInit(): void {
    this.searchTermChanged
      .pipe(debounceTime(600), distinctUntilChanged())
      .subscribe((searchTerm) => {
        this.searchTerm = searchTerm;
      });
  }

  searchMovies(searchTerm: string) {
    if (this.searchTerm != '') {
      this.searchTermChanged.next(searchTerm);
      this.getMovies();
    } else {
      this.showAutocomplete = false;
    }
  }

  getMovies() {
    this.tmdbService.searchMovies(this.searchTerm).subscribe({
      next: (response) => {
        this.movies = response.results;
        if (this.movies.length > 0) {
          this.showAutocomplete = true;
        }
      },
    });
  }

  goHome() {
    this.router.navigate(['/']);
  }

  onSuggestionClick(suggestion: Movie) {
    this.showAutocomplete = false;
    this.router.navigate(['/movie-detail', suggestion.id]);
  }

  viewAll() {
    this.router.navigate(['/movie-list'], {
      queryParams: { myArray: JSON.stringify(this.movies) },
    });
    this.showAutocomplete = false;
  }
}
