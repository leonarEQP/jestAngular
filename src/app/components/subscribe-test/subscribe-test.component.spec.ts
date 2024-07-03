import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeTestComponent } from './subscribe-test.component';

describe('SubscribeTestComponent', () => {
  let component: SubscribeTestComponent;
  let fixture: ComponentFixture<SubscribeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscribeTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubscribeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getData and process data correctly', () => {
    const getDataSpy = jest.spyOn(component, 'getData');
    const processDaraSpy = jest.spyOn(component, 'processData');

    // Call getData method
    component.getData().subscribe((data) => {
      // Verify that getData was called
      expect(getDataSpy).toHaveBeenCalled();

      // Calls the processData method with data
      component.processData(data);

      //Verify that processData was called
      expect(processDaraSpy).toHaveBeenCalledWith(data);
    });
  });
});
