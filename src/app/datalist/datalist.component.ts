import { Component } from '@angular/core';
import { CrudlogicService } from '../crudlogic.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent {

  editMode = false;
  editIndex: number | null = null;
  editForm: FormGroup | undefined;

  constructor(public crudop: CrudlogicService, private fb:FormBuilder) {}

  ngOnInit() {
    this.editForm = this.fb.group({
      editFirstName: ['', Validators.required],
      editLastName: ['', Validators.required],
      editEmail: ['', [Validators.required, Validators.email]],
    });
  }

  editItem(index: number) {
    this.editMode = true;
    this.editIndex = index;
    const selectedItem = this.crudop.getAll()[index];

    if (this.editForm) {
      this.editForm.patchValue({
        editFirstName: selectedItem.firstName,
        editLastName: selectedItem.lastName,
        editEmail: selectedItem.email,
      });
    }
  }

   
  onEditSubmit() {
    if (this.editForm && this.editForm.valid && this.editIndex !== null) {
      const editedData = this.editForm.value;
      this.crudop.update(this.editIndex, editedData);

      this.editMode = false;
      this.editIndex = null;
      if (this.editForm) {
        this.editForm.reset();
      }
    }
  }

  cancelEdit() {
    this.editMode = false;
    this.editIndex = null;
    if (this.editForm) {
      this.editForm.reset();
    }
   
  }

  
  deleteItem(index: number) {
    this.crudop.delete(index);
  }

}
