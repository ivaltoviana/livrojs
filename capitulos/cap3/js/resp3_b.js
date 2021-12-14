function verificarVelocidade() {
  var inVelocidadePermitida = document.getElementById('inVelocidadePermitida')
  var inVelocidadeCondutor = document.getElementById('inVelocidadeCondutor')
  var outSituacao = document.getElementById('outSituacao')

  var velocidadePermitida = Number(inVelocidadePermitida.value)
  var velocidadeCondutor = Number(inVelocidadeCondutor.value)

  if (velocidadePermitida == 0 || isNaN(velocidadePermitida)) {
    alert('Informe uma velocidade permitida válida')
    inVelocidadePermitida.focus()
    return
  }

  if (velocidadeCondutor == 0 || isNaN(velocidadeCondutor)) {
    alert('Informe uma velocidade válida')
    inVelocidadeCondutor.focus()
    return
  }

  if (velocidadeCondutor <= velocidadePermitida) {
    outSituacao.textContent = 'Situação: Sem Multa'
  } else {
    var mais20 = velocidadePermitida * 1.2
    if (velocidadeCondutor <= mais20) {
      outSituacao.textContent = 'Situação: Multa Leve'
    } else {
      outSituacao.textContent = 'Situação: Multa Grave'
    }
  }
}
var btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificarVelocidade)
