import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesFilterComponent } from './movies-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MoviesFilterComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [MoviesFilterComponent],
})
export class MoviesFilterModule {}
