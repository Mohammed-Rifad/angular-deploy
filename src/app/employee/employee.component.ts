import { Component, OnInit } from '@angular/core';
import { EmpDataService } from '../emp-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
data:any
emp_list:any
  constructor(data:EmpDataService,private router:Router) { 
    this.data=data.loadEmployee()
  }

  ngOnInit(): void {
    this.emp_list=this.data
    console.log(this.emp_list)
    
  }

  displayDetails(id:any){
    console.log('id is',id)
this.router.navigate(['emp',id])
  }

}
