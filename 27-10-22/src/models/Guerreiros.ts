import { Defensivel } from "../interface/defense"
import { AtaqueInvalido, JaEliminadoException } from "./Error"

export default class Guerreiros implements Defensivel {
    id: string
    force: number
    life: number


    // 0 - Morto e 10 - Super Vivo

    constructor(id: string, force: number) {
        this.id = id
        this.force = force
        this.life = 10
    }
    estaEliminado(): boolean {
        if (this.life <= 0) {
            return true;
        } else {
            return false;
        }
    }
    defenderAtaque(valorAtaque: number): any {
        // Condicional para Sofrer Ataques
        if (valorAtaque >= 0 && this.life >= 0 && this.life <= 10) {
            if (valorAtaque >= this.life) {
                this.life = 0
                console.log('Guerreiro Eliminado')
                return 1
            }
            else {
                return this.life = this.life - valorAtaque
            }
        } else if(this.life <= 0){
            throw new JaEliminadoException('Guerreiro Já Foi Elimanado')
        }
        else {
            throw new AtaqueInvalido('Ataque Inválido')
        }
    }


    Ataque(defensivel: Defensivel) {
        return defensivel.defenderAtaque(this.force)

    }



}