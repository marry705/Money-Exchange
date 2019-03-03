// PLEASE DON'T change function name
module.exports = function makeExchange(currency = 0) {
let rez = {};

  if (currency>10000) rez={error: "You are rich, my friend! We don't have so much coins for exchange"};
  else {
    
    if (Math.floor(currency/50)>0)  rez.H = Math.floor(currency/50);
    currency=currency-Math.floor(currency/50)*50;  
        
    if (Math.floor(currency/25)>0) rez.Q = Math.floor(currency/25);
    currency=currency-Math.floor(currency/25)*25;

    if (Math.floor(currency/10)>0) rez.D = Math.floor(currency/10);
    currency=currency-Math.floor(currency/10)*10;

    if (Math.floor(currency/5)>0) rez.N = Math.floor(currency/5);
    currency=currency-Math.floor(currency/5)*5;

    if (Math.floor(currency/1)>0) rez.P = Math.floor(currency/1);
  }

return rez;
}
