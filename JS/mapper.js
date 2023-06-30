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

  let e = N(`${dvFy(eve.clientY)} / ${dvFx(eve.clientX)}`)[0] || N(`trg ${dvFy(eve.clientY)} / ${dvFx(eve.clientX)}`)[0]

  function getCls(e) {

    switch (C(e)) {
      case 'xblock': return 'tainer';
      case 'tainer': return 'target';
      case 'target': return 'revers';
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
    if (cls === 'target') {e.setAttribute('name', `trg ${dvFy(eve.clientY)} / ${dvFx(eve.clientX)}`)}
    else{e.setAttribute('name', `${dvFy(eve.clientY)} / ${dvFx(eve.clientX)}`)};
  } else {

    div.className = 'xblock'
    div.style['grid-area'] = `${dvFy(eve.clientY)} / ${dvFx(eve.clientX)}`
    div.setAttribute('name', `${dvFy(eve.clientY)} / ${dvFx(eve.clientX)}`);
    grd.prepend(div);
  }
}