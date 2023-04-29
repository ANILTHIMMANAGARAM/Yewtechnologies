import { NgModule } from '@angular/core';
import { EmployeeComponent } from './Components/employee/employee.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:"employee",component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
