import { Defensivel } from "../interface/defense"
import { AtaqueInvalido, JaEliminadoException } from "./Error"

export default class Base implements Defensivel {
    id: string
    locX: number
    locY: number
    dano: number = 0
    // 0 - 0% e 10 - 100%

    constructor(id: string, locX: number, locY: number) {
        this.id = id
        this.locX = locX
        this.locY = locY
    }
    estaEliminado(): boolean {
        if (this.dano >= 9) {
            return true
        } else {
            return false
        }
    }
    defenderAtaque(valorAtaque: number): any {
        // Condicional para Sofrer Ataques
        if (valorAtaque >= 0 && this.dano >= 0 && this.dano <= 10) {
            if (valorAtaque >= this.dano) {
                this.dano = 10
                console.log('Base Eliminada')

            }
            else {
                return this.dano = this.dano + valorAtaque
            }
        }
        else if (this.dano >= 10) {
            throw new JaEliminadoException('Base Já Foi Eliminada')
        } else {
            throw new AtaqueInvalido('Ataque Inválido');
        }
    }

}