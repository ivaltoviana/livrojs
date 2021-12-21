function listarNumeros() {
  // cria referência aos elementos que a function irá manipular
  let inNumero = document.getElementById('inNumero')
  let outResposta = document.getElementById('outResposta')

  // obtém o número informado
  let numero = Number(inNumero.value)

  // verifica validade do número
  if (numero == 0 || isNaN(numero)) {
    alert('Informe um número válido...')
    inNumero.focus()
    return
  }

  // inicializa a variável resposta
  let resposta = 'Entre ' + numero + ' e 1: '

  // cria um for decrescente
  for (var i = numero; i > 1; i--) {
    // a resposta vai acumulando números e vírgulas
    resposta = resposta + i + ', '
  }
  resposta = resposta + i + '.'

  // altera o conteúdo de outResposta
  outResposta.textContent = resposta
}

// referencia elemento e após associa function ao evento click
let btDecrescer = document.getElementById('btDecrescer')
btDecrescer.addEventListener('click', listarNumeros)
