function main(intArray) {



    // let sortedArray = intArray.sort((a, b) => a - b) //[ 1, 2, 3, 4 ]////[1, 2, 2, 3, 4,7, 7, 8, 9]
    let filteredArray = intArray.filter((a, index) => {
        return intArray.indexOf(a) === index
    })
    console.log(filteredArray.join(' '))
}
main([1, 2, 3, 4])
main([7, 8, 9, 7, 2, 3, 4, 1, 2])