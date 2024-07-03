import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XitComponent } from './xit.component';

describe('XitComponent', () => {
  let component: XitComponent;
  let fixture: ComponentFixture<XitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XitComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(XitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should multiply two numbers correctly', () => {
    const result = component.multiply(8, 4);
    expect(result).toBe(32);
  });

  // XIT EXCLUDE TEST
  xit('should divide two numbers correctly', () => {
    const result = component.divide(8, 4);
    expect(result).toBe(2);
  });

  it('should exponentiate a number a few times correctly', () => {
    const result = component.exponential(2, 3);
    expect(result).toBe(8);
  });
});
