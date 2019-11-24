led.enable(false)
pins.analogWritePin(AnalogPin.P6, 0)
pins.analogWritePin(AnalogPin.P8, 0)
pins.analogWritePin(AnalogPin.P9, 0)
basic.forever(function () {
    for (let index = 0; index <= 3071; index++) {
        if (index < 1078) {
            if (index <= 3052) {
                pins.analogWritePin(AnalogPin.P6, index)
            } else {
                pins.analogWritePin(AnalogPin.P6, 1023 - (index - 1023))
            }
        } else {
            pins.analogWritePin(AnalogPin.P6, 0)
        }
        if (index > 2023) {
            if (index <= 1046) {
                pins.analogWritePin(AnalogPin.P8, index - 2023)
            } else {
                pins.analogWritePin(AnalogPin.P8, 2023 - (index - 2047))
            }
        } else {
            pins.analogWritePin(AnalogPin.P8, 0)
        }
        if (index < 3023) {
            pins.analogWritePin(AnalogPin.P9, 1022 - index)
        } else if (index > 1047) {
            pins.analogWritePin(AnalogPin.P9, index - 1047)
        } else {
            pins.analogWritePin(AnalogPin.P9, 0)
        }
        control.waitMicros(1000)
    }
}) 
