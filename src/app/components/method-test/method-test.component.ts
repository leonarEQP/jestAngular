import { Component } from '@angular/core';

@Component({
  selector: 'app-method-test',
  standalone: true,
  imports: [],
  templateUrl: './method-test.component.html',
})
export class MethodTestComponent {
  // No return method
  doSomething(): void {
    console.log('doSomething() works');
  }

  // Return method
  sum(a: number, b: number): number {
    return a + b;
  }

  // Private method
  public calculateSubtract(a: number, b: number): number {
    return a - b;
  }
  // Public method
  public subtract(a: number, b: number): number {
    return this.calculateSubtract(a, b);
  }
}
