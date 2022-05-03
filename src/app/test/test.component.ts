import { Component, OnInit } from '@angular/core';

  // @Component({
  //   selector: 'app-test',
  //   template: `
  // <div>
  // INLINE TEmplate
  // </div>
  // `,//tilde is use for multi line 
  //   styles: ['div{color:red;}'] // give direct style 
  // })  OR

// @Component({
//   selector: 'app-test',
//   template: '<div>INLINE TEmplate</div>', //instead of url give direct html code
//   styles: ['div{color:green;}'] // give direct style 
// })

@Component({
  selector: 'app-test',
  template: `
  <h1>Learning Style Binding</h1>
  <h2>Welcome {{name}}</h2>
  <h2>Hola {{name.toUpperCase()}}</h2>
  <h2 [style.color]="'Blue'" >Style Binding</h2>
  <h2 [style.color]="FontColor" >Style Binding 2 using class Attribute</h2>
  <h2 [ngStyle]="titleStyle" >Style Binding 3 using Object</h2>
  <h2 [style.color]="hasError? 'red' :'Green'">Style Binding Using condition</h2>
  <h1 class="header">in test.coomponent html page</h1>
  `,
  styles: [`
  `]
}) 

export class TestComponent implements OnInit {
public name='Harshad';
public hasError =true;
public isSpecial=false;
public FontColor="Orange";
public value=window.location.href;

public titleStyle={
 color:"purple",
 fontStyle:"italic"
};


  ngOnInit(): number {
    return 777;
  }
}
