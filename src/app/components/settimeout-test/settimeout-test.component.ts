import { Component } from '@angular/core';

@Component({
  selector: 'app-setTimeout-test',
  templateUrl: './settimeout-test.component.html',
  styles: ``,
})
export class SetTimeoutTestComponent {
  myMethod() {
    console.log('Executing myMethod before the setTimeout');

    setTimeout(() => {
      console.log('Executing myMethod after the setTimeout');
    }, 1000);
  }
}
