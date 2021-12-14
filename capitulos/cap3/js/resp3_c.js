function calculaTroco() {
  let inValor = document.getElementById('inValor')
  let outTempo = document.getElementById('outTempo')
  let outTroco = document.getElementById('outTroco')

  let valor = Number(inValor.value)

  if (valor == 0 || isNaN(valor)) {
    alert('Informe um valor válido')
    inValor.focus()
    return
  }

  // se o valor for insuficiente
  if (valor < 1.0) {
    alert('Valor Insuficiente (insira no mínimo R$ 1.00')
  }

  let tempo
  let troco

  // verifica o troco e tempo
  if (valor >= 3.0) {
    tempo = 120
    troco = valor - 3.0
  } else if (valor >= 1.75) {
    tempo = 60
    troco = valor - 1.75
  } else {
    tempo = 30
    troco = valor - 1.0
  }

  outTempo.textContent = 'Tempo ' + tempo + ' min'
  if (troco > 0) {
    outTroco.textContent = 'Troco R$: ' + troco.toFixed(2)
  }
}
let btConfirmar = document.getElementById('btConfirmar')
btConfirmar.addEventListener('click', calculaTroco)
