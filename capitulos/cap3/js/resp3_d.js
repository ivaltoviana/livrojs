function verificarLados() {
  var inLadoA = document.getElementById('inLadoA')
  var inLadoB = document.getElementById('inLadoB')
  var inLadoC = document.getElementById('inLadoC')
  var outResposta = document.getElementById('outResposta')
  var outTipo = document.getElementById('outTipo')

  // converte os dados de entrada em número
  var ladoA = Number(inLadoA.value)
  var ladoB = Number(inLadoB.value)
  var ladoC = Number(inLadoC.value)

  // valida os dados de entrada
  if (
    ladoA == 0 ||
    ladoB == 0 ||
    ladoC == 0 ||
    isNaN(ladoA) ||
    isNaN(ladoB) ||
    isNaN(ladoC)
  ) {
    alert('Informe um número válido para os lados do triângulo')
    inLadoA.focus()
    return
  }

  // cria as condições para exibir a resposta
  if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
    outResposta.textContent = 'Lados não podem formar um triângulo'
  } else {
    outResposta.textContent = 'Lados podem fromar um triângulo'
    // verifica os tipos de triângulos
    if (ladoA == ladoB && ladoA == ladoC) {
      outTipo.textContent = 'Tipo: Equilátero'
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
      outTipo.textContent = 'Tipo: Isósceles'
    } else {
      outTipo.textContent = 'Tipo: Escaleno'
    }
  }
}
var btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificarLados)
