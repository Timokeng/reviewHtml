var arr1 = [2, 40, 70, 15, 55, 66];
arr1.sort();
console.log(arr1);

arr1.sort(function(a, b){
    return a - b;
});
console.log(arr1);

arr1.reverse();
console.log(arr1);

arr1.forEach(function(value, index, arr){
    arr[index] = value + 1;
});
console.log(arr1);

var arr2 = arr1.map(function(value){
    return value * 2;
});
console.log(arr1, arr2);

var arr3 = arr1.filter(function(value){
    return value > 30;
});
console.log(arr3);

var sum = arr1.reduce(function(total, value){
    return total = total + value;
});
console.log(sum);

var every = arr1.every(function(value){
    return value > 10;
});
var some = arr1.some(function(value){
    return value > 10;
});
console.log(every, some);

