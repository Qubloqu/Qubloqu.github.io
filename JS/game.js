
'use strict'

const Ort = {  U: { x: -1, y: 0 },  D: { x: +1, y: 0 },  L: { x: 0, y: -1 },  R: { x: 0, y: +1 },}

const Nav = {  ArrowUp() { Starter(Ort.U) },  ArrowDown() { Starter(Ort.D) },  ArrowLeft() { Starter(Ort.L) },  ArrowRight() { Starter(Ort.R) },
};

const go = eve => { try { Nav[eve.key]() } catch (ero) { } };
// const go = eve => {try {Nav[eve.key]()} catch (ero) {a(`catch ${eve.key}` + ero)} }

//
// const Vmod = L => {L.x + V.x, L.y + V.y}

const X = (clsN = '.player') => d.querySelector(clsN).style['grid-row'] * 1;const Y = (clsN = '.player') => d.querySelector(clsN).style['grid-column'] * 1;

//------------------
function init() {
  resizeGrd()
  d.body.addEventListener("keydown", go);  window.focus();
}
//------------------
function win() {
  let sht = I(`sht2`)
  sht.innerHTML = "#overlay {display: block;}"
  d.head.appendChild(sht)

  d.body.removeEventListener("keydown", go);

}
//------------------
function opel(num) {
  let Clol = d.querySelector(`.clol${num}`);  let Bim = d.querySelector(`.pbim${num}`);  let Aura = d.querySelector(`.aura${num}`);  Clol.setAttribute('class', 'opelvl');
  Clol.setAttribute('id', `ope${Clol.getAttribute('id')}`);
  Bim.style.setProperty('display', `block`)
  Aura.setAttribute('class', `oura${num}`);

  // openall()
  // opexit()
}

function openall() {
  // a('opedor')
  let Doors = d.querySelectorAll('.clodor')

  Doors.forEach(e => {
    e.setAttribute('class', 'opedor');    e.setAttribute('id', `ope${e.getAttribute('id')}`);
  });

  let Exits = d.querySelectorAll('.cloxit')

  Exits.forEach(e => {
    e.setAttribute('class', 'opexit');    e.setAttribute('id', `ope${e.getAttribute('id')}`);  });

  let Nxtlv = d.querySelectorAll('.clolvl')

  Nxtlv.forEach(e => {
    e.setAttribute('class', 'opelvl');    e.setAttribute('id', `ope${e.getAttribute('id')}`);
  });

  // return true
}

function opexit() {
  // a('opexit')
  let Exits = d.querySelectorAll('.cloxit')

  Exits.forEach(e => {
    e.setAttribute('class', 'opexit');    e.setAttribute('id', `trg${e.getAttribute('id')}`);  });

  let Nxtlv = d.querySelectorAll('.clolvl')

  Nxtlv.forEach(e => {
    e.setAttribute('class', 'opelvl');    e.setAttribute('id', `ope${e.getAttribute('id')}`);  });
  // return true
}

function cloxit() {
  // a('cloxit')
  let Exits = d.querySelectorAll('.opexit')

  Exits.forEach(e => {
    e.setAttribute('class', 'cloxit');
    e.setAttribute('id', `${e.getAttribute('id').slice(3)}`);
  });
  // return false

  let Nxtlv = d.querySelectorAll('.opelvl')

  Nxtlv.forEach(e => {
    e.setAttribute('class', 'clolvl');
    e.setAttribute('id', `${e.getAttribute('id').slice(3)}`);
  });
}


//------------------prefix mean layer (sloy)-----------------
const E = L => I(`_${L.x}_${L.y}`)
const T = L => I(`trg_${L.x}_${L.y}`)
const B = L => I(`bns_${L.x}_${L.y}`)
const F = L => I(`flp_${L.x}_${L.y}`)
const P = L => I(`prt_${L.x}_${L.y}`)
const S = L => I(`scr_${L.x}_${L.y}`)

