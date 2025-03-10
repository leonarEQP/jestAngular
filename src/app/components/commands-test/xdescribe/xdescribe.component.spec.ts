import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XDescribe } from './xdescribe.component';

// XIT EXCLUDES THIS TEST SUITE
xdescribe('XDescribe', () => {
  let component: XDescribe;
  let fixture: ComponentFixture<XDescribe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XDescribe],
    }).compileComponents();

    fixture = TestBed.createComponent(XDescribe);
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

describe('XDescribe', () => {
  let component: XDescribe;
  let fixture: ComponentFixture<XDescribe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XDescribe],
    }).compileComponents();

    fixture = TestBed.createComponent(XDescribe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should multiply two numbers correctly', () => {
    const result = component.multiply(9, 3);
    expect(result).toBe(27);
  });
});
