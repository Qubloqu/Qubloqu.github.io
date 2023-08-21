
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
  let t = T(J)

  e.style['grid-area'] = `${J.x} / ${J.y}`
  e.setAttribute('id', `_${J.x}_${J.y}`);

  if (t) {Perekluk(e, t)}

}

function Perekluk(e, t) {
  if (t) {
    if (C(e) === 'tainer' && C(t) === 'target') {
      e.setAttribute('class', 'obtain');
      ae -= 1
    } else if (C(e) === 'tainer' && C(t) === 'fliper') {
      e.setAttribute('class', 'revers');
      // ae -= 1
    } else if (C(e) === 'revers' && C(t) === 'fliper') {
      e.setAttribute('class', 'tainer');
      // ae -= 1
    }
  }
  else if (!t && C(e) === 'obtain') {
    e.setAttribute('class', 'tainer');
    ae += 1
  }
}

const U = {x: X('.prtout'), y: Y('.prtout')}

function Starter(V) {
  const L = {x: X(), y: Y()};
  const A = {x: V.x, y: V.y};

  const pw = 5;
  let cnt = 0;
  let u = false;
  let r = false;

  const O_o = L => {
    let O = {x: U.x - L.x, y: U.y - L.y};
    return O;
  }

  let O = {x: 0, y: 0};
  //--------------------------------------
  function Trail(L) {
    // a(`-------------------------------------`)
    // a(`Trail(L) cnt: ${cnt}`)
    // a(`L: ${Object.values(L)}`)
    // a(`O: ${Object.values(O)}`)
    // a(`V: ${Object.values(V)}`)
    // a(`K: ${Object.values(K)}`)
    // a(`A: ${Object.values(A)}`)

    let e = E(L)
    let t = T(L)
    let L_
    let _L

    if (e) {
      L_ = {x: L.x + V.x, y: L.y + V.y}
      _L = {x: L.x - V.x, y: L.y - V.y}
      cnt -= 1
      if (r) {SetE(e, _L)} else {SetE(e, L_)}
    }

    if (u) {
      if (t) {
        if (C(t) === 'prtout') {
          V.x = O.x
          V.y = O.y
        }
        else if (C(t) === 'prtoin') {
          V.x = A.x
          V.y = A.y
        }
      }
    }

    L = {x: L.x - V.x, y: L.y - V.y}

    // cnt -= 1
    // if (cnt >= 0) Trail(L)
    if (cnt > 0) Trail(L)
    // a(u)
    u = false
  }

  //--------------------------------------
  function Fokus(L) {

    let e = E(L)
    let t = T(L)

    if (e) {
      if (C(e) === 'tainer') {
        if (t) {
          if (C(t) === 'prtoin') {
            O = O_o(L)
            V.x = O.x
            V.y = O.y
            u = true

          }
          if (C(t) === 'prtout') {
            V.x = A.x
            V.y = A.y
          }
        }
        cnt += 1
        L = {x: L.x + V.x, y: L.y + V.y}
        Fokus(L)
      }
      else if (C(e) === 'player') {
        if (t) {
          if (C(t) === 'prtoin') {
            O = O_o(L)
            V.x = O.x
            V.y = O.y
            u = true

          } else if (C(t) === 'prtout') {
            V.x = A.x
            V.y = A.y
          }
        }
        cnt += 1
        L = {x: L.x + V.x, y: L.y + V.y}
        Fokus(L)
      }
      else if (C(e) === 'revers') {
        if (t) {
          if (C(t) === 'prtoin') {
            O = O_o(L)
            V.x = O.x
            V.y = O.y
            u = true

          } else if (C(t) === 'prtout') {
            V.x = A.x
            V.y = A.y
          }
        }
        r = true
        cnt += 1
        L = {x: L.x + V.x, y: L.y + V.y}
        Fokus(L)
      }
    } else {
      if (pw >= cnt) {
        Trail(L)
      } else {
        // a('end')
        u = false
        V.x = A.x
        V.y = A.y
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

