//Insert element to specific position in array


function insertAt(array,position,value) {
    const endPosition = array.length -1;
    //validation
    if(typeof(position) !== "number" || position < 0 || position > endPosition) {
        return "Invalid Position";
    }

    if(position === endPosition) {
        array[endPosition+1] = value;
        return array;
    }

    for(let i = endPosition; i>=0 ; i--) {
        if(i >= position) {
            array[i+1] = array[i];
            if(i === position) {
                array[i] = value;
            }
        }
    }

    return array;
}

let array = [40,50,30,20,45]; 
const position = 2;
const value = 1000;

console.log(array);
const result = insertAt(array,position,value);
console.log(result);
//we can do the same thing with splice;
//array.splice(0,0,2000);
//console.log(array);