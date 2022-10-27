class AplicacaoError extends Error {
	constructor(massage: string) {
		super(massage);
	}
}
class JaEliminadoException extends AplicacaoError{
    constructor(massage: string){
        super(massage)
    }
}


class Morreu extends AplicacaoError {
    constructor(massage: string){
        super(massage);
    }
}

class AtaqueInvalido extends AplicacaoError{
    constructor(massage: string){
        super(massage)
    }
}




export  {JaEliminadoException, Morreu, AtaqueInvalido}