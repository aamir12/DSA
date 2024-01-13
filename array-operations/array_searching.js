function search(array,value) {
    let position = -1;
    for(let i = 0; i< array.length ; i++) {
        if(array[i] === value) {
            position = i;
            break;
        }
    }
    return position;
}

const array = [1,2,3];
const result = search(array,4);
console.log(result);

const result1 = search(array,2);
console.log(result1);
