import test from 'ava'
import desvg from '.'

const passArgs = (...whatever) => whatever
const svg = {
  content: '<svg><path /></svg>',
  attributes: { fill: 'currentColor' }
}

test('it generates svg component with proper inner HTML and props', t => {
  const Component = desvg(passArgs, svg)
  const [tag, props] = Component()
  t.true(tag === 'svg')
  t.deepEqual(props, {
    fill: 'currentColor',
    dangerouslySetInnerHTML: { __html: '<svg><path /></svg>' }
  })
})

test('it passes extra props to the tag element', t => {
  const Component = desvg(passArgs, svg)
  const args = Component({ a: 1, b: 2 })
  t.deepEqual(args, [
    'svg',
    {
      fill: 'currentColor',
      dangerouslySetInnerHTML: { __html: '<svg><path /></svg>' },
      a: 1,
      b: 2
    }
  ])
})
