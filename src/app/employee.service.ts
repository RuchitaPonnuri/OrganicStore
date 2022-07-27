import { Injectable } from '@angular/core';
import { Employee } from 'src/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  employs:Employee[]=[];

  


  deleteStudent(employee:Employee)
  {

    let idx=this.employs.indexOf(employee);
    this.employs.splice(idx,1);
  }

  


  getEmploys()
  {
    return this.employs;
  }

  addEmployee(employee:Employee)
  {

         this.employs.push(employee);


  }


  }
