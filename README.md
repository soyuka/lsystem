# lsystem

A simple utility to produce L-System stacks. (16 sloc)

See: https://en.wikipedia.org/wiki/L-system

## Usage:

```
var lsystem = require('lsystem')
/**
 * Koch curve formula:
 * variables : F
 * constants : +-
 * start  : F
 * rules  : (F → F+F−F−F+F)
 */
lsystem(10, rule, 'F')

function rule (v) {
  switch (v) {
    case 'F':
      return 'F+F-F-F+F'
  }

  return v
}
```

## API:

```
lsystem([number of occurences], [rule], [initial data])
```

Output of `node example.js`:

```
Algae
A
AB
ABA
ABAAB
FractalTree
0
1[0]0
11[1[0]0]1[0]0
1111[11[1[0]0]1[0]0]11[1[0]0]1[0]0
Cantor
A
ABA
ABABBBABA
ABABBBABABBBBBBBBBABABBBABA
Koch
F
F+F-F-F+F
F+F-F-F+F+F+F-F-F+F-F+F-F-F+F-F+F-F-F+F+F+F-F-F+F
F+F-F-F+F+F+F-F-F+F-F+F-F-F+F-F+F-F-F+F+F+F-F-F+F+F+F-F-F+F+F+F-F-F+F-F+F-F-F+F-F+F-F-F+F+F+F-F-F+F-F+F-F-F+F+F+F-F-F+F-F+F-F-F+F-F+F-F-F+F+F+F-F-F+F-F+F-F-F+F+F+F-F-F+F-F+F-F-F+F-F+F-F-F+F+F+F-F-F+F+F+F-F-F+F+F+F-F-F+F-F+F-F-F+F-F+F-F-F+F+F+F-F-F+F
Fractal
X
F[-X][X]F[-X]+FX
FF[-F[-X][X]F[-X]+FX][F[-X][X]F[-X]+FX]FF[-F[-X][X]F[-X]+FX]+FFF[-X][X]F[-X]+FX
FFFF[-FF[-F[-X][X]F[-X]+FX][F[-X][X]F[-X]+FX]FF[-F[-X][X]F[-X]+FX]+FFF[-X][X]F[-X]+FX][FF[-F[-X][X]F[-X]+FX][F[-X][X]F[-X]+FX]FF[-F[-X][X]F[-X]+FX]+FFF[-X][X]F[-X]+FX]FFFF[-FF[-F[-X][X]F[-X]+FX][F[-X][X]F[-X]+FX]FF[-F[-X][X]F[-X]+FX]+FFF[-X][X]F[-X]+FX]+FFFFFF[-F[-X][X]F[-X]+FX][F[-X][X]F[-X]+FX]FF[-F[-X][X]F[-X]+FX]+FFF[-X][X]F[-X]+FX
```
