import { Component } from '@angular/core';

@Component({
  selector: 'test-fdescribe',
  standalone: true,
  imports: [],
  template: `<h1>Works</h1>`,
})
export class FDescribe {
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
