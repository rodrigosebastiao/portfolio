import React from 'react'
import { ICON_SIZE } from "../../../contantants/constants";

interface Props {
  Component: JSX.Element;
  strokeWidth?: number;
  size?: number;
  fitPercent?: number;
  color?: string;
  className?: string;
  fill?: string | undefined;
}

const innerClasses = " cursor-pointer select-none";

export default function ReactIcon({Component, size = ICON_SIZE, strokeWidth = 0, fitPercent = 1, color = "", className = "", fill}: Props) {
  const sizeAdjusted = size * fitPercent;
  const _fill = fill ? {fill: fill} : null;

  return (
    <>
        { React.cloneElement(Component, {size: sizeAdjusted, color: color, strokeWidth, className: className + innerClasses, ..._fill }) }
    </>
  )
}
