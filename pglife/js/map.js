let numbers = [1, 2, 3, 4, 5, 6];
let squares = numbers.map(x => x * x);
squares.forEach(function(element){
    document.write(element + " ");

});
let a = [ 2, 4,5,6,8, 9,1,7,10,10];
let b = a.filter( x => x * x%2 == 0);
b.forEach(function(array){
    document.write(array + " ");

});