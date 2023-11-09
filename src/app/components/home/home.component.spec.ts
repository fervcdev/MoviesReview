import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CinemaService } from 'src/app/services/cinema.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavComponent } from '../nav/nav.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { PopularComponent } from './popular/popular.component';
import { TopRatedComponent } from './top-rated/top-rated.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent, NavComponent,UpcomingComponent,NowPlayingComponent,PopularComponent,TopRatedComponent ],
      imports: [HttpClientTestingModule],
      providers: [CinemaService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
