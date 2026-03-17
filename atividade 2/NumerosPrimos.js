function verificarNumeroPrimo(n){
    let eh_primo = true ;

      if ((n != 2) && (n % 2 == 0)){
        eh_primo = false;
      }

    for(let i = 3; i<n ;i += 2){
        if (n % i == 0){
            eh_primo = false
        }
    }
      return eh_primo;
}

console.log(`primo(2)=${verificarNumeroPrimo(2)}`)
console.log(`primo(4)=${verificarNumeroPrimo(4)}`)
console.log(`primo(5)=${verificarNumeroPrimo(5)}`)
console.log(`primo(7)=${verificarNumeroPrimo(7)}`)
console.log(`primo(9)=${verificarNumeroPrimo(9)}`)
console.log(`primo(11)=${verificarNumeroPrimo(11)}`)
console.log(`primo(83)=${verificarNumeroPrimo(83)}`)
console.log(`primo(100)=${verificarNumeroPrimo(100)}`)
console.log(`primo(991)=${verificarNumeroPrimo(991)}`)
console.log(`primo(104729)=${verificarNumeroPrimo(104729)}`)
console.log(`primo(14348907)=${verificarNumeroPrimo(14348907)}`)
console.log(`primo(999967)=${verificarNumeroPrimo(9999967)}`)


