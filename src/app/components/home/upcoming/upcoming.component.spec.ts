import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingComponent } from './upcoming.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { CinemaService } from 'src/app/services/cinema.service';

describe('UpcomingComponent', () => {
  let component: UpcomingComponent;
  let fixture: ComponentFixture<UpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpcomingComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [CinemaService],
    }).compileComponents();

    fixture = TestBed.createComponent(UpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
