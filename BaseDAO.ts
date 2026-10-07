import  Product from "better-sqlite3"

export abstract class BaseDAO{
    protected db : Product.Database;

    constructor(pdpath:string = `Inventory 
        this.db = new Product(pdPath);
        this.iniTable;
        
}