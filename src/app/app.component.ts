import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directives in Angular';
  loginForm= new FormGroup({
    user:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  })
  addDetails(){
    console.warn(this.loginForm.value);
  }
  get userx(){
    return this.loginForm.get('user');
  }
  //getters methods
  get pwd()
  {
    return this.loginForm.get('password');
  }
}