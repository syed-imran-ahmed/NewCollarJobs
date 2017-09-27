import {Component} from "@angular/core";
import {OnInit} from "@angular/core";
import {Router} from '@angular/router'

import {Employee} from "../dto/employee"
import {RegisterEmployeeService} from "../services/register.employee.service"
/**
 * Created by Gaurav on 15-04-2017.
 */

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: 'dummy-register.html',
  styleUrls: ['register-employee.css']
})
export class RegisterComponent implements OnInit{

  userName: String;
  password : String;

  ngOnInit() {
    console.log("Initialise");
  }

  constructor(private registerEmployeeService :RegisterEmployeeService,private router: Router) {

  }

  log(logger:any){
    console.log(logger);
  }

  onSubmit(form:any) {
    console.log(form.username);
    console.log(form.password);
     this.registerEmployeeService.
     postEmployee(form)//new Employee(null,null,form.username,form.pass,null)
       .then(response=> {
         console.log(response);
         this.router.navigate(['home']);

       }).catch(err=>{
       console.log("ERRROOOOOOOOOOOOOO");
       console.log(err);
     });

  }

};
