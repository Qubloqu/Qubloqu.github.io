'use strict'

function resizeGrd() {
  let str_clmn = getComputedStyle(grd)['grid-template-columns']
  let str_rws = getComputedStyle(grd)['grid-template-rows']
  // a(str_rws)
  // a(str_clmn)
  let Xlen = str_clmn.match(/px/g).length-2
  let Ylen = str_rws.match(/px/g).length-2

  // a (d.body.clientWidth / d.body.clientHeight)
  // let w = grd.clientWidth/Xlen-50
  // let h = grd.clientHeight/Ylen-50
  let w = (grd.clientWidth-50)/Xlen
  let h = (grd.clientHeight-50)/Ylen

  let dim = w > h ? h : w
  // a(dim)

  // let width = Math.floor(dim*Xlen)
  // let height = Math.floor(dim*Ylen)
  let width = dim*Xlen+50
  let height = dim*Ylen+50
  grd.setAttribute('style', `width: ${width}px; height: ${height}px`);

}