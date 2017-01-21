import React from 'react'
import SvgIcon from './svg-icon'

/**
 * The main Mavenlink logo
 * @tag icon
 * @tag svg
 * @example
 * <BrandLogo size="200" />
 */
export default function BrandLogo({ size }) {
  return (
    <SvgIcon height={size} width={size} title="Mavenlink Logo" viewBox="0 0 166 120">
      <path
        fill="#448FEA"
        d={['M162.7,110.9L132.8,6.6c-0.4-1.4-1.5-2.6-3.1-3.2c-1.4-0.6-3.6-0.4-5.1,0.9L82.6,41.1l-42-',
          '36.7c-1.1-1-2.8-1.7-4.7-1.2c-2.1,0.6-3.2,2.2-3.6,3.7l-29.8,104c-0.4,1.4-0.3,3.5,1.1,4.9c1',
          '.2,1.2,2.8,2,4.8,1.6l74.3-14l74.4,14c1.9,0.3,3.6-0.5,4.6-1.5C163,114.3,163.1,112.5,162.7,',
          '110.9z M115.4,23.6l-16,32.2L89,46.7L115.4,23.6z M76.2,46.7l-10.4,9.1l-16-32.1L76.2,46.7z ',
          'M37.7,18.3l21.5,43.3L14,101.1L37.7,18.3z M20.6,106.5l42.5-37.2L76.4,96L20.6,106.5z M69.7,',
          '63.6l12.9-11.3l12.9,11.3l-12.9,26L69.7,63.6z M88.8,96l13.3-26.7l42.6,37.2L88.8,96z M106,6',
          '1.5l21.5-43.2l23.6,82.6L106,61.5z'].join('')}
      />
    </SvgIcon>
  )
}

BrandLogo.propTypes = {
  size: React.PropTypes.number.isRequired
}
