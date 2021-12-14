function verificaParOuImpar() {
  var inNumero = document.getElementById('inNumero')
  var outResposta = document.getElementById('outResposta')

  var numero = Number(inNumero.value)

  if (numero == 0 || isNaN(numero)) {
    alert('Digite um número válido...')
    inNumero.focus()
    return
  }

  if (numero % 2 == 0) {
    outResposta.textContent = 'Resposta: ' + numero + ' é Par'
  } else {
    outResposta.textContent = 'Resposta: ' + numero + ' é Ímpar'
  }
}

var btVerificar = document.getElementById('btVerificar')
btVerificar = addEventListener('click', verificarParOuImpar)
