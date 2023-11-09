import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedComponent } from './top-rated.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { CinemaService } from 'src/app/services/cinema.service';

describe('TopRatedComponent', () => {
  let component: TopRatedComponent;
  let fixture: ComponentFixture<TopRatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRatedComponent ],
      imports: [HttpClientTestingModule,FormsModule],
      providers: [CinemaService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
