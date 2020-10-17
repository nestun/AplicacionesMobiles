var numbers = [2,-3,9];

var res = numbers.some(hayAlgunoNegativo);

function hayAlgunoNegativo(num){
    return num < 0;
}

console.log(res);