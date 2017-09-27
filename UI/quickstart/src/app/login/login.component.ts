/**
 * Created by Gaurav on 15-04-2017.
 */
import {Component,ViewChild} from "@angular/core";
import {OnInit} from "@angular/core";
import {Router} from '@angular/router'
import {Ng2PopupComponent,Ng2MessagePopupComponent} from "ng2-popup"

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'dummylogin.html'//,
  //styleUrls: ['register-employee.css']
})
export class LoginComponent implements OnInit{
  @ViewChild(Ng2PopupComponent) popup: Ng2PopupComponent;

  ngOnInit() {
    //this.openPopup();
  }
  submitted(event:any) {
    console.log("I am clicked");
    this.openPopup();
  }

  openPopup() {
    this.popup.open(Ng2MessagePopupComponent, {
      title: 'Course Registered',
      message: 'Your course is successfully registered',
      buttons: {
        OK: () => {
          this.popup.close();
        }
      }
    });
  }
  test():void{
    console.log("I am clicked");
  }

}
