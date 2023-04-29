import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

GetEmployeeDetailes():any{
 return this.http.get("https://localhost:44336/api/Employee/GetEmployeeDetiles");
}
GetEmployeeDetailesBYId(id:number):any{
 return this.http.get("https://localhost:44336/api/Employee/GetemployeeDAtaById?id="+id);
}
InsertEmployeeDetiles(employ:any):any{
 return this.http.post("https://localhost:44336/api/Employee/InsertemployeeData",employ);

}
UpdateEmployeData(employ:any):any{
 return this.http.put("https://localhost:44336/api/Employee/UpdateEmployeeData",employ)
}
DeleteEmployueData(id:number):any{

 return this.http.delete("https://localhost:44336/api/Employee/DeleteEmployeeData?id="+id);
}
}
