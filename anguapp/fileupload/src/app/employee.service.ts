import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }
  newEmployee(employee:any){
    console.log(employee);
    return this.http.post("http://localhost:3000/insert",{employee})
    .subscribe(data=>{console.log(data)})
  }
}
