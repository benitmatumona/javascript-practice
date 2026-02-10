let number = 10

const increment = () => {
    return ++number
}

function decrement() {
    return --number
}

increment()
increment()
console.log(number)

decrement()
decrement()
console.log(increment())
