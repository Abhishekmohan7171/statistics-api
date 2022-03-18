import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApithreeService {

  constructor( private http: HttpClient) { }

  apiCallthree(){
    return this.http.get("http://api.scb.se/OV0104/v1/doris/en/ssd/MI");
  }
}
