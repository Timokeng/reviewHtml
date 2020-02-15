var a = document.getElementsByClassName("demo1")[0]
a.innerHTML = "通过JS修改内容";
a.style.color = "red";


var b = Math.round(Math.random() * 10);
console.log(b);

var pow = Math.pow(2, 2);
console.log(pow);

function getMax (x, y) {
    var max = Math.max(x, y);
    console.log(max);
    return;
}

getMax(b, pow);
