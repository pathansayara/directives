import { Injectable } from '@angular/core';
import { formData } from './formdata';

@Injectable({
  providedIn: 'root'
})
export class CrudlogicService {

  private data:formData []=[];

  constructor() { }
  
  // Create operation
  create(formData:formData) {
    this.data.push(formData);
  }

  // Read operation
  getAll() {
    return this.data;
  }

  // Update operation
  update(index:number, formData:formData) {
    if (index >= 0 && index < this.data.length) {
      this.data[index] = formData;
    }
  }

  // Delete operation
  delete(index:number) {
    if (index >= 0 && index < this.data.length) {
      this.data.splice(index, 1);
    }
  }

}
