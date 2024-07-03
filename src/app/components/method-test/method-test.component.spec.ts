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

  it('should create', () => {
    // create a constant and call SpyOn
    const doSomethingSpy = jest.spyOn(component, 'doSomething');

    // call method
    component.doSomething();

    // Checks that doSomething has been called.
    expect(doSomethingSpy).toHaveBeenCalled();

    expect(component).toBeTruthy();
  });
});
