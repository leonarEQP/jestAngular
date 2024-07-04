// my-component.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: ` <button (click)="showAlert()">Mostrar Alerta</button> `,
})
export class DocumentComponent {
  showAlert() {
    window.alert('¡Hello, World!');
  }
}
