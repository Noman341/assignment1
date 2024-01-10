let credit_fee=" % 2 ";
let debit_fee= " % 5";
let paypal= " % 3";
let payment_method="paypal"
switch(payment_method){
case "credit":
    console.log(`you have processing fee of ${credit_fee}`)
break;
case "debit": console.log(`You have processing fee of ${debit_fee}`)
    break;
case "paypal": console.log(`You have processing fee of ${paypal}`)
break;
}