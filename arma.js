"use strict";
exports.__esModule = true;
var arma = /** @class */ (function () {
    function arma(projeteis, capacidade) {
        this.capacidade = capacidade;
        this.projeteisNoPente = projeteis;
    }
    arma.prototype.atirar = function (N) {
        if (this.projeteisNoPente == 0)
            console.log("Não ha balas, por favor recarregue sua Arma");
        else {
            this.projeteisNoPente -= N;
            console.log("BANG");
            console.log("Você ainda tem " + this.projeteisNoPente + " balas em sua arma");
        }
    };
    arma.prototype.recarregar = function () {
        this.projeteisNoPente = this.capacidade;
    };
    arma.prototype.informarBalas = function () {
        return this.projeteisNoPente;
    };
    return arma;
}());
exports.arma = arma;
// let pistola = new arma(10, 10)
// pistola.atirar()
