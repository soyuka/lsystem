var lsystem = require('./')
var a = require('assert')

function Algae(iterations, onnext) {
  return lsystem(rule, iterations, 'A', onnext)

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

var tree = []
function onnext(v) {
  tree.push(v)
}

// a.equal('AB', Algae(2))
// a.equal('AB', Algae(2))
Algae(1, onnext)
a.deepEqual(['A'], tree)
tree = []
Algae(2, onnext)
a.deepEqual(['A', 'AB'], tree)
tree = []
Algae(3, onnext)
a.deepEqual(['A', 'AB', 'ABA'], tree)
