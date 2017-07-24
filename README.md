# desvg

**desvg** converts SVG files into React/Preact components.
It inlines SVG source so that you can alter it (animate, set color,
control size, etc.).

![](https://d3vv6lp55qjaqc.cloudfront.net/items/443d1R2G0J3i3v1W0D3W/desvg.png)

## Installation

If you want to use desvg with **webpack**, install [desvg-loader] and [svg-loader]:

```bash
npm install desvg-loader svg-loader --save-dev
# or
yarn add --dev desvg-loader svg-loader
```

To use the low-level API, or to manage the core library version, install `desvg`:

```bash
npm install @kossnocorp/desvg --save
# or
yarn add @kossnocorp/desvg
```

## Configuration

```js
// ...
{
  test: /\.svg$/,
  use: [
    'desvg/react', // 👈 Add loader (use 'desvg/preact' for Preact)
    'svg' // 👈 svg-loader must precede desvg-loader
  ],

  // or if you prefer classic:

  loader: 'desvg/react!svg'
},
// ...
```

## Usage

See [low-level API docs](https://github.com/kossnocorp/desvg/blob/master/index.js) for more implementation details.

### React

```javascript
import React from 'react'
import WarningIcon from './icon.svg'

export default function () {
  return (
    <div>
      <WarningIcon fill='yellow' width='32px' />
      Warning, this is a warning!
    </div>
  )
}
```

### Preact

```javascript
import { h } from 'preact'
import WarningIcon from './icon.svg'

export default function () {
  return (
    <div>
      <WarningIcon fill='yellow' width='32px' />
      Warning, this is a warning!
    </div>
  )
}
```

## Related

- [decss]: the source of inspiration.
- [defile]: converts anything to components.
- [desvg-loader]: desvg webpack loader source code.
- [svg-loader]: SVG loader.

## License

[MIT © Sasha Koss](https://kossnocorp.mit-license.org/)

[desvg-loader]: https://github.com/kossnocorp/desvg-loader
[svg-loader]: https://github.com/dolbyzerr/svg-loader
[decss]: https://github.com/kossnocorp/decss
[defile]: https://github.com/kossnocorp/defile
