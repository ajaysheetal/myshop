import { HttpService } from 'src/app/core/service/http.service';
import { Injectable } from '@angular/core';
import { Pagination } from 'src/app/model/pagination';
import { SubCategory } from 'src/app/model/subCategory';

@Injectable()
export class SubCategoryService {
  constructor(private readonly api: HttpService) {}

  getSubCategoryList(data: Pagination) {
    return this.api.get(`sub-category`, {
      params: data,
    });
  }

  getCategory(data: Pagination) {
    return this.api.get(`category`, {
      params: data,
    });
  }

  getSubCategoryByCategoryId(data: Pagination, id: string) {
    return this.api.get(`sub-category/category/${id}`, { params: data });
  }

  getSubCategoryById(id: string) {
    return this.api.get(`sub-category/${id}`, {});
  }

  saveSubCategory(body: SubCategory) {
    return this.api.post('sub-category', body);
  }

  updateSubCategory(id: string, body: SubCategory) {
    return this.api.put(`sub-category/${id}`, body);
  }
}
