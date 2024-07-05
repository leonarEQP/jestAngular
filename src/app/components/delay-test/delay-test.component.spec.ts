import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DelayComponent } from './delay-test.component';

describe('MyComponent', () => {
  let fixture: ComponentFixture<DelayComponent>;
  let component: DelayComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelayComponent],
    });
    fixture = TestBed.createComponent(DelayComponent);
    component = fixture.componentInstance;
  });

  it('should get data after a delay', async () => {
    await component.fetchData();

    expect(component.data).toBe('API data obtained');
  });
});
