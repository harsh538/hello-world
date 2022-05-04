import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reusable component';
  userDetails=[
    {name:'Harshad',email:'harsh@test.com'},
    {name:'vishal',email:'vishal@test.com'},
    {name:'Rajat',email:'Rajat@test.com'},
    {name:'Khizar',email:'Khizar@test.com'}
  ]

}
