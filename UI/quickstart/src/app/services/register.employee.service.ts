/**
 * Created by Gaurav on 15-04-2017.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";

import {Employee} from "../dto/employee";

@Injectable()
export class RegisterEmployeeService {
  employee: Employee;

  constructor(private httpService:Http) {

  }
//"{'username':'imran-testing1','password':'23Vatic#','passwordConfirm':'23Vatic#'}"
  postEmployee(employee:any):Promise<any> {
    console.log("Posted Empoyee!");
    return this.httpService.post("http://10.0.0.229:8081/registration",employee).toPromise().then(response=>{

      //map Response
      return response;

    }).catch(err=>{
      console.log("ERRROOOOOOOOOOOOOO");
      console.log(err);
    });
  }

}
