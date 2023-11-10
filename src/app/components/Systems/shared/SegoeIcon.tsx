import React from 'react'
import { FontFaceComponent } from "./FontFaceComponent"
import { ICON_COLOR, ICON_SIZE } from "../../../contantants/constants";

interface Props {
  code: string;
  size?: number;
  fitPercent?: number;
  color?: string;
  className?: string;
}

const innerClass = " cursor-pointer select-none";

export default function SegoeIcon({code, size = ICON_SIZE, fitPercent = 1, color = ICON_COLOR, className}: Props) {
  const sizeAdjusted = size * fitPercent;

  return (
    <FontFaceComponent font="Segoe MDL2 Assets" code={code} name="Task View" color={color} size={sizeAdjusted} className={className + innerClass}/>
  )
}
