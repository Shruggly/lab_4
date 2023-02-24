import { Component } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent {
  title:string = 'my-first-ap';
  name:string = 'Tommy';
  age:number = 20;
}
