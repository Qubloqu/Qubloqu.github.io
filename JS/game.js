
'use strict'

//
// const C = e => e.getAttribute('class')
// const layer = 'trg';

const X = (id = 'R') => I(id).style['grid-row'] * 1
const Y = (id = 'R') => I(id).style['grid-column'] * 1

//------------------
function win() {
  let sht = I(`sht2`)
  sht.innerHTML = "#overlay {display: block;}"
  d.head.appendChild(sht)
}
//------------------
const getElem = L_ => N(`${L_.x} / ${L_.y}`)
const gettrgElem = (L_, layer) => N(`${layer} ${L_.x} / ${L_.y}`)

const Targets = d.querySelectorAll('.target')
const Obtain = d.querySelectorAll('.obtain')
let T = Targets.length - Obtain.length;

function init() {
  resizeGrd()
  d.body.addEventListener("keydown", go);
}

function Move(e, J) {
  e.style['grid-area'] = `${J.x} / ${J.y}`
  e.setAttribute('name', `${J.x} / ${J.y}`);
}

function Rec(V) {
  const L = {x: X(), y: Y()};
  let
    cnt = 0,
    pw = 1;

  function Train(L_) { //move train recursivly
    let _L = {x: L_.x - V.x, y: L_.y - V.y}
    let e = getElem(_L)[0]
    if (e) {
      let trge = gettrgElem(L_, 'trg')[0]
      //check obtain-------------
      if (trge) {
        if (C(trge) === 'prtoin') {
          let O = {x: X('out'), y: Y('out')}
          L_ = {x: O.x, y: O.y}
        }

        if (C(e) === 'tainer' && C(trge) === 'target') {
          e.setAttribute('class', 'obtain');
          T -= 1
          // a(T)
        }
        // else if (C(e) === 'tainer' && C(trge) === 'prtoin') {
        //   let O = {x: X('out'), y: Y('out')}
        //   L_ = {x: O.x, y: O.y}

        //   // let oute = gettrgElem(L_,'out')[0]
        //   // a(Object.values(O))
        // }
      }
      else if (!trge && C(e) === 'obtain') {
        e.setAttribute('class', 'tainer');
        T += 1
        // a(T)

      }
      Move(e, L_)
      //----------------------
    }
    cnt -= 1
    if (cnt >= 0) Train(_L)
  }
  //--------------------------------------
  function TrainRev(L) { //move train recursivly
    // a(Object.values(L))
    // a(cnt)

    let _L = {x: L.x - V.x, y: L.y - V.y}
    let L_ = {x: L.x + V.x, y: L.y + V.y}
    let e = getElem(L)[0]
    let _e = getElem(_L)[0]
    // a(Object.values(_L))

    if (e && !_e) {
      // a(C(e))
      Move(e, _L)
    }
    cnt -= 1
    if (cnt >= 0) TrainRev(L_)
  }
  //--------------------------------------

  // const Vmod = L => {L.x + V.x, L.y + V.y}

  function Saw(L) { //looking forward recursion

    let L_ = {x: L.x + V.x, y: L.y + V.y}
    let e = getElem(L_)[0]

    if (e) {
      switch (C(e)) {

        case 'tainer':
          cnt += 1
          Saw(L_)
          break;

        case 'obtain':
          cnt += 1
          Saw(L_)
          break;

        case 'revers':
          cnt += 1
          TrainRev(L)
          break;

        case 'prtoin':
          cnt += 1
          //create GAP betwin portals
          a('sdfasdf')
          a(C(e))
          // let O = {x: X('out'), y: Y('out')}
          // L_ = {x: O.x, y: O.y}

          break;

        default:
          break;
      }
    }
    else {
      if (pw >= cnt) {
        Train(L_)
      }
    }
  }

  Saw(L)
  T === 0 ? win() : false;

}
//------------------------------------------
const Ort = {
  U: {x: -1, y: 0},
  D: {x: +1, y: 0},
  L: {x: 0, y: -1},
  R: {x: 0, y: +1},
}
/* const Ort = {
  L: {x: -1, y: 0},
  R: {x: +1, y: 0},
  D: {x: 0, y: -1},
  U: {x: 0, y: +1},
} */
const orient = {
  ArrowUp() {Rec(Ort.U)},
  ArrowDown() {Rec(Ort.D)},
  ArrowLeft() {Rec(Ort.L)},
  ArrowRight() {Rec(Ort.R)},
}

const go = eve => {try {orient[eve.key]()} catch (ero) {} }
// const go = eve => {try {orient[eve.key]()} catch (ero) {a(`catch ${eve.key}` + ero)} }

