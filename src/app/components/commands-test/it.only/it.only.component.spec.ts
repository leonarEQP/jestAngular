import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItOnlyComponent } from './it.only.component';

describe('ItOnlyComponent', () => {
  let component: ItOnlyComponent;
  let fixture: ComponentFixture<ItOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItOnlyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should multiply two numbers correctly', () => {
    const result = component.multiply(8, 4);
    expect(result).toBe(32);
  });

  // ONLY THIS TEST WILL BE RUN INSIDE THE SUITE
  it.only('should divide two numbers correctly', () => {
    const result = component.divide(8, 4);
    expect(result).toBe(2);
  });

  it('should exponentiate a number a few times correctly', () => {
    const result = component.exponential(2, 3);
    expect(result).toBe(8);
  });
});
