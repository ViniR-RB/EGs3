interface ICalcularTributos {
    calcularTributos(porcetagemTributo: number): number
}
class Conta {
    private nome: string
    private saldo: number
    constructor(nome: string, saldo: number) {
        this.nome = nome
        this.saldo = saldo
    }
    getNome(): string {
        return this.nome
    }
    setNome(name: string): string {
        return this.nome = name
    }
    getSaldo(): number {
        return this.saldo
    }
    setSaldo(saldo: number): number {
        return this.saldo = saldo
    }



}


class ContaCorrente extends Conta implements ICalcularTributos {
    calcularTributos(porcetagemTributo: number): number {
        return this.getSaldo() - (this.getSaldo() * porcetagemTributo)
    }


}



class SeguroDeVida implements ICalcularTributos {

    calcularTributos(porcetagemTributo: number): number {
        return porcetagemTributo;
    }

}