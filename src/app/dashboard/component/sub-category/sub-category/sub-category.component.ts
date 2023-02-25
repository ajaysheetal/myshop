import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Category } from 'src/app/model/category';
import { Pagination } from 'src/app/model/pagination';
import { SubCategory } from 'src/app/model/subCategory';
import { SubCategoryService } from '../sub-category.service';
import { UtilitiesService } from 'src/app/core/service/utilities.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css'],
})
export class SubCategoryComponent implements OnInit {
  subcategory = {
    categoryId: '',
    title: '',
    description: '',
    status: '',
  };
  CategoryList: any = [];
  editId: string = '';

  constructor(
    private readonly utilitiesService: UtilitiesService,
    private readonly subCategoryService: SubCategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCategroryList();
    this.route.queryParams.subscribe((params) => {
      this.editId = params['id'];
      this.subCategoryService
        .getSubCategoryById(params['id'])
        .subscribe((res: any) => {
          this.subcategory = {
            categoryId: res?.categoryId?._id,
            title: res?.title,
            description: res?.description,
            status: res?.status,
          };
        });
    });
  }

  getCategroryList() {
    this.subCategoryService
      .getCategory({ status: true })
      .subscribe((response) => {
        this.CategoryList = response;
      });
  }

  saveCategory(data: SubCategory) {
    if (this.editId) {
      this.subCategoryService
        .updateSubCategory(this.editId, data)
        .subscribe((response) => {
          this.utilitiesService.successToastMessage(
            'Category updated successfully'
          );
          this.router.navigate(['/dashboard/sub-category/list']);
        });
    } else {
      this.subCategoryService.saveSubCategory(data).subscribe(
        (response) => {
          this.utilitiesService.successToastMessage(
            'Category saved successfully'
          );
          this.router.navigate(['/dashboard/sub-category/list']);
        },
        (err) => {
          this.utilitiesService.errorHandlerMessgae(err.error.msg);
        }
      );
    }
  }
}
