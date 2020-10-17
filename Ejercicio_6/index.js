var numbers = [[8,6,2,4],[7,9,4,5],[6,2,4,2],[9,6,7,10]];

function quienesAprobaron(num){
        return num >= 4;
}  

var numbersFilter = numbers.filter(a=>a.every(quienesAprobaron));
    
console.log(numbersFilter);