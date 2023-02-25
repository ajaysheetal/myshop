import { Attribute } from 'src/app/model/attribute';
import { HttpService } from 'src/app/core/service/http.service';
import { Injectable } from '@angular/core';
import { Pagination } from 'src/app/model/pagination';

@Injectable({
  providedIn: 'root',
})
export class AttributeService {
  constructor(private readonly api: HttpService) {}

  saveAttribute(body: Attribute) {
    return this.api.post('attribute', body);
  }
  getAttributeById(id: string) {
    return this.api.get(`attribute/${id}`, {});
  }

  updateAttribute(body: Attribute, id: string) {
    return this.api.put(`attribute/${id}`, body);
  }

  getAttribute(data: Pagination) {
    return this.api.get(`attribute`, {
      params: data,
    });
  }
}
