import Base from "./Base"
import Guerreiros from "./Guerreiros"

export default class Battle {
    TeamA: Array<Guerreiros | Base>
    TeamB: Array<Guerreiros | Base>
    eliminados: number = 0

    constructor(TeamA: Array<Guerreiros | Base>, TeamB: Array<Guerreiros | Base>) {
        this.TeamA = TeamA
        this.TeamB = TeamB
    }


    AvaliarBattle() {

        // if (this.TeamA.length > this.TeamB.length)
        //     console.log('Team A Ganhou')

        // if (this.TeamA.length < this.TeamB.length) {
        //     console.log('TeamB Perdeu')
        // }
        // else {
        //     console.log('Nada Aconteceu')
        // }
    }

    Atacar(quemAtaca: Guerreiros, para: Guerreiros | Base): any {
         return para.defenderAtaque(quemAtaca.force)
        
    }
}