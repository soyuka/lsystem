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

  return ''
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
111[0]01[0]0
1111111[0]01[0]0111[0]01[0]0
Cantor
A
ABA
ABABBBABA
ABABBBABABBBBBBBBBABABBBABA
Koch
F
F+F-F-F+F
F+F-F-F+FF+F-F-F+FF+F-F-F+FF+F-F-F+FF+F-F-F+F
F+F-F-F+FF+F-F-F+FF+F-F-F+FF+F-F-F+FF+F-F-F+FF+F-F-F+FF+F-F-F+FF+F-F-F+FF+F-F-F+FF+F-F-F+FF+F-F-F+FF+F-F-F+FF+F-F-F+FF+F-F-F+FF+F-F-F+FF+F-F-F+FF+F-F-F+FF+F-F-F+FF+F-F-F+FF+F-F-F+FF+F-F-F+FF+F-F-F+FF+F-F-F+FF+F-F-F+FF+F-F-F+F
Fractal
X
F[-X][X]F[-X]+FX
FFF[-X][X]F[-X]+FXF[-X][X]F[-X]+FXFFF[-X][X]F[-X]+FXFFF[-X][X]F[-X]+FX
FFFFFFF[-X][X]F[-X]+FXF[-X][X]F[-X]+FXFFF[-X][X]F[-X]+FXFFF[-X][X]F[-X]+FXFFF[-X][X]F[-X]+FXF[-X][X]F[-X]+FXFFF[-X][X]F[-X]+FXFFF[-X][X]F[-X]+FXFFFFFFF[-X][X]F[-X]+FXF[-X][X]F[-X]+FXFFF[-X][X]F[-X]+FXFFF[-X][X]F[-X]+FXFFFFFFF[-X][X]F[-X]+FXF[-X][X]F[-X]+FXFFF[-X][X]F[-X]+FXFFF[-X][X]F[-X]+FX
```
