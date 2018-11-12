import { arma } from './arma';

export class metralhadora extends arma{ 
    
    private tirosgd:number;

    constructor(projeteis:number, capacidade:number,tirosgd:number){
        super(projeteis,capacidade)
        this.capacidade = capacidade
        this.projeteisNoPente = projeteis
        this.tirosgd =  tirosgd
    }
    public atirar(): void { 
        if (this.projeteisNoPente == 0)
            console.log("Não ha balas, por favor recarregue sua metralhadora")
        else {
            for(let t= 0; t < this.tirosgd; t++) {
            this.projeteisNoPente -= 1
            //this.projeteisNoPente -= 3
            console.log("BANG BANG BANG")
            console.log("Você ainda tem " + this.projeteisNoPente + " balas em sua metalhadora")
        }
    }
}
    public recarregar(): void {
        this.projeteisNoPente = this.capacidade
    }
}
