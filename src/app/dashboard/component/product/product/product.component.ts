import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../../category/category.service';
import { SubCategoryService } from '../../sub-category/sub-category.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [CategoryService, SubCategoryService],
})
export class ProductComponent implements OnInit {
  CategoryList: any = [];
  SubCategoryList: any = [];
  constructor(
    private readonly categoryService: CategoryService,
    private readonly subCategoryService: SubCategoryService
  ) {}

  ngOnInit(): void {
    this.getCategroryList();
  }
  getCategroryList() {
    this.categoryService.getCategory({ status: true }).subscribe((response) => {
      this.CategoryList = response;
    });
  }
  getSubCatgory(event: any) {
    this.subCategoryService
      .getSubCategoryByCategoryId({ status: true }, event.value)
      .subscribe((res: any) => {
        this.SubCategoryList = res.data;
      });
  }
  saveProduct(data: any) {}
}
