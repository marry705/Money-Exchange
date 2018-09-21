// PLEASE DON'T change function name
module.exports = function makeExchange(currency = 0) {
let rez = {};

if (currency<=0){return rez;}
else {if (currency>10000) {rez={error: "You are rich, my friend! We don't have so much coins for exchange"};
        }
      else {

        let H=Math.floor(currency/50);
        currency=currency-H*50;   
        if (H!==0) { rez.H = H;}
        
        let Q=Math.floor(currency/25);
        currency=currency-Q*25;
        if (Q!==0) { rez.Q = Q;}
        
        let D=Math.floor(currency/10);
        currency=currency-D*10;
        if (D!==0) {rez.D = D;}
        
        let N=Math.floor(currency/5);
        currency=currency-N*5;
        if (N!==0) {rez.N = N;}
        
        let P=Math.floor(currency/1);
        if (P!==0) {rez.P = P;}
      }
}
return rez;
}
