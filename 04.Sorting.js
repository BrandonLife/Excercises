function main(arr) {
    //Sort a copy of the passed in array from least to most.
    let sortedArr = arr.sort((a, b) => b - a); //sort in descending order
    let newArr = [];
    let length = arr.length;

    for (let i = 0; i < length; i++) {
        let temp = sortedArr.shift(); // shift -> Take first element of the sorted array
        newArr.push(temp); // Add the newest value to the value that is ultimately returned
        sortedArr.reverse(); // reverse this so the next iteration takes from the other
        // end of the array
    }
    // print newArr
    console.log(newArr.join(" "));

}
main([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])