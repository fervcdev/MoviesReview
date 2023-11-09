import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularComponent } from './popular.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { CinemaService } from 'src/app/services/cinema.service';

describe('PopularComponent', () => {
  let component: PopularComponent;
  let fixture: ComponentFixture<PopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularComponent ],
      imports: [HttpClientTestingModule,FormsModule],
      providers: [CinemaService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
