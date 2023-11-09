import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CinemaService } from './cinema.service';

describe('CinemaService', () => {
  let service: CinemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CinemaService],
    });

    service = TestBed.inject(CinemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
