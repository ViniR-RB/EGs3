export interface IComparavel {
    comparar(figuraGeometrica: FiguraGeometrica, area: number): number
}
export abstract class FiguraGeometrica {

    abstract area(): number
    abstract perimetro(): number
  
}




export class Triangulo extends FiguraGeometrica implements IComparavel {
    base: number;
    altura: number;
    l3: number
    constructor(base: number, altura: number, l3: number) {
        super()
        this.base = base;
        this.altura = altura
        this.l3 = l3
    }
    comparar(figuraGeometrica: FiguraGeometrica, area: number): any {
        let a = this.area()
        if (area > a) {
            return -1
        } else if (area == a) {
            return 0
        } else if (area < a) {
            return 1
        }
    }
    public area() {
        let a = this.base * this.altura

        return a
    }
    public perimetro(): number {

        let p = this.base + this.altura + this.l3
        console.log(p)
        return p
    }

}
export class Quadrado extends FiguraGeometrica implements IComparavel {
    l1: number
    constructor(l1: number) {
        super()
        this.l1 = l1
    }
    comparar(figuraGeometrica: FiguraGeometrica, area: number): any {
        let a = this.area()
        if (area > a) {
            return -1
        } else if (area == a) {
            return 0
        } else if (area < a) {
            return 1
        }
    }
    public area(): number {
        let a = this.l1 * this.l1
        console.log(a)
        return a
    }
    public perimetro(): number {

        let p = this.l1 * 4
        console.log(p)
        return p
    }
}