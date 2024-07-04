// settimeout-test.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SetTimeoutTestComponent } from './settimeout-test.component';

describe('SetTimeoutTestComponent', () => {
  let fixture: ComponentFixture<SetTimeoutTestComponent>;
  let component: SetTimeoutTestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetTimeoutTestComponent],
    });
    fixture = TestBed.createComponent(SetTimeoutTestComponent);
    component = fixture.componentInstance;
  });

  it('should creates the component', () => {
    expect(component).toBeTruthy();
  });

  it('should executes myMethod correctly', (done) => {
    const consoleSpy = jest.spyOn(console, 'log');
    component.myMethod();

    expect(consoleSpy).toHaveBeenCalledWith(
      'Executing myMethod before the setTimeout'
    );

    // Espera 1000ms antes de verificar el segundo mensaje console.log
    setTimeout(() => {
      expect(consoleSpy).toHaveBeenCalledWith(
        'Executing myMethod after the setTimeout'
      );
      done();
    }, 1000);
  });
});
