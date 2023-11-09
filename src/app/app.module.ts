import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { UpcomingComponent } from './components/home/upcoming/upcoming.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NowPlayingComponent } from './components/home//now-playing/now-playing.component';
import { TopRatedComponent } from './components/home/top-rated/top-rated.component';
import { PopularComponent } from './components/home/popular/popular.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    MovieDetailComponent,
    UpcomingComponent,
    NowPlayingComponent,
    TopRatedComponent,
    PopularComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SlickCarouselModule
  ],
  providers: [DatePipe, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
