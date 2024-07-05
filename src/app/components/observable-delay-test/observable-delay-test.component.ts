import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-observable-delay-component',
  template: ` <h1>Hello World</h1> `,
})
export class ObservableDelayComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.probarObservable();
  }

  public probarObservable(): void {
    const eventoSimulado = new MouseEvent('click');
    const observable = fromEvent(document, 'click').pipe(delay(1000));

    observable.subscribe((evento) => {
      console.log('Evento de clic después del retraso:', evento);
    });

    document.dispatchEvent(eventoSimulado);
  }
}