const Targets = d.querySelectorAll('.target')
const Obtain = d.querySelectorAll('.obtain')
let ae = Targets.length - Obtain.length;
let ad = false;
let au = false;

// const xh = 0x33;
const xh = 51;
/* const HEX = {
  R: 0xFF,
  G: 0xFF,
  B: 0xFF,
}; */


//secrets
const SCR = {
  s01: 0,
  s02: 0,
  s03: 0,
  s04: 0,
  s05: 0,
  s06: 0,
  s07: 0,
  s08: 0,
  s09: 0,
}

//colors
const HEX = {
  R: 51,
  G: 51,
  B: 51,
};

/* function Hink(rr,gg,bb) {
  HEX.R = HEX.R+xh*rr;
  HEX.G = HEX.G+xh*gg;
  HEX.B = HEX.B+xh*bb;
  if (HEX.R>0xFF) {HEX.R = 0x00}
  if (HEX.G>0xFF) {HEX.G = 0x00}
  if (HEX.B>0xFF) {HEX.B = 0x00}
  return '#'+HEX.R.toString(16)+HEX.G.toString(16)+HEX.B.toString(16)
} */

function Hink(rr, gg, bb) {
  HEX.R = HEX.R + xh * rr;
  HEX.G = HEX.G + xh * gg;
  HEX.B = HEX.B + xh * bb;

  //peredelat! no good for circling!
  if (HEX.R >= 255) { HEX.R = HEX.R - 255 }
  if (HEX.G >= 255) { HEX.G = HEX.G - 255 }
  if (HEX.B >= 255) { HEX.B = HEX.B - 255 }
  if (HEX.R < 0) { HEX.R = 255 + HEX.R }
  if (HEX.G < 0) { HEX.G = 255 + HEX.G }
  if (HEX.B < 0) { HEX.B = 255 + HEX.B }
  // let newrgb = `rgba(${HEX.R}, ${HEX.G}, ${HEX.B}, 1.0)`
  let newrgb = `rgb(${HEX.R}, ${HEX.G}, ${HEX.B})`
  let dqs = d.querySelector(':root')
  let rs = getComputedStyle(dqs)
  dqs.style.setProperty('--brdclr', newrgb)

  let aura01 = rs.getPropertyValue('--aura01clr');  if (aura01 === newrgb) {
    opel('01')
  }

  let aura02 = rs.getPropertyValue('--aura02clr');  if (aura02 === newrgb) {
    opel('02')
  }
  let aura03 = rs.getPropertyValue('--aura03clr');  if (aura03 === newrgb) {
    opel('03')
  }
  let aura04 = rs.getPropertyValue('--aura04clr');  if (aura04 === newrgb) {
    opel('04')
  }
}

function SetE(e, J) {
  // a(`J : ${Object.values(J)}`)
  let t = T(J)
  let b = B(J)
  let f = F(J)
  let p = P(J)
  let s = S(J)

  e.style['grid-area'] = `${J.x} / ${J.y}`
  e.setAttribute('id', `_${J.x}_${J.y}`);  Perekluk(e, t, b, f, p, s)
  // a(ae)
}

