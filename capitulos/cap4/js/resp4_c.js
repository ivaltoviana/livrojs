function verificaPerfeito() {
  var inNumero = document.getElementById('inNumero')
  var outDivisores = document.getElementById('outDivisores')
  var outResposta = document.getElementById('outResposta')

  // obtém o número
  var numero = Number(inNumero.value)

  // verifica validade do número
  if (numero == 0 || isNaN(numero)) {
    alert('Informe um número válido...')
    inNumero.focus()
    return
  }

  // sendo o 1 um divisor universal, incia com ele
  var divisores = 'Divisores do ' + numero + ': 1'
  var soma = 1

  // percorre os possíveis divisores e acumula
  for (var i = 2; i <= numero / 2; i++) {
    if (numero % i == 0) {
      divisores = divisores + ', ' + i
      // virgula + i (evita a última vírgula)
      soma = soma + i
    }
    divisores = divisores + ' (Soma: ' + soma + ')'

    // altera o conteúdo de outDivisores
    outDivisores.textContent = divisores

    // verifica se é perfeito e exibe resposta na tag outResposta
    if (numero == soma) {
      outResposta.textContent = numero + 'É um Número Perfeito'
    } else {
      outResposta.textContent = numero + 'Não é um Número Perfeito'
    }
  }
}

var btVerificarPerfeito = document.getElementById('btVerificarPerfeito')
btVerificarPerfeito.addEventListener('click', verificaPerfeito)
