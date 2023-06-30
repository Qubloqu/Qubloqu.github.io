'use strict'


function brdrView() {
  let sht = I(`sht1`)
      !chk1.checked ? sht.innerHTML = ".border {display: none;}" : sht.innerHTML = ".border {display: block;}"
  d.head.appendChild(sht)

}