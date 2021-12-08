function calculaPromocao() {
  var inDescricaoMed = document.getElementById('inDescricaoMed')
  var inPreco = document.getElementById('inPreco')
  var outDescricao = document.getElementById('outDescricao')
  var outDesconto = document.getElementById('outDesconto')

  var descricao = inDescricaoMed.value
  var preco = Number(inPreco.value)

  var promocao = Math.floor(preco * 2)

  outDescricao.textContent = 'Promoção ' + descricao
  outDesconto.textContent = 'Leve 2 por apenas R$: ' + promocao.toFixed(2)
}

var btMostrarPromocao = document.getElementById('btMostrarPromocao')
btMostrarPromocao.addEventListener('click', calculaPromocao)
