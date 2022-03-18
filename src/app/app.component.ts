import { Component } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { GetApiService } from './get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'statistical-db';

  data:any;
  constructor ( private api:GetApiService ){
    this.api.apiCall().subscribe((data)=>{

      console.log("The Data from the API",data);

      this.data = data;
    })
  }
  // ngOnInit(){
  //   this.api.apiCall().subscribe((data)=>{
  //     console.log("The Data from the API",data);
  //   })
  // }
}
