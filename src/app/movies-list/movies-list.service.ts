import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../core/service/http.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesListService {
  constructor(private readonly api: HttpService) {}

  getList(search: string) {
    return this.api.getAnother(
      `http://www.omdbapi.com/?i=tt3896198&apikey=1c143930&t=${search}`
    );
  }
}
