export class arma {
    // private calibre:string
    // private marca:string
    // private tipo:string
    protected capacidade:number
    protected projeteisNoPente:number

    constructor(projeteis:number, capacidade:number){
        this.capacidade = capacidade
        this.projeteisNoPente = projeteis
    }

    public atirar(N:number): void { 
        if (this.projeteisNoPente == 0)
            console.log("Não ha balas, por favor recarregue sua Arma")
        else {
            this.projeteisNoPente -= N
            console.log("BANG")
            console.log("Você ainda tem " + this.projeteisNoPente + " balas em sua arma")
        }
    }

    public recarregar(): void {
        this.projeteisNoPente = this.capacidade
    }

    public informarBalas(): number {
        return this.projeteisNoPente
    }
}

// let pistola = new arma(10, 10)
// pistola.atirar()