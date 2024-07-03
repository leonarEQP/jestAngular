import { Component } from '@angular/core';

@Component({
  selector: 'app-method-test',
  standalone: true,
  imports: [],
  templateUrl: './method-test.component.html',
})
export class MethodTestComponent {
  doSomething(): void {
    console.log('doSomething() works');
  }
}
