import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'movie-detail/:id',
    component: MovieDetailComponent,
    title: 'Movie Details',
  },
  {
    path: 'movie-list',
    component:MovieListComponent,
    title: 'Movie List',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
