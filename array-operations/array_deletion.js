//delete element of specific location

function deleteAt(array,position) {
    const endPosition = array.length -1;
    //validation
    if(typeof(position) !== "number" || position < 0 || position > endPosition) {
        return "Invalid Position";
    }

    for(let i = position; i < endPosition; i++) {
        array[i] = array[i+1];
    }

    array.length = array.length - 1;
    return array;
}

let array = [40,50,30,20,45]; 
const position = 3;

console.log(array);
const result = deleteAt(array,position);
console.log(result);