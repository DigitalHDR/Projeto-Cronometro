let hh = 0
let mm = 0
let ss = 0

let tempo = 1
let cron

const naoRodar = document.getElementById('casoSerTrue')

function desabilitar() {
  naoRodar.setAttribute("disabled", "disabled")
}

function abilitar() {
  naoRodar.removeAttribute("disabled", "disabled")
}

function start() {
  cron = setInterval(() => {
    timer()
  }, tempo)
  desabilitar()
}

function pause() {
  abilitar()
  clearInterval(cron)
}

function stop() {
  abilitar()
  clearInterval(cron)
  hh = 0
  mm = 0
  ss = 0

  document.getElementById('counter').innerHTML = '00:00:00'
}

function timer() {
  ss++

  if (ss === 60) {
    ss = 0
    mm++

    if (mm === 60) {
      mm = 0
      hh++
    }
  }


  let formato = (hh < 10 ? '0' + hh : hh) + ':' + (mm.toString().padStart(2, '0')) + ':' + (ss < 10 ? '0' + ss : ss)
  document.getElementById('counter').innerHTML = formato
  return formato
}