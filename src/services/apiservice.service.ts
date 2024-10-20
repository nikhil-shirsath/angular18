import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor() { }

  http = inject(HttpClient);
  apiPath: string='https://jsonplaceholder.typicode.com/posts';
  getAllApiCall(){
    return this.http.get(this.apiPath);
  }
}
