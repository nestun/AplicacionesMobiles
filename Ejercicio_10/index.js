var numbers = [7,8,9];

function contiene(a,n){
    return a.some(numero => numero === n);
    
}
console.log(contiene(numbers,8));