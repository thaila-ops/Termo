// MakeCode + extensao github:seeed-studio/pxt-grove
// Exemplo para Grove DHT11 no P0. Confirme modelo e porta antes de usar.
serial.redirectToUSB()
serial.setBaudRate(BaudRate.BaudRate115200)
let dht11 = grove.connectToDHT11(DigitalPin.P0, false)
// LED externo no P1; matriz mostra a temperatura do sensor Grove.
let temperaturaAtual = 0
let leituraDisponivel = false
pins.digitalWritePin(DigitalPin.P1, 0)
let ultimoComando = 0
let temComando = false
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    let comando = serial.readUntil(serial.delimiters(Delimiters.NewLine)).trim()
    if (comando == "LED:1" || comando == "LED:0") {
        ultimoComando = input.runningTime()
        temComando = true
        if (comando == "LED:1") {
            pins.digitalWritePin(DigitalPin.P1, 1)
            serial.writeLine("ACK:1")
        } else {
            pins.digitalWritePin(DigitalPin.P1, 0)
            serial.writeLine("ACK:0")
        }
    }
})
basic.forever(function () {
    if (grove.readTemperatureHumidity(dht11)) {
        let t = grove.getTemperatureCelsius(dht11)
        let h = grove.getHumidity(dht11)
        temperaturaAtual = t
        leituraDisponivel = true
        serial.writeLine('{"t":' + t + ',"h":' + h + '}')
    }
    basic.pause(2000)
})
basic.forever(function () {
    if (temComando && input.runningTime() - ultimoComando > 10000) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        temComando = false
        serial.writeLine("ACK:0")
    }
    basic.pause(500)
})

basic.forever(function () {
    if (leituraDisponivel) {
        basic.showNumber(temperaturaAtual)
    }
    basic.pause(500)
})
