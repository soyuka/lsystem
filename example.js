const lsystem = require('./')

function Algae(num, init = 'A') {
  return lsystem(num, rule, init)

  function rule (v) {
    switch (v) {
      case 'A':
        return 'AB'
      case 'B':
        return 'A'
    }

    return ''
  }
}

output('Algae', Algae(4))

function FractalTree(num, init = '0') {
  return lsystem(num, rule, init)

  function rule (v) {
    switch (v) {
      case '1':
        return '11'
      case '0':
        return '1[0]0'
    }

    return ''
  }
}

output('FractalTree', FractalTree(4))

function Cantor(num, init = 'A') {
  return lsystem(num, rule, init)

  function rule (v) {
    switch (v) {
      case 'A':
        return 'ABA'
      case 'B':
        return 'BBB'
    }

    return ''
  }
}

output('Cantor', Cantor(4))

function Koch(num, init = 'F') {
  return lsystem(num, rule, init)

  function rule (v) {
    switch (v) {
      case 'F':
        return 'F+F-F-F+F'
    }

    return ''
  }
}

output('Koch', Koch(4))

function Fractal(num, init = 'X') {
  return lsystem(num, rule, init)

  function rule (v) {
    switch (v) {
      case 'X':
        return 'F[-X][X]F[-X]+FX'
      case 'F':
        return 'FF'
    }

    return ''
  }
}

output('Fractal', Fractal(4))

function output (title, v) {
  console.log(title)

  for (let i = 0; i < v.length; i++) {
    console.log(v[i])
  }
}
