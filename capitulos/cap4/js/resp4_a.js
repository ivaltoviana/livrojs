function repeteFruta() {
  var inFruta = document.getElementById('inFruta')
  var inNumero = document.getElementById('inNumero')
  var outResposta = document.getElementById('outResposta')

  var fruta = inFruta.value
  var num = Number(inNumero.value)

  if (fruta == '' || num == 0 || isNaN(num)) {
    alert('Informe os dados corretamente...')
    inFruta.focus()
    return
  }

  // acumula o número repetido das frutas
  var resposta = ''

  // cria uma repetição
  for (var i = 1; i <= num; i++) {
    // a cada volta adiciona uma fruta
    resposta = resposta + fruta + ' * '
  }

  // isola a última fruta para não exibir * no final
  resposta = resposta + fruta

  outResposta.textContent = resposta
}

var btRepete = document.getElementById('btRepete')
btRepete.addEventListener('click', repeteFruta)
