// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b.
// If a value is present in b, all of its occurrences must be removed from the other:

function array_diff(a, b) {
    let newArray = [];
    for (let i of a) {
        for (let j of b) {
            if (a[i] !== b[j]) {
                newArray.push(a[i]);
            } else {
                newArray = a;

            }

        }
        
    }
    return newArray;
}

console.log(array_diff([1,2,2],[]))