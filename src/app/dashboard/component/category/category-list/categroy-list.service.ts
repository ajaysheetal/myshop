import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/service/http.service';
import { Pagination } from 'src/app/model/pagination';

@Injectable({
  providedIn: 'root',
})
export class CategoryListService {
  constructor(private readonly api: HttpService) {}

  getCategory(data: Pagination) {
    return this.api.get(`category`, {
      params: data,
    });
  }
  
}
