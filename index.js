const moment = require('moment')

console.log('Hello World')

const tick = () => {
    console.clear()
    console.log('Tick', moment().format('h:mm:ss a'))
}

setInterval(tick, 1000)

