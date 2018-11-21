import { Component } from '@angular/core';

@Component({
    //selector é o nome que eu quero para meu component
  selector: 'homer',
  templateUrl: './homer.component.html',
  styleUrls: ['./homer.component.css']
})
export class HomerComponent {
  title = 'homer'
  download:string = '/assets/img/tigre.jpg'
  tigre:string = '/assets/img/download.jpg'

  //  event binding
exibirImagem(): void{

  if(this.tigre =='')
  this.tigre = '/assets/img/tigre.jpg'
  else
  this.tigre =''
}
// ocultarImagem(): void{
//   this.tigre = ''
// }
texto1: string = 'olá mundo'
texto2: string = ''

dispararNoConsole(valor: Event): void{
console.log((<HTMLInputElement>valor.target).value)
}
mostrarNoConsole():void{
console.log(())
}
}


