import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudlogicService } from '../crudlogic.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
  // Create the form group
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private curdop:CrudlogicService) {
    // Initialize the form with FormBuilder
    this.myForm = this.fb.group({
      // Define your form controls and their initial values and validators
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // Handle form submission
  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      this.curdop.create(formData);
      this.myForm.reset(); 
    } 
  }

}
