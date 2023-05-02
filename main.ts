input.onButtonPressed(Button.A, function () {
    wuKong.setAllMotor(-80, 0)
})
input.onButtonPressed(Button.B, function () {
    wuKong.setAllMotor(-100, -100)
})
input.onGesture(Gesture.Shake, function () {
    wuKong.setAllMotor(100, 100)
})
bluetooth.startLEDService()
wuKong.setAllMotor(0, 0)
wuKong.setLightMode(wuKong.LightMode.BREATH)
