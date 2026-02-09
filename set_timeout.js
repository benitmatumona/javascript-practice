function timed_print(time) {
    setInterval(greet, time, "Ben")
}

function greet(name) {
    console.log(`hello ${name}`)
}

timed_print(1000)
export default {timed_print}
export {greet}