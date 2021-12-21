function preencherEstrelas() {
  var inNumero = document.getElementById('inNumero')
  var outEspacos = document.getElementById('outEspacos')

  var numero = Number(inNumero.value)

  if (numero == 0 || isNaN(numero)) {
    alert('Número inválido...')
    inNumero.focus()
    return
  }

  var estrelas = ''

  for (var i = 1; i <= numero; i++) {
    if (i % 2 == 1) {
      estrelas = estrelas + '*'
    } else {
      estrelas = estrelas + '-'
    }
  }
  outEspacos.textContent = estrelas
}

var btPreencher = document.getElementById('btPreencher')
btPreencher.addEventListener('click', preencherEstrelas)
