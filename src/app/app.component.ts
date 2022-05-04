import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Advance Pipes in Angular';
  user = { 
    name:'Anil',
    phone:1234
  }
}