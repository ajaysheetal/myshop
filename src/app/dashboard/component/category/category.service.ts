import { Category } from 'src/app/model/category';
import { HttpService } from 'src/app/core/service/http.service';
import { Injectable } from '@angular/core';
import { Pagination } from 'src/app/model/pagination';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private readonly api: HttpService) {}

  saveCategory(body: Category) {
    return this.api.post('category', body);
  }
  getCategoryById(id: string) {
    return this.api.get(`category/${id}`, {});
  }

  updateCategory(body: Category, id: string) {
    return this.api.put(`category/${id}`, body);
  }
  getCategory(data: Pagination) {
    return this.api.get(`category`, {
      params: data,
    });
  }
}
