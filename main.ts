let x = 2
let x2 = 2
let x3 = 2
let y = 0
let y2 = -1
let y3 = -2
let direction = 1
basic.forever(function () {
    led.plot(x, y)
    led.plotBrightness(x, y, 255)
    led.plot(x2, y2)
    led.plotBrightness(x2, y2, 167)
    led.plot(x3, y3)
    led.plotBrightness(x3, y3, 58)
    basic.pause(500)
    led.unplot(x3, y3)
    led.unplot(x2, y2)
    led.unplot(x, y)
    y += direction
    if (y > 4) {
        led.unplot(x, y)
        y = 0
        x = randint(0, 4)
    }
    y2 += 1
    if (y2 > 4) {
        led.unplot(x2, y2)
        y2 = 0
        x2 = x
    }
    y3 += 1
    if (y3 > 4) {
        led.unplot(x, y3)
        y3 = 0
        x3 = x
    }
})
