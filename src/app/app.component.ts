import { Component } from '@angular/core';
import {FormGroup,FormControl,FormControlName} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive Form';
  loginForm= new FormGroup({
    user:new FormControl(''),
    // or user:new FormControl('Harshad'), for default naming in web page
    password:new FormControl('')
    // or password:new FormControl('1234') for default naming in web page
  })
  addDetails(){
    console.warn(this.loginForm.value);
  }
}