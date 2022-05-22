function sumOfMultiples(number) {
    let multipleList = 0

    for(let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0 ) {
            multipleList += i // Note to Self: This operator adds the value of the right side to the left and returns the sum. Same as writing multipleList + i = answer
        }
    }

    return multipleList
}

console.log(sumOfMultiples(1000))