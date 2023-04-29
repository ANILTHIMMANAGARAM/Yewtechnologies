import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms'
export class Employee {
  EmpId: number = 0;
  LastName!: string;
  FirstName!: string;
  DOB!: Date;
  Email!: string;
  Mobile!: number;
  Department!: string;
  Designation!: string;
  Salary!: number;

}

export class SalaryRange {
  min!: number;
  max!: number
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  salaryRange: SalaryRange = new SalaryRange();
  constructor(private servic: EmployeeService, private form: FormBuilder) { }
  ngOnInit(): void {
    this.GetEmployeeDetailes();
  }
  emplo: Employee = new Employee();
  emplarr: Employee[] = [];

  onOptionsSelected(value: string) {
    debugger
    if (value == "Manager") {
      this.salaryRange.min = 10000;
      this.salaryRange.max = 20000;

    } else if (value == "Peon") {
      this.salaryRange.min = 5000;
      this.salaryRange.max = 10000;
    }
    console.log("the selected value is " + value);
  }
  GetEmployeeDetailes(): any {
    debugger
    this.servic.GetEmployeeDetailes().subscribe(
      (resp: any) => {
        debugger
        this.emplarr = resp;
      }
    )
  }
  GetEmployeeDetailesBYId(id: number): any {
    this.servic.GetEmployeeDetailesBYId(id).subscribe(
      (resp: any) => {
        this.emplo = resp;
        this.show = true;
      }
    )
  }
  InsertEmployeeDetiles(employ: any): any {
    debugger
    this.servic.InsertEmployeeDetiles(employ).subscribe(
      (resp: any) => {
        this.emplo = resp;

      }
    )
    this.GetEmployeeDetailes;
  }

  UpdateEmployeData(employ: any): any {
    this.servic.UpdateEmployeData(employ).subscribe(
      (resp: any) => {
        this.emplo = resp;

      }
    )

  }
  DeleteEmployueData(id: number): any {
    this.servic.DeleteEmployueData(id).subscribe(
      (resp: any) => {
        this.emplo = resp;

      }
    )

  }
  show = false;
  Showform() {
    this.emplo =new Employee();
    this.show = true;

  }

  OnClose() {
   
    this.show = false;
  }

}
