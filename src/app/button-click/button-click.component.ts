import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-click',
  templateUrl: './button-click.component.html',
  styleUrls: ['./button-click.component.css']
})
export class ButtonClickComponent {
public title='Nested Loops';

users=[
  {name:'Harshad',city:'Mumbai',socialAc:['facebook','linkedin','gmail']},
  {name:'Vishal',city:'Chennai',socialAc:['youtube','','gmail','java']},
  {name:'Subodh',city:'Nanded',socialAc:['facebook','linkedin','gmail']},
  {name:'Sudhir',city:'Kalyan',socialAc:['facebook','linkedin','gmail']},
]
}
