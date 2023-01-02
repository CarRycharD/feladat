 
export function feladat01(szinek) {
  
    let possible_combinations = 0;
    let n = szinek.length
  
    for (let k = szinek.length; j > 1 ; j--) {

        possible_combinations += combination_without_repition(n, k)
        
    }

    return possible_combinations

}
  
export function factorialize(num) {

    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;

  }
  
  
export function combination_without_repition(n, k) {

    return factorialize(n) / (factorialize(k) * factorialize((n-k)))

}