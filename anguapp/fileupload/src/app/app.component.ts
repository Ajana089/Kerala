import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';
import { Router } from '@angular/router';
//import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // images: any;
  // selectImage(event:any){
  //   if(event.target.files.length>0){
  //     const file=event.target.files[0];
  //     this.images=file;
  //   }

  // }
  // onSubmit(){
  //   const formData=new FormData();
  //   formData.append('file',this.images);
  //   this.http.post<any>('http://localhost:3000/file',formData).
  //   subscribe(
  //     (res)=>console.log(res),
  //     (err)=>console.log(err)
  //   );

  // }
  title:String="EmployeeManagrment";

  constructor(private employee:EmployeeService ,private router:Router) { }
  employe=new Employee("","","",0);

  ngOnInit(): void {
  }
  addEmployee()
  {
    this.employee.newEmployee(this.employe);
    alert("success");
    console.log(this.employe)
    //this.router.navigate(['']);
    //alert("success");
  }

  
}
