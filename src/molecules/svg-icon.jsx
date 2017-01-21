import React from 'react'

/**
 * A generic SVG icon. Pass svg elements, such as `<path>` or `<g>`, to it as children.
 * @tag icon
 * @tag svg
 * @param {number} height The height in pixels
 * @param {number} width The width in pixels
 * @param {string} viewBox The SVG viewbox
 * @param {string} title Accessibility title which will not be visible
 * @example
 * <SvgIcon height={100} width={200} viewBox="0 0 100 100" title="Foobar">
 *   <circle cx="100" cy="100" r="100" />
 * </SvgIcon>
 */
export default function SvgIcon({ children, height, width, viewBox, title }) {
  return (
    <svg height={height} width={width} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      {children}
    </svg>
  )
}

SvgIcon.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element
  ]).isRequired,
  height: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired,
  viewBox: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired
}
