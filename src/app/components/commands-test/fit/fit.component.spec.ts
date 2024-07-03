import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitComponent } from './fit.component';

describe('FitComponent', () => {
  let component: FitComponent;
  let fixture: ComponentFixture<FitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FitComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should multiply two numbers correctly', () => {
    const result = component.multiply(8, 4);
    expect(result).toBe(32);
  });

  // FIT FOCUS TEST
  fit('should divide two numbers correctly', () => {
    const result = component.divide(8, 4);
    expect(result).toBe(2);
  });

  it('should exponentiate a number a few times correctly', () => {
    const result = component.exponential(2, 3);
    expect(result).toBe(8);
  });
});
