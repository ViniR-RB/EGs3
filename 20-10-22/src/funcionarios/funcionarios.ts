interface CalcularSalario {
    calcularSalario(): number
}

export class Empregado implements CalcularSalario {
    _salario: number
    constructor() {

        this._salario = 500
    }
    calcularSalario(): number {
        return this._salario;
    }
}
export class Diarista extends Empregado implements CalcularSalario {
    calcularSalario(): number {
        return super.calcularSalario() / 30
    }
}
export class Horista extends Empregado {
    calcularSalario(): number {
        return super.calcularSalario() / 24
    }
}

