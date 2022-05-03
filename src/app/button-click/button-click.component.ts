import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-click',
  templateUrl: './button-click.component.html',
  styleUrls: ['./button-click.component.css']
})
export class ButtonClickComponent {
  public title = 'To do List in Angular';
  list: any[] = [];
  addTask(t: any) {
    this.list.push({ id: this.list.length, name: t });
    console.warn(t);
  }
  removeTask(id: number) {
    console.warn(id);
    this.list = this.list.filter(item => item.id !== id);
  }
}
