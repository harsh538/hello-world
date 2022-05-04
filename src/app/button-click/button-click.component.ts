import { Component, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button-click',
  templateUrl: './button-click.component.html',
  styleUrls: ['./button-click.component.css']
})

export class ButtonClickComponent {
  @Output() updateDetailsEvent= new EventEmitter<string>();
}
