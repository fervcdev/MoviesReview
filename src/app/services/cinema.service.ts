import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credits } from '../models/credits.model';
import { Review } from '../models/review.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CinemaService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private authToken = environment.apiKey;


  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      Authorization: `Bearer ${this.authToken}`,
    });
  }

  searchMovies(movie: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      { headers: this.headers }
    );
  }

  getMovieById(movieId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${movieId}?language=en-US`, {
      headers: this.headers,
    });
  }

  getUpcomingMovies(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/movie/upcoming?language=en-US&page=1`,
      { headers: this.headers }
    );
  }

  getNowPlayingMovies(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/movie/now_playing?language=en-US&page=1`,
      { headers: this.headers }
    );
  }

  getPopularMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/popular?language=en-US&page=1`, {
      headers: this.headers,
    });
  }

  getTopRatedMovies(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/movie/top_rated?language=en-US&page=1`,
      { headers: this.headers }
    );
  }

  getCredits(movieId: number): Observable<Credits> {
    return this.http.get<Credits>(`${this.apiUrl}/movie/${movieId}/credits`, {
      headers: this.headers,
    });
  }

  getReviews(movieId: number): Observable<Review> {
    return this.http.get<Review>(`${this.apiUrl}/movie/${movieId}/reviews`, {
      headers: this.headers,
    });
  }
}
