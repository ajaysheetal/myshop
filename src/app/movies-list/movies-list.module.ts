import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MoviesListComponent } from './movies-list.component';
import { MatCardModule } from '@angular/material/card';
import { MoviesFilterModule } from '../movies-filter/movies-filter.module';

@NgModule({
  declarations: [MoviesListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MoviesFilterModule,
    RouterModule.forChild([
      {
        path: '',
        component: MoviesListComponent,
      },
    ]),
  ],
})
export class MoviesListModule {}
