import { Component } from '@angular/core';

@Component({
  selector: 'app-anotherparent',
  templateUrl: './anotherparent.component.html',
  styleUrls: ['./anotherparent.component.css']
})
export class AnotherparentComponent {

  alert(message:string){
    window.alert(message);
  }
}
