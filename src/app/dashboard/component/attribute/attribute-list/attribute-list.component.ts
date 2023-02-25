import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Attribute } from 'src/app/model/attribute';
import { AttributeService } from '../attribute.service';
import { Category } from 'src/app/model/category';
import { CategoryListService } from '../../category/category-list/categroy-list.service';
import { Pagination } from 'src/app/model/pagination';
import { UtilitiesService } from 'src/app/core/service/utilities.service';

@Component({
  selector: 'app-attribute-list',
  templateUrl: './attribute-list.component.html',
  styleUrls: ['./attribute-list.component.css'],
})
export class AttributeListComponent implements OnInit {
  displayedColumns: string[] = ['Title', 'Description', 'Status', 'Action'];
  dataSource: any = [];
  pagination: Pagination = {
    page: 1,
    limit: 5,
    sort: 1,
    status: true,
  };

  constructor(
    private readonly categoryListService: CategoryListService,
    private readonly attributeService: AttributeService,
    private readonly utilitiesService: UtilitiesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAttributeList();
  }
  getAttributeList() {
    const payload = this.pagination;
    this.attributeService.getAttribute(payload).subscribe((response) => {
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
    this.getAttributeList();
  }

  togleAttribute(event: any, attribute: Attribute) {
    attribute.status = event.checked;
    //  this.categoryListService
    //     .updateSubCategory(category._id, category)
    //    .subscribe((res) => {
    //       this.getSubCategoryList()Q
    //     });
  }
  editAttribute(attribute: Attribute) {
    this.router.navigate(['dashboard/attribute', 'create'], {
      queryParams: {
        id: attribute._id,
      },
    });
  }
}
