import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { GetApioneService } from './../../app/table-one/get-apione.service';

@Component({
  selector: 'app-table-one',
  templateUrl: './table-one.component.html',
  styleUrls: ['./table-one.component.css'],
})
export class TableOneComponent implements OnInit {
  labour: any;
  constructor(private api: GetApioneService) {
    this.api.apiCallone().subscribe((data) => {
      console.log('The Data from the Table-one', data);

      this.labour = data;
    });
  }

  ngOnInit(): void {}
}
