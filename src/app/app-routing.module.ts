import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableOneComponent } from './table-one/table-one.component';
import { TableThreeComponent } from './table-three/table-three.component';
import { TableTwoComponent } from './table-two/table-two.component';

const routes: Routes = [
  {
    path: 'Labour',
    component:TableOneComponent
  },
  {
    path: 'Buissness',
    component:TableTwoComponent
  },
  {
    path: 'Environment',
    component:TableThreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TableOneComponent, TableTwoComponent, TableThreeComponent];
