import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { MovieListComponent } from './movie-list.component';
import { NavComponent } from '../nav/nav.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  const mockActivatedRoute = {
    queryParams: of({
      myArray: JSON.stringify([
        { id: 1, title: 'Movie 1' },
        { id: 2, title: 'Movie 2' },
      ]),
    }),
  };

  const mockRouter = {
    navigate: () => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieListComponent, NavComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle ActivatedRoute queryParams', () => {
    expect(component.movies.length).toBe(2);
    expect(component.movies[0].title).toBe('Movie 1');
    expect(component.movies[1].title).toBe('Movie 2');
  });
});
