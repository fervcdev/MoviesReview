import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowPlayingComponent } from './now-playing.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { CinemaService } from 'src/app/services/cinema.service';

describe('NowPlayingComponent', () => {
  let component: NowPlayingComponent;
  let fixture: ComponentFixture<NowPlayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NowPlayingComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [CinemaService],
    }).compileComponents();
    fixture = TestBed.createComponent(NowPlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
