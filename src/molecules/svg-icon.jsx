import React from 'react';

export default function SvgIcon({ children, height, width, viewBox, title }) {
  return (
    <svg height={height} width={width} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      {children}
    </svg>
  );
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
};
