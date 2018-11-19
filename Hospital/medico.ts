export default class medico{

protected indicaremedio:string
constructor(indicaremedio:string){
this.indicaremedio = indicaremedio

}
public medicar(N:string){ 
if (this.indicaremedio == 0)
console.log("Não precisa de remedio")
else {
this.indicaremedio -= N
console.log("TOMA")
console.log("Você pode indicar " + this.indicaremedio + " medicamentos")
}
}

}