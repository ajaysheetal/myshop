import { Injectable } from '@angular/core';
import { HttpService } from '../core/service/http.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private readonly api: HttpService) {}
  login(body: any) {
    return this.api.post(`user/login`, body);
  }
}
