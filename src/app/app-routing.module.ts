import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  { path: '', redirectTo:'dep', pathMatch:'full'},
  { path: 'dep', component:DepartmentComponent},
  { path: 'emp', component:EmployeeComponent},
  { path: 'emp/:id', component:EmpDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingModule=[
  AppComponent,
  DepartmentComponent,
  EmployeeComponent,
  EmpDetailsComponent
]
