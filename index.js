module.exports = desvg

/**
 * @name desvg
 * @summary Generate component using passed svg-loader output.
 *
 * @description
 * Generate component using passed svg-loader output.
 *
 * @param {Function} h
 * The helper function (e.g. `React.createElement` or Preact's `h`).
 *
 * @param {Object} svg
 * The svg-loader output.
 *
 * @returns {Object}
 * The generated component.
 *
 * @example
 * import { createElement } from 'react'
 * import svgContent from './icon.svg'
 * import desvg from 'desvg'
 *
 * // Basic usage
 * const Icon = desvg(createElement, svgContent)
 * <Icon fill='currentColor' />
 * //=> <svg fill='currentColor' ...>...</svg>
 */
function desvg (h, svg) {
  var content = svg.content
  var attributes = svg.attributes

  return function (props) {
    return h(
      'svg',
      Object.assign(
        { dangerouslySetInnerHTML: { __html: content } },
        attributes,
        props
      )
    )
  }
}
