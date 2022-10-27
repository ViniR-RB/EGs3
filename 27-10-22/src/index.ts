import Base from "./models/Base";
import Battle from "./models/Battle";
import { AtaqueInvalido, JaEliminadoException, Morreu } from "./models/Error";
import Guerreiros from "./models/Guerreiros";

try {

    let ga: Guerreiros = new Guerreiros('1', 10)
    let ba: Base = new Base('1', 10, 20)
    let gb: Guerreiros = new Guerreiros('2', 2)
    let bb: Base = new Base('2', 20, 20)
    let battle: Battle = new Battle([ga, ba], [gb, bb])
    console.log(battle.AvaliarBattle());
    console.log(battle.Atacar(ga, bb))
    console.log(bb);
    console.log(battle.Atacar(ga, gb))
    console.log(gb);
    console.log(battle.AvaliarBattle());






} catch (e) {
    if (e instanceof JaEliminadoException)
        throw new JaEliminadoException(`${e.message}`)
    if (e instanceof Morreu)
        throw new Morreu(`${e.message}`)
    if (e instanceof AtaqueInvalido)
        throw new AtaqueInvalido(`${e.message}`)
    else {
        throw new Error(`Algo Inesperado Aconteceu com A Guerra Fale com Ely - 4002-8922`)
    }


}





