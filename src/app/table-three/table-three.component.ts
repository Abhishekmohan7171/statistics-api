import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { GetApithreeService } from './get-apithree.service';

@Component({
  selector: 'app-table-three',
  templateUrl: './table-three.component.html',
  styleUrls: ['./table-three.component.css']
})
export class TableThreeComponent implements OnInit {

  environment:any;

  constructor( private api: GetApithreeService) {
      this.api.apiCallthree().subscribe((data)=>{
        console.log("Data from the Table-three",data);

        this.environment = data;
      });
   }

  ngOnInit(): void {
  }

}
