function criarEstrelas() {
  var inNumeroLinhas = document.getElementById('inNumeroLinhas')
  var outEstrelas = document.getElementById('outEstrelas')

  var numLinhas = Number(inNumeroLinhas.value)

  if (numLinhas == 0 || isNaN(numLinhas)) {
    alert('Informe um número válido...')
    inNumeroLinhas.focus()
    return
  }

  var estrelas = ''

  for (var i = 1; i <= numLinhas; i++) {
    for (var j = 1; j <= i; j++) {
      estrelas = estrelas + '*'
    }
    estrelas = estrelas + '\n'
  }

  outEstrelas.textContent = estrelas
}

var btCriar = document.getElementById('btCriar')
btCriar.addEventListener('click', criarEstrelas)
