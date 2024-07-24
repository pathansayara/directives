import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'saara';
  name='pathan';
  isLoading=true;

  hello()
  {
    return 'I am sayara pathan'
  }
}
