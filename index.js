module.exports = doTree

// https://en.wikipedia.org/wiki/L-system
function doTree (num, rule, init) {
  var stack = [init]
  var cursor = 0
  while(--num) {
    stack.push(grow(stack[cursor], rule))
    cursor++
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
