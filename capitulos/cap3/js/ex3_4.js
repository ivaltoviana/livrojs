function calcularFuso() {
  let inHoraBrasil = document.getElementById('inHoraBrasil')
  let outHoraFranca = document.getElementById('outHoraFranca')

  // obtém e converte o conteúdo do campo inHoraBrasil
  let horaBrasil = Number(inHoraBrasil.value)

  // se não preencheu ou Not-a-Number (NaN)
  if (inHoraBrasil.value == '' || isNaN(horaBrasil)) {
    alert('Informe a hora no Brasil corretamente') // exibe alerta
    inHoraBrasil.focus // posiciona em inHoraBrasil
    return
  }

  let horaFranca = horaBrasil + 5 // calcula o horário na França que tem uma diferença de 5 horas

  /* 
    Se passar das 24 horas na França, ou seja, se for 20 horas no Brasil o programa não pode informar que na França são 25 horas
  */
  if (horaFranca > 24) {
    horaFranca = horaFranca - 24 // subtrai 24
  }

  outHoraFranca.textContent = 'Hora na França: ' + horaFranca.toFixed(2)
}

let btExibir = document.getElementById('btExibir')
btExibir.addEventListener('click', calcularFuso)
