import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Category } from 'src/app/model/category';
import { Pagination } from 'src/app/model/pagination';
import { SubCategory } from 'src/app/model/subCategory';
import { SubCategoryService } from '../sub-category.service';

@Component({
  selector: 'app-sub-category-list',
  templateUrl: './sub-category-list.component.html',
  styleUrls: ['./sub-category-list.component.css'],
})
export class SubCategoryListComponent implements OnInit {
  constructor(
    private readonly subCategoryService: SubCategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  displayedColumns: string[] = ['Title', 'Category', 'Status', 'Action'];
  dataSource: any = [];
  pagination: Pagination = {
    status: true,
    page: 1,
    limit: 5,
    sort: 1,
  };

  ngOnInit(): void {
    this.getSubCategoryList();
  }

  getSubCategoryList() {
    const payload = this.pagination;

    this.subCategoryService
      .getSubCategoryList(payload)
      .subscribe((response) => {
        console.log(response);
        this.dataSource = response;
      });
  }

  handlePageEvent(event: any) {
    this.pagination = {
      status: true,
      page: event.pageIndex + 1,
      limit: event.pageSize,
      sort: 1,
    };
    this.getSubCategoryList();
  }

  togleCategory(event: any, subCategory: SubCategory) {
    subCategory.status = event.checked;
    this.subCategoryService
      .updateSubCategory(subCategory._id, subCategory)
      .subscribe((res) => {
        this.getSubCategoryList();
      });
  }

  editSubCategory(subCategory: SubCategory) {
    this.router.navigate(['dashboard/sub-category', 'create'], {
      queryParams: {
        id: subCategory._id,
      },
    });
  }
}
