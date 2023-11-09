import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieDetailComponent } from './movie-detail.component';
import { NavComponent } from '../nav/nav.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { CinemaService } from 'src/app/services/cinema.service';
import { ActivatedRoute, Router } from '@angular/router';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;

  const activatedRouteMock = {
    params: of({ id: '238' }),
  };

  const mockMovieData = {
    adult: false,
    backdrop_path: '/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
    belongs_to_collection: {
      id: 230,
      name: 'The Godfather Collection',
      poster_path: '/zqV8MGXfpLZiFVObLxpAI7wWonJ.jpg',
      backdrop_path: '/3WZTxpgscsmoUk81TuECXdFOD0R.jpg',
    },
    budget: 6000000,
    genres: [
      {
        id: 18,
        name: 'Drama',
      },
      {
        id: 80,
        name: 'Crime',
      },
    ],
    homepage: 'http://www.thegodfather.com/',
    id: 238,
    imdb_id: 'tt0068646',
    original_language: 'en',
    original_title: 'The Godfather',
    overview:
      'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
    popularity: 147.845,
    poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    production_companies: [
      {
        id: 4,
        logo_path: '/gz66EfNoYPqHTYI4q9UEN4CbHRc.png',
        name: 'Paramount',
        origin_country: 'US',
      },
      {
        id: 10211,
        logo_path: null,
        name: 'Alfran Productions',
        origin_country: 'US',
      },
    ],
    production_countries: [
      {
        iso_3166_1: 'US',
        name: 'United States of America',
      },
    ],
    release_date: '1972-03-14',
    revenue: 245066411,
    runtime: 175,
    spoken_languages: [
      {
        english_name: 'English',
        iso_639_1: 'en',
        name: 'English',
      },
      {
        english_name: 'Italian',
        iso_639_1: 'it',
        name: 'Italiano',
      },
      {
        english_name: 'Latin',
        iso_639_1: 'la',
        name: 'Latin',
      },
    ],
    status: 'Released',
    tagline: "An offer you can't refuse.",
    title: 'The Godfather',
    video: false,
    vote_average: 8.71,
    vote_count: 18894,
  };

  const mockCastData = [
    {
      adult: false,
      gender: 2,
      id: 3084,
      known_for_department: 'Acting',
      name: 'Marlon Brando',
      original_name: 'Marlon Brando',
      popularity: 24.902,
      profile_path: '/fuTEPMsBtV1zE98ujPONbKiYDc2.jpg',
      cast_id: 146,
      character: 'Don Vito Corleone',
      credit_id: '6489aa85e2726001072483a9',
      order: 0,
    },
    {
      adult: false,
      gender: 2,
      id: 1158,
      known_for_department: 'Acting',
      name: 'Al Pacino',
      original_name: 'Al Pacino',
      popularity: 31.67,
      profile_path: '/2dGBb1fOcNdZjtQToVPFxXjm4ke.jpg',
      cast_id: 147,
      character: 'Michael Corleone',
      credit_id: '6489aa936f8d9500afdf219c',
      order: 1,
    },
    {
      adult: false,
      gender: 2,
      id: 3085,
      known_for_department: 'Acting',
      name: 'James Caan',
      original_name: 'James Caan',
      popularity: 38.576,
      profile_path: '/v3flJtQEyczxENi29yJyvnN6LVt.jpg',
      cast_id: 148,
      character: 'Sonny Corleone',
      credit_id: '6489aabc99259c00ff111136',
      order: 2,
    },
    {
      adult: false,
      gender: 2,
      id: 3087,
      known_for_department: 'Acting',
      name: 'Robert Duvall',
      original_name: 'Robert Duvall',
      popularity: 20.575,
      profile_path: '/86rJfMFHBB9J4mUHomSPsOLH0Za.jpg',
      cast_id: 149,
      character: 'Tom Hagen',
      credit_id: '6489aace99259c011c42808d',
      order: 3,
    },
  ];

  const mockReviewsData = [
    { author: 'Reviewer 1', content: 'Sample review 1' },
    { author: 'Reviewer 2', content: 'Sample review 2' },
  ];

  const cinemaServiceMock = {
    getMovieById: (id: number) => of(mockMovieData),
    getCredits: (id: number) => of({ cast: mockCastData }),
    getReviews: (id: number) => of({ results: mockReviewsData }),
  };

  const routerMock = {
    navigate: () => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieDetailComponent, NavComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: CinemaService, useValue: cinemaServiceMock },
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get movie details', () => {
    const mockMovieData = {
      adult: false,
      backdrop_path: '/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
      belongs_to_collection: {
        id: 230,
        name: 'The Godfather Collection',
        poster_path: '/zqV8MGXfpLZiFVObLxpAI7wWonJ.jpg',
        backdrop_path: '/3WZTxpgscsmoUk81TuECXdFOD0R.jpg',
      },
      budget: 6000000,
      genres: [
        {
          id: 18,
          name: 'Drama',
        },
        {
          id: 80,
          name: 'Crime',
        },
      ],
      homepage: 'http://www.thegodfather.com/',
      id: 238,
      imdb_id: 'tt0068646',
      original_language: 'en',
      original_title: 'The Godfather',
      overview:
        'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
      popularity: 147.845,
      poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
      production_companies: [
        {
          id: 4,
          logo_path: '/gz66EfNoYPqHTYI4q9UEN4CbHRc.png',
          name: 'Paramount',
          origin_country: 'US',
        },
        {
          id: 10211,
          logo_path: null,
          name: 'Alfran Productions',
          origin_country: 'US',
        },
      ],
      production_countries: [
        {
          iso_3166_1: 'US',
          name: 'United States of America',
        },
      ],
      release_date: '1972-03-14',
      revenue: 245066411,
      runtime: 175,
      spoken_languages: [
        {
          english_name: 'English',
          iso_639_1: 'en',
          name: 'English',
        },
        {
          english_name: 'Italian',
          iso_639_1: 'it',
          name: 'Italiano',
        },
        {
          english_name: 'Latin',
          iso_639_1: 'la',
          name: 'Latin',
        },
      ],
      status: 'Released',
      tagline: "An offer you can't refuse.",
      title: 'The Godfather',
      video: false,
      vote_average: 8.71,
      vote_count: 18894,
    };

    spyOn(cinemaServiceMock, 'getMovieById').and.returnValue(of(mockMovieData));

    component.getCharacterDetails(238);

    expect(component.movie).toEqual(mockMovieData);
  });

  it('should get genres', () => {
    const mockGenres = [
      { id: 1, name: 'Action' },
      { id: 2, name: 'Adventure' },
    ];
    component.genres = mockGenres;

    const result = component.getGenres();

    expect(result).toBe('Action, Adventure');
  });

  it('should get cast', () => {
    const mockCast = [
      {
        adult: false,
        gender: 2,
        id: 3084,
        known_for_department: 'Acting',
        name: 'Marlon Brando',
        original_name: 'Marlon Brando',
        popularity: 24.902,
        profile_path: '/fuTEPMsBtV1zE98ujPONbKiYDc2.jpg',
        cast_id: 146,
        character: 'Don Vito Corleone',
        credit_id: '6489aa85e2726001072483a9',
        order: 0,
      },
      {
        adult: false,
        gender: 2,
        id: 1158,
        known_for_department: 'Acting',
        name: 'Al Pacino',
        original_name: 'Al Pacino',
        popularity: 31.67,
        profile_path: '/2dGBb1fOcNdZjtQToVPFxXjm4ke.jpg',
        cast_id: 147,
        character: 'Michael Corleone',
        credit_id: '6489aa936f8d9500afdf219c',
        order: 1,
      },
      {
        adult: false,
        gender: 2,
        id: 3085,
        known_for_department: 'Acting',
        name: 'James Caan',
        original_name: 'James Caan',
        popularity: 38.576,
        profile_path: '/v3flJtQEyczxENi29yJyvnN6LVt.jpg',
        cast_id: 148,
        character: 'Sonny Corleone',
        credit_id: '6489aabc99259c00ff111136',
        order: 2,
      },
      {
        adult: false,
        gender: 2,
        id: 3087,
        known_for_department: 'Acting',
        name: 'Robert Duvall',
        original_name: 'Robert Duvall',
        popularity: 20.575,
        profile_path: '/86rJfMFHBB9J4mUHomSPsOLH0Za.jpg',
        cast_id: 149,
        character: 'Tom Hagen',
        credit_id: '6489aace99259c011c42808d',
        order: 3,
      },
    ];
    component.cast = mockCast;

    const result = component.getCast();

    expect(result).toBe(
      'Don Vito Corleone (Marlon Brando), Michael Corleone (Al Pacino), Sonny Corleone (James Caan), Tom Hagen (Robert Duvall)'
    );
  });
});
