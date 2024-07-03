import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodTestComponent } from './method-test.component';

describe('MethodTestComponent', () => {
  let component: MethodTestComponent;
  let fixture: ComponentFixture<MethodTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MethodTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MethodTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should do something correctly', () => {
    // create a constant and call SpyOn
    const doSomethingSpy = jest.spyOn(component, 'doSomething');

    // call method
    component.doSomething();

    // Checks that doSomething has been called.
    expect(doSomethingSpy).toHaveBeenCalled();
  });

  it('should sum two numbers correctly', () => {
    // create a constant
    const result = component.sum(3, 5);

    // Check that the result is 8
    expect(result).toBe(8);
  });

  it('should subtract two numbers correctly using private mehod', () => {
    // create a constant
    const result = component.subtract(5, 3);

    // Check that the result is 8
    expect(result).toBe(2);
  });
});
