const lsystem = require('./')

function Algae(iterations, init = 'A') {
  return lsystem(rule, iterations, init)

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

function FractalTree(iterations, init = '0') {
  return lsystem(rule, iterations, init)

  function rule (v) {
    switch (v) {
      case '1':
        return '11'
      case '0':
        return '1[0]0'
    }

    return v
  }
}

output('FractalTree', FractalTree(4))

function Cantor(iterations, init = 'A') {
  return lsystem(rule, iterations, init)

  function rule (v) {
    switch (v) {
      case 'A':
        return 'ABA'
      case 'B':
        return 'BBB'
    }

    return v
  }
}

output('Cantor', Cantor(4))

function Koch(iterations, init = 'F') {
  return lsystem(rule, iterations, init)

  function rule (v) {
    switch (v) {
      case 'F':
        return 'F+F-F-F+F'
    }

    return v
  }
}

output('Koch', Koch(4))

function Fractal(iterations, init = 'X') {
  return lsystem(rule, iterations, init)

  function rule (v) {
    switch (v) {
      case 'X':
        return 'F[-X][X]F[-X]+FX'
      case 'F':
        return 'FF'
    }

    return v
  }
}

output('Fractal', Fractal(4))

function output (title, v) {
  console.log(title)
  console.log(v)
}
