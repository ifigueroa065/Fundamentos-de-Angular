import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  name='isai';
  age= 21;
  img='https://source.unsplash.com/random';
  btnDisabled=true;
  person={
    name: "isai figueroa",
    age: 21,
    avatar:'https://source.unsplash.com/random'
  }
}
