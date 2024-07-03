import { Component } from '@angular/core';

@Component({
  selector: 'app-fit',
  standalone: true,
  imports: [],
  template: `<h1>Works</h1>`,
})
export class FitComponent {
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
