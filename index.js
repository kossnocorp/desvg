module.exports = desvg

function desvg (h, svg, props) {
  props = props || {}

  var content = svg.content
  var attributes = svg.attributes

  return function (props) {
    return h(
      'svg',
      Object.assign(
        { dangerouslySetInnerHTML: { __html: content } },
        attributes,
        props
      ),
      props && props.children
    )
  }
}
