function topDouble(value, top) {
    while(value < top) {
        value *= 2;
    }
    return value / 2;
}

console.log(topDouble(1, 10));

function maxSum(num) {
    let total = 0;
    for(i = 1; i <= num; i++){
        total += i;
    }
    return total;   
}

console.log(maxSum(5));

function endsWithX(string) {
    if (string[string.length -1].toLowerCase() === 'x'){
        return true;
    } else {
        return false;
    }
}

//console.log(endsWithX("americanhistoryx"));
//console.log(endsWithX("poo"));
//console.log(endsWithX("sdlkneijvX"));

function isAllX(string) {
    for(let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() !== "x") {
            return false;
        }
    }
    return true;
}

console.log(isAllX("XxxXxXXxX"));
console.log(isAllX("XxxX0XXxX"));
console.log(isAllX("XpooX"));