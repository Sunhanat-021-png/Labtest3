abstract class ShippingCalculator{
    abstract price(): void;
    constructor(public inprice:number){}
    abstract calculatorwight(): void;
}
class StandardShipping extends ShippingCalculator{

    override price(): void {
        console.log
    }
}