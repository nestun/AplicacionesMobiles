var numbers = [8,6,4,2];

var res = numbers.every(aprobo);

function aprobo(num){
    return num >= 4;
}

console.log(res);
