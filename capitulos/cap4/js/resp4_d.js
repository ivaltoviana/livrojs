function criarEstrelas() {
  var inNumeroLinhas = document.getElementById('inNumeroLinhas')
  var outEstrelas = document.getElementById('outEstrelas')

  var numLinhas = Number(inNumeroLinhas.value)

  if (numLinhas == 0 || isNaN(numLinhas)) {
    alert('Informe um número válido...')
    inNumeroLinhas.focus()
    return
  }

  // variável que rá concatenar com estrelas
  var estrelas = ''

  // cria uma repetição (até o número de linhas informado)
  for (var i = 1; i <= numLinhas; i++) {
    for (var j = 1; j <= i; j++) {
      // dentro dessa repetição é criada uma outra (para cada linha, até i)
      estrelas = estrelas + '*'
    }
    // faz uma quebra de linha
    estrelas = estrelas + '\n'
  }

  outEstrelas.textContent = estrelas
}

var btCriar = document.getElementById('btCriar')
btCriar.addEventListener('click', criarEstrelas)
