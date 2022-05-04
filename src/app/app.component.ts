import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Basics of Type Script';
  data=20;
  object:{name:string;pho:number}={name:'Harshad',pho:32423}; // Object in TS
  arrayy:string[]=['apple','mango','pineapple','orenge'];     //array in TS
  //pipeline character used for assiging mulitiple datatypes.
  getDetails(item:string| boolean){
    console.warn(item);
  }
  update(){
    this.getDetails(true);
  }
}