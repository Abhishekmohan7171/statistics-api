import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { GetApitwoService } from './get-apitwo.service';


@Component({
  selector: 'app-table-two',
  templateUrl: './table-two.component.html',
  styleUrls: ['./table-two.component.css']
})
export class TableTwoComponent implements OnInit {

  buissness:any;

  constructor(private api: GetApitwoService) {
      this.api.apiCalltwo().subscribe((data)=>{
        console.log("The data from table-two",data);

        this.buissness = data;
      });
   }

  ngOnInit(): void {
  }

}
