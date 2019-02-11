import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _url: string;
  constructor(private http: HttpClient) {
    this._url = environment.apiUrl;
  }
  get(serviceApi) {
    return this.http.get(this._url+serviceApi);
  }
  post(serviceApi:string,data) {
    return this.http.post(this._url+serviceApi, data);
  }
  getProducts(){
    return this.http.get('assets/mocks/products.json') ;
  }
}

