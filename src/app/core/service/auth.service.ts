import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  isExpireUser() {
    const tocken = this.getTocken();
    debugger;
  }
  public getTocken(): string {
    const data: any = localStorage.getItem('user');
    const tocken = JSON.parse(data).accessToken;
    return tocken;
  }
}
