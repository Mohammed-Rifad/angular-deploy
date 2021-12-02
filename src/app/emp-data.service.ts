import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {

  constructor() { }

  loadEmployee(){
    return [
      {
        'emp_id':'1',
        'emp_name':'Rahul',
        'emp_age':'25',
        'emp_gender':'Male',
        'emp_email':'rahul@gmail.com',
        'img':'../assets/emp1.jpg'
      },
      {
        'emp_id':'2',
        'emp_name':'John',
        'emp_age':'28',
        'emp_gender':'Male',
        'emp_email':'john@gmail.com',
        'img':'../assets/emp2.jpg'
      },
      {'emp_id':'3',
        'emp_name':'Omar',
        'emp_age':'22',
        'emp_gender':'Male',
        'emp_email':'omar12@gmail.com',
        'img':'../assets/emp3.jpg'
      }
    ]
  }
}
