(() => {
    // ex 1.0
    console.log(10 + 2)
    console.log(10 - 2)
    console.log(10 * 2)
    console.log(10 / 2)
    console.log(10 % 2)

    // ex 1.1
    let number = 60
    console.log(number)

    // ex 1.2
    let name = Gerard
    let firstName = Lambert
    let city = Paris 
    console.log(`Your name is ${name} ${firstName} and you live in ${city}`)

    // ex 2.1
    let age = prompt("Enter your age: ")
    if (age >= 18) {
        console.log("You are an adult")
    } else {
        console.log("You are not yet an adult")
    }

    // ex 2.2
    let min = prompt("Enter a value: ")
    let max = prompt("Enter a greater value: ")
    let current = prompt ("Enter a value of your choice: ")

    if ((current > min) && (current < max)) {
        console.log(current)
    } else if (min > man) {
        console.log("Are you dumb?!")
    }

    // ex 2.3
    let seekEvenNumber = 1

    while (seekEvenNumber <= 100) {
        if (seekEvenNumber % 2 === 0) {
            console.log(seekEvenNumber)
        }

        seekEvenNumber++
    }

    for (let index = 1; index <= 100; ) {
        if (index % 2 === 0) {
            console.log(index)
        }
        index++

        if (index % 2 === 0) {
            console.log(index)
        }
        index++
    }

    // ex 2.4
    let calculus = 1

    while (calculus <= 100) {
        if (calculus % 2 === 0) {
            let divisionCalculus = calculus / 2
            console.log(divisionCalculus)
        }

        if (calculus % 2 !== 0) {
            let multiplicationCalculus = calculus * 3
            console.log(multiplicationCalculus)
        }
        calculus++
    }

    // ex 2.5
    let chooseNumber
    while (chooseNumber !== 42) {
        chooseNumber= prompt("Enter your favorite number: ")
    }

    // ex 2.6
    let userNumberDay = prompt("Please enter a hole number between 1 and 7 (1 and 7 can be used):");

    switch (userNumberDay) {
        case 1:
            userNumberDay = "Monday";
            break;
        case 2:
            userNumberDay = "Tuesday";
            break;
        case 3:
            userNumberDay = "Wednesday";
            break;
        case 4:
            userNumberDay = "Thursday";
            break;
        case 5:
            userNumberDay = "Friday";
            break;
        case 6:
            userNumberDay = "Saturday";
            break;
        case 7:
            userNumberDay = "Sunday";
            break;
        default:
            console.log("Invalid input. Please enter a number between 1 and 7.");
    }

    // ex 2.7
    let n = prompt("Enter a number")
    let totalAddition = 0
    for (let index = 1; index <= n; index++) {
        let chosenNumber = prompt("Enter another one: ")
        totalAddition += chooseNumber
    }
    console.log(totalAddition)

    // ex 3.0
    const arrayNames = ["thibaut", "biloute", "hagrid"]

    for (let iterator of arrayNames) {
        console.log(iterator)
    }

    // ex 3.1
    const arrayValues = [3, 4, 10]
    let totalArrayValues = 0
    for (let position of arrayValues) {
        totalArrayValues += position
    }
    console.log(totalArrayValues)

    // ex 3.2
    const arrayToAdd = [1, 2, 3, 4, 5]
    let totalArrayToAdd = 0
    for (let counter of arrayToAdd) {
        totalArrayToAdd += counter
    }

    let getTheAverage = totalArrayToAdd / arrayToAdd.length()
    console.log(getTheAverage)

    // ex 3.3
    const givenArray = [1, 2, 3, 4, 5]
    let duplicateArray = []
    for (let pushThis of givenArray) {
        duplicateArray.push(pushThis)
    }
    console.log(duplicateArray)

    let duplicateArray2 = givenArray.slice()
    console.log(duplicateArray2)
    
    // ex 3.4
    const givenArray2 = [1, 2, 3, 4, 5]
    const minArrayIs = Math.min(givenArray2)
    const maxArrayIs = Math.max(givenArray2)
    console.log(minArrayIs)
    console.log(maxArrayIs)
})();