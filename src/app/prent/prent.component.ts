import { Component } from '@angular/core';

@Component({
  selector: 'app-prent',
  templateUrl: './prent.component.html',
  styleUrls: ['./prent.component.css']
})
export class PrentComponent {

  alert(message:string){
    window.alert(message);
  }
}
