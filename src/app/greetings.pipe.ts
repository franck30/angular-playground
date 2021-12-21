import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greetings'
})
export class GreetingsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `Hello ${value}`;
  }

}
