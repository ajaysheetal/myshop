import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  url: string;
  constructor(private readonly http: HttpClient) {
    this.url = environment.baseUrl;
  }

  public post(apiurl: string, body: any) {
    return this.http.post(`${this.url}${apiurl}`, body);
  }
  public put(apiurl: string, body: any) {
    return this.http.post(`${this.url}${apiurl}`, body);
  }
  public get(apiurl: string, body: any) {
    return this.http.get(`${this.url}${apiurl}`);
  }
  public delete(apiurl: string, body: any) {
    return this.http.delete(`${this.url}${apiurl}`);
  }
}