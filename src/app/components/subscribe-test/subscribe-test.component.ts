import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-subscribe-test',
  standalone: true,
  imports: [],
  templateUrl: './subscribe-test.component.html',
})
export class SubscribeTestComponent {
  getData(): Observable<any> {
    // HTTP call simulation

    return of({ status: 200, data: 'Simulated data' });
  }

  processData(data: any): void {
    console.log('processed data', data);
  }
}
