let temperatura = input.temperature() * 1.8 + 32
if (temperatura <= 14 && temperatura >= -22) {
    basic.showString("Permanece en casa, hay fuertes nevadas.")
    basic.showString("R")
} else if (temperatura >= 15 && temperatura <= 23) {
    basic.showString("¡Toma tus mejores esquís y diviértete!")
    basic.showString("V")
} else if (temperatura >= 24 && temperatura <= 32) {
    basic.showString("Sólo podrás esquiar en las partes más altas de las montañas.")
    basic.showString("A")
} else if (temperatura >= 33) {
    basic.showString("Lo siento, no es temporada para esquiar.")
    basic.showString("-")
}
basic.forever(function () {
	
})
