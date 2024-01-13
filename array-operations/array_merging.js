function mergeArray(array1, array2) {
    const firstArrayLength = array1.length;
    const firstArray = [...array1];
    for(let i = 0; i< array2.length ; i++) {
        firstArray[firstArrayLength + i] = array2[i];
    }
    return firstArray;
}

const array1 = [1,2,3];
const array2 = [4,5,6];
const result = mergeArray(array1,array2);
console.log(result);
///////////////////////////////////////////


// Merge sorted array
const array3 = [4,5,19,35,54];
const array4 = [3,18,47,54,78,90,120];

function mergeWithSorting(array1,array2) {
    let firstIndex = 0;
    let secondIndex = 0;
    let resultIndex = 0;
    let resultArray = [];
    while(firstIndex< array1.length && secondIndex <  array2.length) {
        if(array1[firstIndex]< array2[secondIndex]) {
            resultArray[resultIndex] = array1[firstIndex];
            firstIndex++;
        }else {
            resultArray[resultIndex] = array2[secondIndex];
            secondIndex++;
        }
        resultIndex++;
    }

    while(firstIndex< array1.length) {
        resultArray[resultIndex] = array1[firstIndex];
        resultIndex++;
        firstIndex++;
    }

    while(secondIndex< array2.length) {
        resultArray[resultIndex] = array2[secondIndex];
        resultIndex++;
        secondIndex++;
    }

    return resultArray;
}

const result2 = mergeWithSorting(array3,array4);
console.log(result2);
