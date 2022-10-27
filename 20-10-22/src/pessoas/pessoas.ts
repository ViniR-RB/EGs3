export default class Pessoa {
    private _nome: string;
    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }
    private _sobrenome: string;
    public get sobrenome(): string {
        return this._sobrenome;
    }
    public set sobrenome(value: string) {
        this._sobrenome = value;
    }
    public nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    }
    constructor(nome: string,sobrenome: string){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }
}