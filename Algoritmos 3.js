function a(x,y){
    return 5;
}
console.log(a(5,5))

// output = 5


function a(x,y){
    z = []
    z.push(x);
    z.push(y);
    z.push(5);
    console.log(z);
    return z;
}
b = a(2,2)
console.log(b);
console.log(a(6,8));

// output = [2,2,5],[2,2,5],[6,8,5],[6,8,5]


function a(x){
    z = [];
    z.push(x);
    z.pop();
    z.push(x);
    z.push(x);
    return z;
}
y = a(2);
y.push(5);
console.log(y);

// output = [2,2,5]


function a(x){
    if(x[0] < x[1]) {
    return true;
    }
    else {
    return false;
    }
}
b = a([2,3,4,5])
console.log(b);

// output = true


function a(x){
    for(var i=0; i<x.length; i++){ // 4 = x.length
    if(x[i] > 0){
        x[i] = "Coding";
    }
}
return x;
}
console.log(a([1,2,3,4]))

// output = ["Coding","Coding","Coding","Coding"]


function a(x){
    for(var i=0; i<x.length; i++){ // x.length = 4
    if(x[i] > 5){
        x[i] = "Coding";
    }
    else if(x[i] < 0){
        x[i] = "Dojo";
    }
}
return x;
}
console.log(a([5,7,-1,4]))

// output = [5,"Coding","Dojo",4]


function a(x){
    if(x[0] > x[1]) {
    return x[1];
    }
    return 10;
}
b = a([5,10])
console.log(b);

// output = 10


function sum(x){
    sum = 0;
    for(var i=0; i<x.length; i++){
    sum = sum + x[i];
    console.log(sum);
    }
    return sum;
}

// PARTE 2
// PARTE 2
// PARTE 2

function printAverage(x){
    sum = 0;
    for (var i = 0 ; i <x.length ; i++){
        sum = sum + x[i]
    }
    return sum / x.length
}
y = printAverage([1,2,3]);
 console.log(y); // should log 2

y = printAverage([2,5,8]);
 console.log(y); // should log 5


function returnOddArray(){
    var oddarray = [];
    for (i = 1 ; i < 256 ; i+= 2){
    oddarray.push(i)
    }
    return oddarray
}
y = returnOddArray();
 console.log(y); // should log [1,3,5,...,253,255]


function squareValue(x){
    var valor = [];
    for(var i = 0; i<x.length; i++){
        valor.push(x[i] * x[i])
    }
    return valor;
}
y = squareValue([1,2,3]);
 console.log(y); // should log [1,4,9]

y = squareValue([2,5,8]);
 console.log(y); // should log [4,25,64]
