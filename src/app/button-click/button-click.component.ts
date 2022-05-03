import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-click',
  templateUrl: './button-click.component.html',
  styleUrls: ['./button-click.component.css']
})
export class ButtonClickComponent {
public title='Toggle';
dispaly=true;
update(){
  this.dispaly=!this.dispaly;
}
}
