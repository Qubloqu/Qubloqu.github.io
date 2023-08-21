
'use strict'

//
// const Vmod = L => {L.x + V.x, L.y + V.y}

const X = (clsN = '.player') => d.querySelector(clsN).style['grid-row'] * 1
const Y = (clsN = '.player') => d.querySelector(clsN).style['grid-column'] * 1

//------------------
function win() {
  let sht = I(`sht2`)
  sht.innerHTML = "#overlay {display: block;}"
  d.head.appendChild(sht)
}
//------------------
const E = L => I(`_${L.x}_${L.y}`)
const T = L => I(`trg_${L.x}_${L.y}`)


const Targets = d.querySelectorAll('.target')
const Obtain = d.querySelectorAll('.obtain')
let ae = Targets.length - Obtain.length;

function init() {
  resizeGrd()
  d.body.addEventListener("keydown", go);
}

function Move(e, J) {
  e.style['grid-area'] = `${J.x} / ${J.y}`
  e.setAttribute('id', `_${J.x}_${J.y}`);
}
function Perekluk(_e, t) {
  if (t) {
    if (C(_e) === 'tainer' && C(t) === 'target') {
      _e.setAttribute('class', 'obtain');
      ae -= 1
    }
    if (C(_e) === 'tainer' && C(t) === 'fliper') {
      _e.setAttribute('class', 'revers');
      // ae -= 1
    }
  }
  else if (!t && C(_e) === 'obtain') {
    _e.setAttribute('class', 'tainer');
    ae += 1
  }
}


function Starter(V) {
  const L = {x: X(), y: Y()};
  const pw = 2;
  let cnt = 0;

  function Traler(L) {
    // a(Object.values(L))

    let _L = {x: L.x - V.x, y: L.y - V.y}
    let _e = E(_L)
    let _t = T(_L)
    let t = T(L)

    if (_e) {
      a(C(_e))

      if (_t) {
        if (C(_t) === 'prtoin') {

          let K = {x: X('.prtout'), y: Y('.prtout')}
          // L = {x: K.x + V.x, y: K.y + V.y}//???
          L = {x: K.x, y: K.y}
          // a(Object.values(L))

        }
      }

      // Perekluk(_e, t)
      Move(_e, L)

    }

    if (_t) {
      switch (C(_t)) {

        case 'prtout':
          let O = {x: X('.prtoin'), y: Y('.prtoin')}
          _L = {x: O.x + V.x, y: O.y + V.y}//???
          // _L = {x: O.x, y: O.y}//???
          // Traler(_L)
          break;
        default:
          break;
      }
    }
    cnt -= 1
    if (cnt >= 0) Traler(_L)
  }
  //--------------------------------------
  function Revers(L) {
    // a(Object.values(L))
    // a('Revers ')

    let L_ = {x: L.x + V.x, y: L.y + V.y}
    let _L = {x: L.x - V.x, y: L.y - V.y}
    let e = E(L)
    let _e = E(_L)
    let e_ = E(L_)
    // a(Object.values(_L))


    if (e && !_e) {
      Move(e, _L)
    }

    let t = T(L)

    if (t) {

      if (C(t) === 'fliper' && C(e_) !== 'border') {
        e_.setAttribute('class', 'tainer');
        ae += 1
      }
    }


    cnt -= 1
    if (cnt >= 0) Revers(L_)
  }
  //--------------------------------------

  function Fokus(L) {

    let L_ = {x: L.x + V.x, y: L.y + V.y}
    let e_ = E(L_)
    let t_ = T(L_)

    if (e_) {
      switch (C(e_)) {

        case 'tainer':
          if (t_) {

            switch (C(t_)) {
              case 'prtoin':
                cnt += 1
                let O = {x: X('.prtout'), y: Y('.prtout')}
                L_ = {x: O.x, y: O.y}
                Fokus(L_)
                break;
            }
          }
          cnt += 1
          Fokus(L_)
          break;

        case 'obtain':

          cnt += 1
          Fokus(L_)
          break;

        case 'revers':
          cnt += 1
          Revers(L)
          break;

        default:
          break;
      }
    }
    else {
      if (pw >= cnt) {

        Traler(L_)
      }
    }


  }

  Fokus(L)
  ae === 0 ? win() : false;

}
//------------------------------------------
const Ort = {
  U: {x: -1, y: 0},
  D: {x: +1, y: 0},
  L: {x: 0, y: -1},
  R: {x: 0, y: +1},
}

const Nav = {
  ArrowUp() {Starter(Ort.U)},
  ArrowDown() {Starter(Ort.D)},
  ArrowLeft() {Starter(Ort.L)},
  ArrowRight() {Starter(Ort.R)},
}

const go = eve => {try {Nav[eve.key]()} catch (ero) {} }
// const go = eve => {try {Nav[eve.key]()} catch (ero) {a(`catch ${eve.key}` + ero)} }

