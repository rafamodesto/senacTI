import { Component } from '@angular/core';

@Component({
    //selector é o nome que eu quero para meu component
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'home'
}
