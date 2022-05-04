import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pass data from child to parent component';
  data="x";
  userDetails(items:string) {
    console.warn(items);
    this.data=items;
  }
}
