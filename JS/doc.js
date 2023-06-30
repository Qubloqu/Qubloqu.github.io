'use strict'

const

  d = document,

  Q = cls => d.querySelector(`.${cls}`),
  N = n => d.getElementsByName(n),
  I = g => d.getElementById(g),

  c = (t = 'e') => d.createElement(t),
  h = U => m => {U.innerText = m; return U;},
  a = m => {d.body.prepend(h(c())(m));},


  C = e => e.getAttribute('class')