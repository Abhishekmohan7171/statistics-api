import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApitwoService {

  constructor(private http: HttpClient) { }

  apiCalltwo(){
    return this.http.get("http://api.scb.se/OV0104/v1/doris/en/ssd/NV")
  }
}
