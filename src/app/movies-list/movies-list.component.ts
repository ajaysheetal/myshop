import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UtilitiesService } from '../core/service/utilities.service';
import { MoviesListService } from './movies-list.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit, OnChanges {
  constructor(
    private readonly moviesListService: MoviesListService,
    private readonly utilitiesService: UtilitiesService
  ) {}
  moviesList: any;

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  getSearch(event: any) {
    this.moviesListService.getList(event.search).subscribe((response) => {
      if (!this.moviesList) {
        this.moviesList = response;
      } else {
        this.utilitiesService.errorHandlerMessgae('No Movies Found');
        this.moviesList = '';
      }
    });
  }
}
