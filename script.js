console.log("connected")

function add7(num) {
    return num + 7
}

console.log(add7(3));


function multiply(num, num2) {
    return num * num2;
}

console.log(multiply(3, 2));

function capitalize(str) {
    first = str.charAt(0)
    temp = str.slice(1)
    first = first.toUpperCase()
    return first + temp;
}

console.log(capitalize('this is dumb'));

function lastLetter(str) {
    last = str.at(-1)
    temp = str.slice(0, str.length-1)
    last = last.toUpperCase()
    return temp + last;
}

console.log(lastLetter("hello there"))