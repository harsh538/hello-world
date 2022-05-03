import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-click',
  templateUrl: './button-click.component.html',
  styleUrls: ['./button-click.component.css']
})
export class ButtonClickComponent {
public title='Basic Form';
Userdata:any={}
getData(data:any){
  console.warn(data);
  this.Userdata=data;
}
}
