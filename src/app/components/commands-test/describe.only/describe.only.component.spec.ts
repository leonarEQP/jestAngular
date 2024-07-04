import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescribeOnlyComponent } from './describe.only.component';

// ONLY THIS SUITE WILL BE RUN
describe.only('DescribeOnlyComponent', () => {
  let component: DescribeOnlyComponent;
  let fixture: ComponentFixture<DescribeOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescribeOnlyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DescribeOnlyComponent);
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

describe('DescribeOnlyComponent', () => {
  let component: DescribeOnlyComponent;
  let fixture: ComponentFixture<DescribeOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescribeOnlyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DescribeOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should multiply two numbers correctly', () => {
    const result = component.multiply(9, 3);
    expect(result).toBe(27);
  });
});
