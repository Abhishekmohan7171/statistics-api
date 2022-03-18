import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor( private http: HttpClient ) { }

  apiCall(){
    return this.http.get('http://api.scb.se/OV0104/v1/doris/en/ssd');
    // return this.http.get('https://jsonplaceholder.typicode.com.todos/');
  }
}
