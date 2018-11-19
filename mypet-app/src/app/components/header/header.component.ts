import { Component } from '@angular/core';

@Component({
    //selector é o nome que eu quero para meu component
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'header'
}
