// FormComponent.spec.ts (archivo de pruebas)
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('the name field is required', () => {
    const nameField = component.form.get('name');
    expect(nameField).toBeTruthy();
    nameField?.setValue('');
    expect(nameField?.valid).toBe(false);
  });

  it('name has an error with more than 5 characters', () => {
    const nameField = component.form.get('name');
    nameField?.setValue('Leonard');
    expect(nameField?.valid).toBe(false);
  });
});
