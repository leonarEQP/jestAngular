import { Component } from '@angular/core';

@Component({
  selector: 'app-delay-component',
  template: '<p>Data: {{ data }}</p>',
})
export class DelayComponent {
  data: string | null = null;

  async fetchData(): Promise<void> {
    await delay(1000);

    this.data = 'API data obtained';
  }
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
