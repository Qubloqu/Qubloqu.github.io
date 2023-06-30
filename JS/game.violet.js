
'use strict'

//
// const C = e => e.getAttribute('class')
const layer = 'trg';

const X = () => I('R').style['grid-row'] * 1
const Y = () => I('R').style['grid-column'] * 1

//------------------
function dia() {
  let sht = I(`sht2`)
  sht.innerHTML = "#overlay {display: block;}"
  d.head.appendChild(sht)

  // let dia = d.createElement('div')
  // dia.innerHTML = '<h1>You WIN!</h1>'
  // dia.setAttribute('class', 'diawin');
  // d.body.prepend(dia)
}
//------------------
const getElem = _L => N(`${_L.x} / ${_L.y}`)
const gettrgElem = _L => N(`${layer} ${_L.x} / ${_L.y}`)

const Targets = d.querySelectorAll('.target')
const Obtain = d.querySelectorAll('.obtain')
let T = Targets.length-Obtain.length;

function init() {


  resizeGrd()
  d.body.addEventListener("keydown", go);
}

//-----------------------------------

//-----------------------------------
function Move(e, J) {
  e.style['grid-area'] = `${J.x} / ${J.y}`
  e.setAttribute('name', `${J.x} / ${J.y}`);
}

function Rec(V) {
  const L = {x: X(), y: Y()};
  let
    cnt = 0,
    pw = 1;
  //----------------


  function Train(_L) { //move train recursivly
    let __L = {x: _L.x - V.x, y: _L.y - V.y}
    let e = getElem(__L)[0]
    if (e) {
      let trge = gettrgElem(_L)[0]
      //check obtain-------------
      if (trge) {
        if (C(e) === 'tainer' && C(trge) === 'target') {
          e.setAttribute('class', 'obtain');
          T -= 1
          // a(T)
        }
      }
      else if (!trge && C(e) === 'obtain') {
        e.setAttribute('class', 'tainer');
        T += 1
        // a(T)

      }
      Move(e, _L)
      //----------------------
    }
    cnt -= 1
    if (cnt >= 0) Train(__L)
  }
  //--------------------------------------
  function TrainRev(L) { //move train recursivly
    // a(Object.values(L))
    // a(cnt)

    let _L = {x: L.x - V.x, y: L.y - V.y}
    let L_ = {x: L.x + V.x, y: L.y + V.y}
    let e = getElem(L)[0]
    let e0 = getElem(_L)[0]
    // a(Object.values(_L))

    if (e && !e0) {
      // a(C(e))
      Move(e, _L)
    }
    cnt -= 1
    if (cnt >= 0) TrainRev(L_)
  }
  //--------------------------------------

  // const Vmod = L => {L.x + V.x, L.y + V.y}

  function CountT(L) { //looking forward recursion

    let _L = {x: L.x + V.x, y: L.y + V.y}
    let e = getElem(_L)[0]

    if (e) {
      switch (C(e)) {

        case 'tainer':
          cnt += 1
          CountT(_L)
          break;

        case 'obtain':
          cnt += 1
          CountT(_L)
          break;

        case 'revers':
          cnt += 1
          TrainRev(L)
          break;

        default:
          break;
      }
    }
    else {
      if (pw >= cnt) {
        Train(_L)
      }
    }
  }

  CountT(L)
  T === 0 ? dia() : false;

}
//------------------------------------------
const Ort = {
  U: {x: -1, y: 0},
  D: {x: +1, y: 0},
  L: {x: 0, y: -1},
  R: {x: 0, y: +1},
}
const orient = {
  ArrowUp() {Rec(Ort.U)},
  ArrowDown() {Rec(Ort.D)},
  ArrowLeft() {Rec(Ort.L)},
  ArrowRight() {Rec(Ort.R)},
}

const go = eve => {try {orient[eve.key]()} catch (ero) {}}
// const go = eve => {try {orient[eve.key]()} catch (ero) {a(`catch ${eve.key}` + ero)} }

