import { Directive,ElementRef} from '@angular/core';

@Directive({
  selector: '[appElDir]'
})
export class ElDirDirective {

  constructor(elementa:ElementRef) {
    elementa.nativeElement.style.color='blue';
    elementa.nativeElement.style.backgroundColor='red';
   }
}