function Perekluk(e, t, b, f, p, s) {
  //pereday object i parametry kak param obj
  // let elm = {
  //   c:C(e),

  // }

  if (f) {
    let Ce = C(e)
    let Cf = C(f)

    if (Ce === 'tainer' && Cf === 'fliper') {
      e.setAttribute('class', 'revers');
    }
    else if (Ce === 'tainpr' && Cf === 'fliper') {
      e.setAttribute('class', 'revers');   }
    else if (Ce === 'obtain' && Cf === 'fliper') {
      e.setAttribute('class', 'revers');      ae += 1
    } else if (Ce === 'revers' && Cf === 'fliper') {
      e.setAttribute('class', 'tainer');    }
  }

  if (p) {
    let Ce = C(e)
    let Cp = C(p)
    if (Ce === 'tainer' && Cp === 'prtoin') {
      e.setAttribute('class', 'tainpr');    }
    else if (Ce === 'tainer' && Cp === 'prtout') {
      e.setAttribute('class', 'tainpr');
    }
    // else if (Ce === 'obtain' && Cp === 'prtoin') {
    //   e.setAttribute('class', 'tainpr');
    // }
    // else if (Ce === 'obtain' && Cp === 'prtout') {
    //   e.setAttribute('class', 'tainpr');
    // }

    // nelza prevrashat obtainer -> tainpr T.k tainpr === tainer!!!!!!!!!!!!!!!!!!!!!!
    // obtainer dolzhen imet svoy analog togda!!! ili peredumat logiku!!!!!!!!!

  } else if (!p && C(e) === 'tainpr') {
    e.setAttribute('class', 'tainer');  }

  //----------

  if (b) {
    let Ce = C(e)
    let Cb = C(b)

    // a=>i
    if (Ce === 'player' && Cb === 'abonus') {
      b.setAttribute('class', 'ibonus');      Hink(0, 0, 1)
    }
    else if (Ce === 'player' && Cb === 'agonus') {
      b.setAttribute('class', 'igonus');      Hink(0, 1, 0)
    }
    else if (Ce === 'player' && Cb === 'aronus') {
      b.setAttribute('class', 'ironus');
      Hink(1, 0, 0)
    }
    else if (Ce === 'player' && Cb === 'amonus') {
      b.setAttribute('class', 'imonus');
      Hink(1, 0, 1)
    }
    else if (Ce === 'player' && Cb === 'aconus') {
      b.setAttribute('class', 'iconus');      Hink(0, 1, 1)
    }
    else if (Ce === 'player' && Cb === 'alonus') {
      b.setAttribute('class', 'ilonus');
      Hink(1, 1, 0)

    }
    // i=>e
    else if (Ce === 'player' && Cb === 'ibonus') {
      b.setAttribute('class', 'ebonus');      Hink(-1, -1, 0)
    }
    else if (Ce === 'player' && Cb === 'igonus') {
      b.setAttribute('class', 'egonus');
      Hink(-1, 0, -1)
    }
    else if (Ce === 'player' && Cb === 'ironus') {
      b.setAttribute('class', 'eronus');      Hink(0, -1, -1)
    }
    else if (Ce === 'player' && Cb === 'imonus') {
      b.setAttribute('class', 'emonus');      Hink(0, -1, 0)
    }
    else if (Ce === 'player' && Cb === 'iconus') {
      b.setAttribute('class', 'econus');
      Hink(-1, 0, 0)
    }
    else if (Ce === 'player' && Cb === 'ilonus') {
      b.setAttribute('class', 'elonus');
      Hink(0, 0, -1);    }
    // e=>a
    else if (Ce === 'player' && Cb === 'ebonus') {
      b.setAttribute('class', 'abonus');      Hink(1, 1, 0)
      Hink(0, 0, -1);    }
    else if (Ce === 'player' && Cb === 'egonus') {
      b.setAttribute('class', 'agonus');      Hink(1, 0, 1)
      Hink(0, -1, 0)
    }
    else if (Ce === 'player' && Cb === 'eronus') {
      b.setAttribute('class', 'aronus');
      Hink(0, 1, 1);      Hink(-1, 0, 0)
    }
    else if (Ce === 'player' && Cb === 'emonus') {
      b.setAttribute('class', 'amonus');
      Hink(0, 1, 0);      Hink(-1, 0, -1)
    }
    else if (Ce === 'player' && Cb === 'econus') {
      b.setAttribute('class', 'aconus');      Hink(1, 0, 0)
      Hink(0, -1, -1);    }
    else if (Ce === 'player' && Cb === 'elonus') {
      b.setAttribute('class', 'alonus');      Hink(0, 0, 1)
      Hink(-1, -1, 0);    }
  }
  //----------

  if (t) {
    let Ce = C(e)
    let Ct = C(t)
    if (Ce === 'tainer' && Ct === 'target') {
      e.setAttribute('class', 'obtain');
      ae -= 1
    } else if (Ce === 'tainpr' && Ct === 'target') {
      e.setAttribute('class', 'obtain');
      ae -= 1
      // a(`pr${ae}`)
    } else if (Ce === 'obtain' && Ct !== 'target') {
      e.setAttribute('class', 'tainer');
      ae += 1
    } else if (Ce === 'player' && Ct === 'levlnk') { win(); }
    //gluck with levlnk & opelvl (opelvl got trg prefix and first taken before levlnk)!!!!
    //becose of that you have to locate levlnk tag upper then clolvl (clolvl not trg but become!!!)

    //SOLVED!!!  ope_ prefix was inculcate!

  } else if (!t && C(e) === 'obtain') {
    e.setAttribute('class', 'tainer');    ae += 1;  }

  if (s) {
    let Ce = C(e)
    let Cs = C(s)
    if (Ce === 'player' && Cs === 'scrt01') {
      SCR.s01 += 1;
      s.setAttribute('class', 'engulf');
      let frames = window.parent.frames
      s.setAttribute('id', `glf${s.getAttribute('id').slice(3)}`);

      // a(frames.length);
      try { frames['men'].postMessage(`${SCR.s01}_01`, "*"); } catch (error) { a(error) }
    }
    if (Ce === 'player' && Cs === 'scrt02') {
      SCR.s02 += 1;
      s.setAttribute('class', 'engulf');      s.setAttribute('id', `glf${s.getAttribute('id').slice(3)}`);
      window.parent.frames['men'].postMessage(`${SCR.s02}_02`, "*");    }
    if (Ce === 'player' && Cs === 'scrt03') {
      SCR.s03 += 1;
      s.setAttribute('class', 'engulf');
      s.setAttribute('id', `glf${s.getAttribute('id').slice(3)}`);      window.parent.frames['men'].postMessage(`${SCR.s03}_03`, "*");    }
    if (Ce === 'player' && Cs === 'scrt04') {
      SCR.s04 += 1;
      s.setAttribute('class', 'engulf');
      s.setAttribute('id', `glf${s.getAttribute('id').slice(3)}`);      window.parent.frames['men'].postMessage(`${SCR.s04}_04`, "*");

    }
    if (Ce === 'player' && Cs === 'scrt05') {
      SCR.s05 += 1;
      s.setAttribute('class', 'engulf');
      s.setAttribute('id', `glf${s.getAttribute('id').slice(3)}`);      window.parent.frames['men'].postMessage(`${SCR.s05}_05`, "*");    }
    if (Ce === 'player' && Cs === 'scrt06') {
      SCR.s06 += 1;
      s.setAttribute('class', 'engulf');
      s.setAttribute('id', `glf${s.getAttribute('id').slice(3)}`);      window.parent.frames['men'].postMessage(`${SCR.s06}_06`, "*");

    }
    if (Ce === 'player' && Cs === 'scrt07') {
      SCR.s07 += 1;
      s.setAttribute('class', 'engulf');
      s.setAttribute('id', `glf${s.getAttribute('id').slice(3)}`);      window.parent.frames['men'].postMessage(`${SCR.s07}_07`, "*");

    }
    if (Ce === 'player' && Cs === 'scrt08') {
      SCR.s08 += 1;
      s.setAttribute('class', 'engulf');
      s.setAttribute('id', `glf${s.getAttribute('id').slice(3)}`);      window.parent.frames['men'].postMessage(`${SCR.s08}_08`, "*");

    }
    if (Ce === 'player' && Cs === 'scrt09') {
      SCR.s09 += 1;
      s.setAttribute('class', 'engulf');
      s.setAttribute('id', `glf${s.getAttribute('id').slice(3)}`);      window.parent.frames['men'].postMessage(`${SCR.s09}_09`, "*");

    }
  }
}

