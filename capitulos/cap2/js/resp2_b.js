function calcularLanHouse() {
  var inValor = document.getElementById('inValor')
  var inTempo = document.getElementById('inTempo')
  var outValorPagar = document.getElementById('outValorPagar')

  var valor = Number(inValor.value)
  var tempo = Number(inTempo.value)

  var pagar = Math.ceil(tempo / 15) * valor

  outValorPagar.textContent = 'Valor a Pagar R$: ' + pagar.toFixed(2)
}

var btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', calcularLanHouse)
