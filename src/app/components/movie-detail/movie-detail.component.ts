import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cast } from 'src/app/models/credits.model';
import { Genre, MovieDetails } from 'src/app/models/movie-id-details.model';
import { ReviewDetails } from 'src/app/models/review.model';
import { CinemaService } from 'src/app/services/cinema.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent {
  movie: MovieDetails = {} as MovieDetails;
  stars: number[] = [];
  starReviews: number[] = [];
  genres: Genre[] = [];
  cast: Cast[] = [];
  reviews: ReviewDetails[] = [];
  rating!: string;

  showFullTextArray: boolean[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private tmdbService: CinemaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.getCharacterDetails(parseInt(params['id']));
    });
    this.reviews.forEach(() => {
      this.showFullTextArray.push(false);
    });
    this.rating = '/10';
  }

  getCharacterDetails(id: number) {
    this.tmdbService.getMovieById(id).subscribe({
      next: (response) => {
        this.movie = response;
        this.genres = this.movie.genres;
        this.getGenres();
        this.calculateStars(this.movie.vote_average);
        this.getCredits(this.movie.id);
        this.getReviews(this.movie.id);
      },
      error: (error) => {
        console.error('Error fetching character details:', error);
      },
    });
  }

  getCredits(id: number) {
    this.tmdbService.getCredits(id).subscribe({
      next: (response) => {
        this.cast = response.cast.slice(0, 5);
      },
      error: (error) => {
        console.error('Error fetching character details:', error);
      },
    });
  }

  getReviews(id: number) {
    this.tmdbService.getReviews(id).subscribe({
      next: (response) => {
        this.reviews = response.results;
      },
      error: (error) => {
        console.error('Error fetching character details:', error);
      },
    });
  }

  calculateStars(vote: number) {
    const rating = Math.floor(vote / 2);
    this.stars = Array.from({ length: 5 }, (_, index) =>
      index < rating ? 1 : 0
    );
  }

  getGenres() {
    return this.genres.map((genre) => genre.name).join(', ');
  }

  getCast() {
    return this.cast
      .map((actor) => `${actor.character} (${actor.original_name})`)
      .join(', ');
  }

  isHalfStar(index: number, rating: number): boolean {
    return index * 2 - 1 === rating && index !== 0;
  }

  toggleShowFullText(index: number) {
    // Cambiar el estado de visualización para la revisión específica
    this.showFullTextArray[index] = !this.showFullTextArray[index];
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
