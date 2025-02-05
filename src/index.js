import React from 'react';
import classnames from 'classnames';

const calculateSize = size => {
  if (/^[1-9]+[0-9]*]*$/.test(size.toString())) {
    size += 'px';
  }
  return size;
};

const calculateType = (prefixType, prefix, colorful) => {
  if (prefix === 'icon-' || prefix === '') {
    return (colorful ? 'icon-color-' : 'icon-') + prefixType.replace(/^icon-(color-)?/, '');
  }
  return prefix + prefixType;
};

const Iconfont = ({ type, colorful = false, className, size, style, prefix = '', ...other }) => {
  const fontClass = calculateType(type, prefix, colorful),
    computedClassName = classnames(
      className,
      {
        iconfont: !colorful,
        'iconfont--color': colorful
      },
      fontClass
    ),
    computedStyle = Object.assign({}, style, size ? { fontSize: calculateSize(size) } : {});
  return colorful ? (
    <svg {...other} className={computedClassName} style={computedStyle}>
      <use xlinkHref={`#${fontClass}`} style={{ pointerEvents: 'none' }} />
    </svg>
  ) : (
    <i {...other} className={computedClassName} style={computedStyle} />
  );
};

export default Iconfont;
