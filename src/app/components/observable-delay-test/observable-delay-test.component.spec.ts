import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObservableDelayComponent } from './observable-delay-test.component';

describe('MiComponenteComponent', () => {
  let component: ObservableDelayComponent;
  let fixture: ComponentFixture<ObservableDelayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservableDelayComponent],
    });
    fixture = TestBed.createComponent(ObservableDelayComponent);
    component = fixture.componentInstance;
  });

  it('debería probar el Observable', () => {
    const observableSpy = jest.spyOn(component, 'probarObservable');

    component.probarObservable();

    expect(observableSpy).toHaveBeenCalled();
  });
});
