input.onButtonPressed(Button.A, function () {
    wuKong.setAllMotor(-100, -100)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    wuKong.setAllMotor(100, 100)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
})
bluetooth.startLEDService()
wuKong.setAllMotor(0, 0)
wuKong.setLightMode(wuKong.LightMode.BREATH)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
