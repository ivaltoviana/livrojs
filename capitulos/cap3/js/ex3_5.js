function calcularRaiz() {
  let inNumero = document.getElementById('inNumero')
  let outResposta = document.getElementById('outResposta')

  // obtém conteúdo do campo inNumero
  let numero = Number(inNumero.value)

  // se não preencheu ou Not-s-Number (NaN)
  if (numero == 0 || isNaN(numero)) {
    alert('Informe um número válido...')
    inNumero.focus()
    return
  }

  // calcula a raiz quadrada do número
  let raiz = Math.sqrt(numero)

  /* 
    se valor da variável for igual a este valor arredondado para baixo

    A função Math.floor(), verifica se o número não tem decimais; arredonda o valor para baixo, ou seja, remove os decimais do número.
    Se a raiz, exemplo 4.0, for igual a aplicação Math.floor(4.0), significa que não há decimais, pois ambos são iguais, agora se tivermos 3.872983..., esse número será diferente de Math.floor(3.872983), que retorna 3.0
  */
  if (raiz == Math.floor(raiz)) {
    outResposta.textContent = 'Raiz: ' + raiz
  } else {
    outResposta.textContent = 'Não há raiz exata para ' + numero
  }
}

let btExibir = document.getElementById('btExibir')
btExibir.addEventListener('click', calcularRaiz)
