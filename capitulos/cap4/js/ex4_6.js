function verificarPrimo() {
  var inNumero = document.getElementById('inNumero')
  var outResposta = document.getElementById('outResposta')

  var num = Number(inNumero.value)

  if (num == 0 || isNaN(num)) {
    alert('Número Inválido...')
    inNumero.focus()
    return
  }

  // declara e inicializa a variável tipo flag(sinalizadora ou bandeira)
  var temDivisor = 0

  /* 
    As variáveis que agem como uma flag 
    indicam a presença ou ausência de algo no conjunto de dados em análise 
    - Também pode rceber valores booleanos (true ou false)
  */
  // percorre os possíveis divisores do num
  for (var i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      temDivisor = 1 // muda o flag
      break // sai da repetição
    }
  }

  // se num > 1 e não possui divisor
  if (num > 1 && !temDivisor) {
    outResposta.textContent = num + ' - É primo'
  } else {
    outResposta.textContent = num + ' - Não é primo'
  }
}

var btVerificarPrimo = document.getElementById('btVerificarPrimo')
btVerificarPrimo.addEventListener('click', verificarPrimo)
