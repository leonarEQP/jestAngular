// my-component.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentComponent } from './document.component';

describe('DocumentComponent', () => {
  let fixture: ComponentFixture<DocumentComponent>;
  let component: DocumentComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentComponent],
    });
    fixture = TestBed.createComponent(DocumentComponent);
    component = fixture.componentInstance;
  });

  it('should display an alert when you click the', () => {
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const button = fixture.nativeElement.querySelector('button');
    button.click();

    expect(alertSpy).toHaveBeenCalledWith('¡Hello, World!');
  });
});
