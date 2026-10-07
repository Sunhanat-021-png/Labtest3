interface PaymentMethod{
    pay(amount:number):void;
}
class Cash implements PaymentMethod{
    pay(amount:number):void{
        console.log('Cash ชำระเงิน 35 บาท');
    }
}

class CreditCard implements PaymentMethod{
    pay(amount:number):void{
        console.log('Credit Card ชำระเงิน 350 บาท หมายเลขบัตรเครดิต 98758921');
    }
}
const cash = new Cash();
const card = new CreditCard();

cash.pay(35);
card.pay(350);