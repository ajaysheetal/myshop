import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Category } from 'src/app/model/category';
import { CategoryListService } from './categroy-list.service';
import { Pagination } from 'src/app/model/pagination';
import { UtilitiesService } from 'src/app/core/service/utilities.service';

export interface PeriodicElement {
  title: string;
  description: string;
  status: true;
}

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  displayedColumns: string[] = ['Title', 'Description', 'Status', 'Action'];
  dataSource: any = [];
  pagination: Pagination = {
    status: true,
    page: 1,
    limit: 5,
    sort: 1,
  };

  constructor(
    private readonly categoryListService: CategoryListService,
    private readonly utilitiesService: UtilitiesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCategoryList();
  }
  getCategoryList() {
    const payload = this.pagination;
    this.categoryListService.getCategory(payload).subscribe((response) => {
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
    this.getCategoryList();
  }

  togleCategory(event: any, category: Category) {
    category.status = event.checked;
    //  this.categoryListService
    //     .updateSubCategory(category._id, category)
    //    .subscribe((res) => {
    //       this.getSubCategoryList()Q
    //     });
  }
  editCategory(category: Category) {
    this.router.navigate(['dashboard/category', 'create'], {
      queryParams: {
        id: category._id,
      },
    });
  }
}
