import { Component } from '@angular/core';

@Component({
  selector: 'test-xdescribe',
  standalone: true,
  imports: [],
  template: `<h1>Works</h1>`,
})
export class XDescribe {
  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    return a / b;
  }

  exponential(a: number, b: number): number {
    return a ** b;
  }
}
