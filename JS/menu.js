'use strict'


function brdrView(p) {
  let sht = I(`sht${p}`)
  switch (p) {
    case 1:
      !chk1.checked ? sht.innerHTML = ".border {display: none;}" : sht.innerHTML = ".border {display: block;}"
      break;
    case 2:
      !chk2.checked ? sht.innerHTML = "#overlay {display: none;}" : sht.innerHTML = "#overlay {display: block;}"
      break;

    default:
      break;
  }

  d.head.appendChild(sht)

}