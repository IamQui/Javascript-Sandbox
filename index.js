/*
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
*/
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

//console.log(isAllX("XxxXxXXxX"));
//console.log(isAllX("XxxX0XXxX"));
//console.log(isAllX("XpooX"));
/*
function hasOne(array) {
    for(let i = 0; i < array.length; i++){
        if(array[i] === 1){
            return true;
        }
         
    }
    return false;
}

console.log(hasOne([1,2,3]));
console.log(hasOne([1,1,1]));
console.log(hasOne([4,5,6]));
*/

function unique(array) {
    let uniqueArray = [];
    for(let i = 0; i < array.length; i++){
        const element = array[i];
        if(uniqueArray.indexOf(element) === -1) {
            uniqueArray.push(element);
        }
    }
    return uniqueArray;
}

//console.log(unique([1,2,3,4]));
//console.log(unique([1,2,2,3,4,3]));
//console.log(unique([1,1,1,1,1,1]));


function addOne(array) {
    for(let i = 0; i < array.length; i++){
        array[i]++;
    }
}

//console.log(addOne([1,2,4]));

function removeOccurrences(array, num) {
    for(let i = array.length - 1; i >= 0; i--) {
        if (array[i] === num) {
            array.splice(i, 1);
        }
    }
}

console.log(removeOccurrences([1,2,3,1], 1));