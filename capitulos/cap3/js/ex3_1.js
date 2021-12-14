function calculaMedia() {
  // cria referência aos elementos da página
  var inNome = document.getElementById('inNome')
  var inNota1 = document.getElementById('inNota1')
  var inNota2 = document.getElementById('inNota2')
  var outSituacao = document.getElementById('outSituacao')
  var outMedia = document.getElementById('outMedia')

  // obtém os conteúdos dos campos de edição da página
  var nome = inNome.value
  var nota1 = Number(inNota1.value)
  var nota2 = Number(inNota2.value)

  // calcula a média das notas
  var media = (nota1 + nota2) / 2

  // se o campo nome estiver vazio exibe um alert
  if (nome == '') {
    alert('Digite o seu nome...')
    inNome.focus()
    return
  }

  // se o campo da nota1 ou nota2 estiver vazio, exibe um alerte e retorna um focus
  if (nota1 > 10) {
    alert('Digite uma nota entre 0 e 10')
    inNota1.focus()
    return
  } else if (nota2 > 10) {
    alert('Digite uma nota entre 0 e 10')
    inNota2.focus()
    return
  }

  // apresenta a média (altera o conteúdo do elemento outMedia)
  outMedia.textContent = 'Média das Notas: ' + media

  if (media >= 7) {
    // altera o texto e estilo da cor do elemento outSituacao
    outSituacao.textContent = 'Parabéns ' + nome + '! Você foi aprovado(a)'
    outSituacao.style.color = 'blue'
  } else if (media >= 4) {
    outSituacao.textContent = 'Atenção ' + nome + '. Você está em exame'
    outSituacao.style.color = 'orange'
  } else {
    outSituacao.textContent = 'Ops ' + nome + '... Você foi reprovado(a)'
    outSituacao.style.color = 'red'
  }
}

var btResultado = document.getElementById('btResultado')
btResultado.addEventListener('click', calculaMedia)
