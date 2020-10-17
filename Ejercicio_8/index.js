var numbers = [7,9,25,42];

function even (n){
    if (n % 2 == 0){
        return true;
    }
}

function cuantosCumplen (n,a){
var p=0;
  for(var i of a){
    if(n(i)=== true){
      p++;
    }
  }
  console.log(p);
}

console.log(cuantosCumplen(even,numbers));