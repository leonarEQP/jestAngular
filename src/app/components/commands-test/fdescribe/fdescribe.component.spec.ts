import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FDescribe } from './fdescribe.component';

// ONLY TEST THIS SUITE
fdescribe('FDescribe', () => {
  let component: FDescribe;
  let fixture: ComponentFixture<FDescribe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FDescribe],
    }).compileComponents();

    fixture = TestBed.createComponent(FDescribe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should multiply two numbers correctly', () => {
    const result = component.multiply(8, 4);
    expect(result).toBe(32);
  });

  it('should divide two numbers correctly', () => {
    const result = component.divide(8, 4);
    expect(result).toBe(2);
  });

  it('should exponentiate a number a few times correctly', () => {
    const result = component.exponential(2, 3);
    expect(result).toBe(8);
  });
});

describe('FDescribe', () => {
  let component: FDescribe;
  let fixture: ComponentFixture<FDescribe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FDescribe],
    }).compileComponents();

    fixture = TestBed.createComponent(FDescribe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should multiply two numbers correctly', () => {
    const result = component.multiply(2, 3);
    expect(result).toBe(6);
  });
});
