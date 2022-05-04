import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-button-click',
  templateUrl: './button-click.component.html',
  styleUrls: ['./button-click.component.css']
})

export class ButtonClickComponent {
  @Input() item:{name:string,email:string}={name:'',email:''}
}
