'use strict'


function brdrView() {
  let sht = c('style')
  sht.innerHTML = ".border {display: none;}"
  chk.checked ? sht.innerHTML = ".border {display: none;}" : sht.innerHTML = ".border {display: block;}"

  d.head.appendChild(sht)

}