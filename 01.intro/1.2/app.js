(() => {
    // ex 4.1
    /**
     * Calculates the surface area of a rectangle.
     * 
     * @param {number} length - The length of the rectangle.
     * @param {number} width - The width of the rectangle.
     * @returns {number} The calculated surface area of the rectangle.
     */
    function calcSurface (length, width) {
        return length * width
    }

    const length = window.prompt("What's the length of the rectangle?: ")
    const width = window.prompt("What's the width of the rectangle?: ")
    console.log("Here is the surface: ")
    console.log(calcSurface(length, width))

    // ex 4.2
    /**
     * Generates a random integer between 1 and 10 (inclusive).
     * 
     * @returns {number} A random integer between 1 and 10.
     */
    function rand10 () {
        return Math.floor(Math.random() * 10) + 1
    }

    console.log(rand10())

    // ex 4.3
    /**
     * Generates an array of n random integers between 1 and 10 (inclusive).
     * 
     * @param {number} n - The number of random integers to generate.
     * @returns {number[]} An array containing n random integers between 1 and 10.
     */
    function multiRand(n) {
        const arrayRandomNumbers = [];
        for (let i = 0; i < n; i++) {
            arrayRandomNumbers.push(rand10());
        }
        return arrayRandomNumbers;
    }

    const n = window.prompt("How many random numbers do you want?: ")
    console.log("Here are the numbers: ", multiRand(n))

    // ex 4.4
    const inputAr = ["Thibaut", "Biloutte", "Denis"]
    const nn = window.prompt("Give a random number greater than 0 and smaller than 3: ")
    /**
     * Randomly selects nn learners from the input array.
     * 
     * @param {any[]} inputAr - The array of learners to choose from.
     * @param {number} nn - The number of learners to select.
     * @returns {any[]} An array containing nn randomly selected learners from the input array.
     */
    const pickLearner = (inputAr, nn) => {
        const randomLearners = []
        for (let i = 0; i < nn; i++) {
            randomLearners.push(inputAr[Math.floor(Math.random() * nn) + 1])
        }
        return randomLearners
    }
    console.log(pickLearner(inputAr, nn))

    // ex 4.5
    const xA = window.prompt("Give the coordinate of A at the position x: ")
    const yA = window.prompt("Give the coordinate of A at the position y: ")
    const xB = window.prompt("Give the coordinate of B at the position x: ")
    const yB = window.prompt("Give the coordinate of B at the position y: ")
    const a = [xA, yA]
    const b = [xB, yB]
    /**
     * Calculates the Euclidean distance between two points in a 2D plane.
     * 
     * @param {number[]} a - The coordinates of the first point [x1, y1].
     * @param {number[]} b - The coordinates of the second point [x2, y2].
     * @returns {string} The Euclidean distance between the two points, rounded to 2 decimal places.
     */
    function calcDistance (a, b) {
        const deltaX = b[0] - a[0]
        const deltaY = b[1] - a[1]

        return Math.sqrt(deltaX ** 2 + deltaY ** 2).toFixed(2)
    }
    console.log(calcDistance(a, b))

    // ex 4.6
    const aa = window.prompt("Give me a number and I'll give you his factorial: ")
    function factorial(aa) {
        return aa * factorial(aa - 1)
    }

    console.log(factorial(aa))

    // ex 5.1

    function askTvSerie() {
        const name = window.prompt("What's the name of your favorite TV serie: ")
        const productionYear = window.prompt("What's his production year: ")
        const numberOfTheCastMembers = window.prompt("How many cast members: ")

        function namesOfTheCastMembers (number) {
            const arrayOfTheNamesOfTheCastMembers = []

            for (let i = 0; i < number; i++) {
                let castMemberName = window.prompt("What is the name of the cast member number ", i + 1)
                arrayOfTheNamesOfTheCastMembers.push(castMemberName)
            }
            return arrayOfTheNamesOfTheCastMembers
        }

        const allTheNamesOfTheCastMembers = namesOfTheCastMembers(numberOfTheCastMembers)

        const tvSerie = {
            name,
            productionYear,
            numberOfTheCastMembers,
            allTheNamesOfTheCastMembers
        }

        return tvSerie
    }

    const askTvSerieResult = askTvSerie()

    console.log("Here is the result in JSON: ")
    console.log(JSON.stringify(askTvSerieResult))

    // ex 5.2

    function randomizeCast() {
        const askName = window.prompt("What's the name of the tv serie you want: ")

        if (askTvSerieResult.name == askName) {
            const randomizedData = [...askTvSerieResult].sort(() => Math.random() - 0.5)
            console.log(randomizedData)
        }
    }

    randomizeCast()

    // ex 6.1

    class Circle {
        constructor(xPos, yPos, radius) {
            this.xPos = xPos
            this.yPos = yPos
            this.radius = radius
        }
    
        move(xOffset, yOffset) {
            this.xPos += xOffset
            this.yPos += yOffset
        }
    
        get surface() {
            return Math.PI * this.radius ** 2
        }
    }

    // ex 6.2

    class Rectangle {
        constructor(topLeftXPos, topLeftYPos, width, length) {
            this.topLeftXPos = topLeftXPos
            this.topLeftYPos = topLeftYPos
            this.width = width
            this.length = length
        }
    
        collides(otherRectangle) {
            const collidesOnX = this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
                this.topLeftXPos + this.width > otherRectangle.topLeftXPos
    
            const collidesOnY = this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length &&
                this.topLeftYPos + this.length > otherRectangle.topLeftYPos
    
            return collidesOnX && collidesOnY
        }
    }

    // ex 6.3

    const allTheRectangles = []
    for (let i = 0; i < 1000; i++) {
        const topLeftXPos = rand10()
        const topLeftYPos = rand10()
        const width = rand10()
        const length = rand10()
        allTheRectangles.push(new Rectangle(topLeftXPos, topLeftYPos, width, length))
    }

    const collidingRectangles = []
    for (let i = 0; i < allTheRectangles.length; i++) {
        for (let j = i + 1; j < allTheRectangles.length; j++) {
            if (allTheRectangles[i].collides(allTheRectangles[j])) {
                collidingRectangles.push([allTheRectangles[i], allTheRectangles[j]]);
            }
        }
    }

    collidingRectangles.forEach((pair, index) => {
        console.log(`Voici la pair ${index + 1}:`)
        console.log(pair[0])
        console.log(pair[1])
        console.log("Ensuite...")
    })
        
})();