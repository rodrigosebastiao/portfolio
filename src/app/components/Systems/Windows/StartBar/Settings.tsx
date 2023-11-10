import React from 'react'
import SegoeIcon from "../../shared/SegoeIcon"
import IconText from "./IconText"
import MenuItem from "../../shared/MenuItem"

export default function Settings() {
  return (
    <MenuItem>
      <SegoeIcon code="E713" fitPercent={0.6} />
      <IconText>Settings</IconText>
    </MenuItem>
  )
}