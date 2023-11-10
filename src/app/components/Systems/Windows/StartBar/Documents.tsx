import React from 'react'
import IconText from "./IconText"
import SegoeIcon from "../../shared/SegoeIcon"
import MenuItem from "../../shared/MenuItem"

export default function User() {
  return (
    <MenuItem>
      <SegoeIcon code="E7E8" fitPercent={0.7} />
      <IconText>Documents</IconText>
    </MenuItem>
  )
}