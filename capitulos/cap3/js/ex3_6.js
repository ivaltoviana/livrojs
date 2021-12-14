function calcularNotas() {
  // cria uma referência aos elementos da página
  var inSaque = document.getElementById('inSaque')
  var outNotas100 = document.getElementById('outNotas100')
  var outNotas50 = document.getElementById('outNotas50')
  var outNotas10 = document.getElementById('outNotas10')

  // Limpa mensagens (caso, segunda execução)
  outNotas100.textContent = ''
  outNotas50.textContent = ''
  outNotas10.textContent = ''

  var saque = Number(inSaque.value) // converte conteúdo do campo inSaque

  // se não preencheu ou Not-a-Number (NaN)
  if (saque == 0 || isNaN(saque)) {
    alert('Informe o valor do saque corretamente') // exibe alerta
    inSaque.focus() // posiciona em inSaque
    return
  }

  // verifica se saque não é múltiplo de 10
  if (saque % 10 != 0) {
    alert('Valor inválido para notas disponíveis (R$ 10, 50, 100)')
    inSaque.focus()
    return
  }

  // calcula notas de 100, 50 e 10
  var notas100 = Math.floor(saque / 100)
  var resto = saque % 100
  var notas50 = Math.floor(resto / 50)
  resto = resto % 50
  var notas10 = Math.floor(resto / 10)

  // exibe as notas apenas se houver
  if (notas100 > 0) {
    outNotas100.textContent = 'Notas de R$ 100: ' + notas100
  }
  if (notas50 > 0) {
    outNotas50.textContent = 'Notas de R$ 50: ' + notas50
  }
  if (notas10 > 0) {
    outNotas10.textContent = 'Notas de R$ 10: ' + notas10
  }
}
// cria referência ao elemento btExibir e associa function ao evento click
var btExibir = document.getElementById('btExibir')
btExibir.addEventListener('click', calcularNotas)
