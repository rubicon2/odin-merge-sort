function mergeSort(arr) {
    // If array is length 1, return it
    if (arr.length <= 1)
        return arr;

    // Otherwise split in half until single elements and sort the halves
    let halfway = Math.floor(arr.length / 2);
    let sideA = mergeSort(arr.slice(0, halfway));
    let sideB = mergeSort(arr.slice(halfway));
    
    let sorted = [];
    for(let a = 0, b = 0; a < sideA.length || b < sideB.length;) {
        if (sideA[a] < sideB[b] || sideB[b] == null) {
            sorted.push(sideA[a]);
            a++;
        } else {
            sorted.push(sideB[b]);
            b++;
        }
    }
    return sorted;
}

function mergeSortBetter(arr) {
    // If array is length 1, return it
    if (arr.length <= 1)
    return arr;

    // Otherwise split in half until single elements and sort the halves
    let halfway = Math.floor(arr.length / 2);
    let sideA = mergeSort(arr.slice(0, halfway));
    let sideB = mergeSort(arr.slice(halfway));
    
    let sorted = [];
    // Shift the smaller array elements off into the sorted array until sideA or sideB is empty
    while (sideA.length > 0 && sideB.length > 0)
        sorted.push(sideA[0] < sideB[0] ? sideA.shift() : sideB.shift());
    // Append any remaining elements (which should already be sorted!) on the end
    return sorted.concat(sideA, sideB);
}

console.time('original');
let a = mergeSort([-20009, 20009, 23989, 12, 12, 3, 2, 5, 6, 4, -12, -27, 18, 29]);
console.timeEnd('original')
console.log(a);

console.time('better?');
let b = mergeSortBetter([-20009, 20009, 23989, 12, 12, 3, 2, 5, 6, 4, -12, -27, 18, 29]);
console.timeEnd('better?');
console.log(b);
