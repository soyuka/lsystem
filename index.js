module.exports = root

// https://en.wikipedia.org/wiki/L-system
function noop () {}

function root (rule, iterations, init, onnext = noop) {
  var stack = init
  onnext(init)
  while(--iterations) {
    stack = grow(stack, rule)
    onnext(stack)
  }

  return stack
}

function grow (tree, rule) {
  var res = ''
  for (let i = 0; i < tree.length; i++) {
    res += rule(tree[i])
  }

  return res
}
