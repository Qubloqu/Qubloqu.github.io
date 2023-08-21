'use strict'

function eveZeigen(eve) {
  // a(`target ${C(eve.target)} ${eve.clientX} ${eve.clientY}`);
  //--------------------------

  // a(getComputedStyle(grd).width)
  // a(I('grd').style['width'])

  let
    wS = getComputedStyle(grd)['grid-template-rows'].slice(0, 7),
    hS = getComputedStyle(grd)['grid-template-columns'].slice(0, 7)

  function dvFx(x) {
    return (Math.floor(x / hS * 1) + 1)
  }

  function dvFy(y) {
    return (Math.floor(y / wS * 1) + 1)
  }

  let e = I(`_${dvFy(eve.clientY)}_${dvFx(eve.clientX)}`)

  function getCls(e) {

    switch (C(e)) {
      case 'xblock': return 'tainer';
      case 'tainer': return 'revers';
      case 'revers': return 'border';
      case 'border': e.remove();
        break;
      default:
        break;
    }
  }
  let div = d.createElement('div')

  if (e) {
    let cls = getCls(e);
    e.setAttribute('class', `${cls}`)
    if (cls === 'target') {e.setAttribute('id', `trg_${dvFy(eve.clientY)}_${dvFx(eve.clientX)}`)}
    else{e.setAttribute('id', `_${dvFy(eve.clientY)}_${dvFx(eve.clientX)}`)};
  } else {

    div.className = 'xblock'
    div.style['grid-area'] = `${dvFy(eve.clientY)} / ${dvFx(eve.clientX)}`
    div.setAttribute('id', `_${dvFy(eve.clientY)}_${dvFx(eve.clientX)}`);
    grd.prepend(div);
  }
}
function eveZeigenR(eve) {
  eve.preventDefault();
  let
    wS = getComputedStyle(grd)['grid-template-rows'].slice(0, 7),
    hS = getComputedStyle(grd)['grid-template-columns'].slice(0, 7)

  function dvFx(x) {
    return (Math.floor(x / hS * 1) + 1)
  }

  function dvFy(y) {
    return (Math.floor(y / wS * 1) + 1)
  }

  let e = I(`trg_${dvFy(eve.clientY)}_${dvFx(eve.clientX)}`)

  function getCls(e) {

    switch (C(e)) {
      case 'target': return 'fliper';
      case 'fliper': return 'prtout';
      case 'prtout': return 'prtoin';
      case 'prtoin': e.remove();
        break;
      default:
        break;
    }
  }
  let div = d.createElement('div')

  if (e) {
    let cls = getCls(e);
    e.setAttribute('class', `${cls}`)
    e.setAttribute('id', `trg_${dvFy(eve.clientY)}_${dvFx(eve.clientX)}`)
    
  } else {

    div.className = 'target'
    div.style['grid-area'] = `${dvFy(eve.clientY)} / ${dvFx(eve.clientX)}`
    div.setAttribute('id', `trg_${dvFy(eve.clientY)}_${dvFx(eve.clientX)}`);
    grd.prepend(div);
  }
}