let U = { x: X('.prtout'), y: Y('.prtout') }//perenosnoy?//NE NAHODIT ESLE NET v HTML

function Starter(V) {
  const L = { x: X(), y: Y() };  const A = { x: V.x, y: V.y };  const pw = 2; //3 move 2
  let cnt = 0;  let u = false;  let r = false;  const O_o = L => {
    let O = { x: U.x - L.x, y: U.y - L.y };    return O;
  }
  let O = { x: 0, y: 0 };
  //--------------------------------------
  function Trail(L) {
    // a(`-------------------------------------`)
    // a(`Trail(L) cnt: ${cnt}`)
    // a(`L: ${Object.values(L)}`)
    // a(`O: ${Object.values(O)}`)
    // a(`V: ${Object.values(V)}`)
    // a(`K: ${Object.values(K)}`)
    // a(`A: ${Object.values(A)}`)

    let e = E(L);    let p = P(L);    let L_;    let _L

    if (e) {
      L_ = { x: L.x + V.x, y: L.y + V.y };      _L = { x: L.x - V.x, y: L.y - V.y };      cnt -= 1

      if (r) {
        SetE(e, _L)
      }
      else { SetE(e, L_) }
    }

    if (u) {
      if (p) {
        if (C(p) === 'prtout') {
          V.x = O.x;          V.y = O.y;        }
        else if (C(p) === 'prtoin') {          V.x = A.x;          V.y = A.y
        }
      }
    }

    L = { x: L.x - V.x, y: L.y - V.y }

    // cnt -= 1
    // if (cnt >= 0) Trail(L)
    if (cnt > 0) Trail(L)
    // a(u)
    u = false;  }

  //--------------------------------------

  function Revers(L) {
    // a(Object.values(L))
    // a('Revers ')

    let L_ = { x: L.x + V.x, y: L.y + V.y };    let _L = { x: L.x - V.x, y: L.y - V.y }
    let e = E(L);    let _e = E(_L);    let e_ = E(L_)
    // a(Object.values(_L))

    if (e && !_e) {
      SetE(e, _L)
    }

    cnt -= 1;    if (cnt >= 0) Revers(L_)
  }
  //--------------------------------------
  function Fokus(L) {

    let e = E(L);    let t = T(L);    let p = P(L)
    // let b = B(L)

    if (e) {

      if (C(e) === 'player') {
        if (p) {          if (C(p) === 'prtoin') {          O = O_o(L);            V.x = O.x;            V.y = O.y
            u = true;          } else if (C(p) === 'prtout') {
            V.x = A.x;            V.y = A.y;
          }
        }
        cnt += 1;        L = { x: L.x + V.x, y: L.y + V.y };        Fokus(L);
      } else if (C(e) === 'revers') {
        L = { x: L.x - V.x, y: L.y - V.y };
        // a(Object.values(L))
        if (!u && cnt <= 1) {//3aplatka! futur power problem!//block prt!!

          Revers(L)
        }
      } else if (C(e) === 'tainer' || C(e) === 'obtain' || C(e) === 'tainpr') {
        if (p) {
          if (C(p) === 'prtoin') {
            O = O_o(L);            V.x = O.x;            V.y = O.y;            u = true

          }
          if (C(p) === 'prtout') {
            V.x = A.x;            V.y = A.y;          }
        }
        cnt += 1;        L = { x: L.x + V.x, y: L.y + V.y };        Fokus(L);      }

    } else {      if (pw >= cnt) {        Trail(L);      } else {
        // a('end')
        u = false;        V.x = A.x;        V.y = A.y
      }
    }
  }

  Fokus(L)

  if (ad) {
    if (ae) {      cloxit();    } else {      opexit();    }
  } else {    if (ae) {      ad = false;    } else {      openall();      ad = true    }
  }

  // ad = ad ? (ae ? (au = au ? cloxit() : false) : (au = au ? true : opexit())) : (ae ? false : openall())
  //au pishet v ad => gluk!!!
  // a(ad)
  // a(au)

  // ae === 0 ? opedor() : false;
  // ae === 0 ? opexit() : false;

}
//------------------------------------------


