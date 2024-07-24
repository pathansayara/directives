import { Component } from '@angular/core';

@Component({
  selector: 'app-cnc2',
  templateUrl: './cnc2.component.html',
  styleUrls: ['./cnc2.component.css']
})
export class Cnc2Component {
  name="false"

  getName()
  {
    alert("I am onclick event");
  }

  getNametwo(name:any)
  {
    alert("Hello"+name)
  }
}
