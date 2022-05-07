import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipes'
})
export class CustomPipesPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    //const[x]=args;
    return value*75;
    // return value*x;
  }
}
