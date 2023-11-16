function calcular(){
    
    let n = parseInt(soma1.value);
    let soma = 0;
    let pote = 1;
    let fat = n;
    let i = n;

    while(n>1){
        pote = Math.pow (2,n);
         while(i>1){
            fat= fat * (i-1);
            i=i-1;
         }
         soma = soma + (pote * fat);
         n=n-1;
        }
    alert(soma);
    
}