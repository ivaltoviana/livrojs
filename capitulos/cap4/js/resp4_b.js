function mostrarEvolucao() {
  var inChinchilas = document.getElementById('inChinchilas')
  var inAnos = document.getElementById('inAnos')
  var outEvolucao = document.getElementById('outEvolucao')

  var chinchilas = Number(inChinchilas.value)
  var anos = Number(inAnos.value)

  if (chinchilas < 2 || isNaN(chinchilas) || anos == 0 || isNaN(anos)) {
    alert('Informe os dados corretamente...')
    inChinchilas.focus()
    return
  }

  var resposta = ''
  var total = chinchilas

  for (var i = 1; i <= anos; i++) {
    resposta = resposta + i + 'º Ano: ' + total.toFixed(2) + ' Chinchilas\n'

    total = total * 3
  }

  outEvolucao.textContent = resposta
}

var btMostrar = document.getElementById('btMostrar')
btMostrar.addEventListener('click', mostrarEvolucao)
