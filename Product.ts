export class Product{
    constructor(private id:number,private name:string,private price:number,private stock:number ){}
    public get ID(): number{return this.id;}
    public get Name(): string{return this.name;}
    public get Price(): number{return this.price;}
    public get Stock(): number{return this.stock;}
    public setStock(stock:number): void{
        this.stock=stock;
    }
}