
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

function SetE(e, J) {
  // a(`J : ${Object.values(J)}`)

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

const O = {x: X('.prtoin'), y: Y('.prtoin')}
const U = {x: X('.prtout'), y: Y('.prtout')}
const K = {x: U.x - O.x, y: U.y - O.y}
// a(Object.values(K))



function Starter(V) {
  const L = {x: X(), y: Y()};
  const A = {x: V.x, y: V.y};

  const pw = 3;
  let cnt = 0;




  function Traler(L) {
    // a(`Traler(L) cnt: ${cnt}`)
    // a(Object.values(L))
    // a(`V: ${Object.values(V)}`)
    // a(`K: ${Object.values(K)}`)
    // a(`A: ${Object.values(A)}`)

    // a(Object.values(L))

    let e = E(L)
    let t = T(L)
    let L_

    if (e) {
      // if (t) {
        // if (C(t) === 'prtoin') {
        // }
          L_ = {x: L.x + V.x, y: L.y + V.y}
          // a(`L_: ${Object.values(L_)}`)
      // }
      // Perekluk(_e, t)

      cnt -= 1
      SetE(e, L_)
    }

    if (t) {
      if (C(t) === 'prtout') {
        V.x = K.x
        V.y = K.y
      }
      else if (C(t) === 'prtoin') {
        V.x = A.x
        V.y = A.y
      }
    }

    L = {x: L.x - V.x, y: L.y - V.y}

    // cnt -= 1
    if (cnt >= 0) Traler(L)
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
      SetE(e, _L)
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
    L = {x: L.x + V.x, y: L.y + V.y}

    let e = E(L)
    let t = T(L)

    if (e) {
      if (t) {
        if (C(t) === 'prtoin') {
          V.x = K.x
          V.y = K.y
        }
        if (C(t) === 'prtout') {
          V.x = A.x
          V.y = A.y
        }
      }
      cnt += 1
      if (cnt < 100) Fokus(L)

    }
    else {
      if (pw >= cnt) {
        Traler(L)
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

