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

let a = mergeSort([-20009, 20009, 23989, 12, 12, 3, 2, 5, 6, 4, -12, -27, 18, 29])
console.log(a)
