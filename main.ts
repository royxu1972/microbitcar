radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        motorbit.MotorRunDual(motorbit.Motors.M3, 50, motorbit.Motors.M4, 50)
        basic.showNumber(receivedNumber)
    } else if (receivedNumber == 2) {
        motorbit.MotorRunDual(motorbit.Motors.M3, -50, motorbit.Motors.M4, -50)
        basic.showNumber(receivedNumber)
    } else {
        motorbit.MotorStopAll()
        basic.showNumber(receivedNumber)
    }
})
function run () {
    motorbit.MotorRunDual(motorbit.Motors.M3, 50, motorbit.Motors.M4, 50)
    basic.pause(3000)
    motorbit.MotorStopAll()
}
basic.showIcon(IconNames.Yes)
radio.setGroup(99)
