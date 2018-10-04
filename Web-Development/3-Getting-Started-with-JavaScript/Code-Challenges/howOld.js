// Write your function here:
const howOld = (age, year) => {
    const currentYear = 2018;
    yearDifference = Math.abs(year - currentYear)
    lifeTime = currentYear - age
    if (year > currentYear) {
        return `You will be ${age + yearDifference} in the year ${year}`
    } else if (year < currentYear) {
        if (year > lifeTime) {
            return `You were ${age - yearDifference} in the year ${year}`
        } else if (year < lifeTime) {
            return `The year ${year} was ${yearDifference - age} years before you were born'`
        }
    }
}

// Once your function is written, write function calls to test your code!
console.log(howOld(28, 2025))
console.log(howOld(28, 2017))
console.log(howOld(28, 1988))