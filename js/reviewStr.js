var str = ' Hello World ';
var arr = str.split(" ");

console.log(str.length);
console.log(typeof(str));
console.log(str.trim().length);
str = str.trim();
console.log(str.indexOf('o', 5));
console.log(str.search('Wo'));
console.log(str.replace('World', 'MrJ'), str);
console.log(str.slice(0, 3));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.concat(str), str);
console.log(arr);
