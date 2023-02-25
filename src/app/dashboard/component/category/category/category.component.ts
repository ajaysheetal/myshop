import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { Category } from 'src/app/model/category';
import { CategoryService } from '../category.service';
import { UtilitiesService } from 'src/app/core/service/utilities.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  category: any = {
    title: '',
    description: '',
    status: '',
  };
  editId: string = '';
  constructor(
    private readonly categoryService: CategoryService,
    private readonly utilitiesService: UtilitiesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.editId = params['id'];
      this.categoryService
        .getCategoryById(params['id'])
        .subscribe((res: any) => {
          this.category = {
            title: res.title,
            description: res.description,
            status: res.status,
          };
        });
    });
  }

  saveCategory(data: Category) {
    if (this.editId) {
      this.categoryService
        .updateCategory(data, this.editId)
        .subscribe((response) => {
          this.utilitiesService.successToastMessage(
            'Category Updated successfully'
          );
          this.router.navigate(['dashboard/category/list']);
        });
    } else {
      this.categoryService.saveCategory(data).subscribe(
        (response) => {
          this.utilitiesService.successToastMessage(
            'Category saved successfully'
          );
          this.router.navigate(['dashboard/category/list']);
        },
        (err) => {
          this.utilitiesService.errorHandlerMessgae(err.error.msg);
        }
      );
    }
  }
}
