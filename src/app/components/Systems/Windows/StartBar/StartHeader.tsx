import React from 'react'
import SegoeIcon from "../../shared/SegoeIcon"
import IconText from "./IconText"
import MenuItem from "../../shared/MenuItem"


export default function StartHeader() {
  return (
    <div className="flex-grow">
      <MenuItem>
        <SegoeIcon code="E700" fitPercent={0.6} />
        <IconText><span className="font-bold">START</span></IconText>
      </MenuItem>
    </div>
  )
}