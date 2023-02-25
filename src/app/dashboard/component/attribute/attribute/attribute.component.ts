import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Attribute } from 'src/app/model/attribute';
import { AttributeService } from '../attribute.service';
import { UtilitiesService } from 'src/app/core/service/utilities.service';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css'],
})
export class AttributeComponent implements OnInit {
  attribute: any = {
    name: '',
    value: '',
    status: '',
  };
  editId: string = '';
  attributeValueArray: any = [];
  constructor(
    private readonly attributeService: AttributeService,
    private readonly utilitiesService: UtilitiesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.editId = params['id'];
      this.attributeService
        .getAttributeById(params['id'])
        .subscribe((res: any) => {
          this.attribute = {
            name: res.name,
            value: '',
            status: res.status,
          };
          this.attributeValueArray = res.value;
        });
    });
  }

  saveAttribute(data: Attribute) {
    data.value = this.attributeValueArray;

    if (this.editId) {
      this.attributeService
        .updateAttribute(data, this.editId)
        .subscribe((response) => {
          this.utilitiesService.successToastMessage(
            'Attribute Updated successfully'
          );
          this.router.navigate(['dashboard/attribute/list']);
        });
    } else {
      this.attributeService.saveAttribute(data).subscribe(
        (response) => {
          this.utilitiesService.successToastMessage(
            'Attribute saved successfully'
          );
          this.router.navigate(['dashboard/attribute/list']);
        },
        (err) => {
          this.utilitiesService.errorHandlerMessgae(err.error.msg);
        }
      );
    }
  }

  addAttributeValue(value: any) {
    this.attributeValueArray.push(value);
    this.attribute.value = '';
  }
  deleteAttributeValue(index: number) {
    if (index > -1) {
      this.attributeValueArray.splice(index, 1);
    }
  }
}
