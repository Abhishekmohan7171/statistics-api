import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApioneService {
  

  constructor( private http: HttpClient) {}

  apiCallone(){
    return this.http.get("http://api.scb.se/OV0104/v1/doris/en/ssd/AM");
  }


}
