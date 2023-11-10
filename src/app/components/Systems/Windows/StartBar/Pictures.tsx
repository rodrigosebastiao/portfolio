import React from 'react'
import ReactIcon from "../../shared/ReactIcon"
import { SlPicture } from "react-icons/sl"
import IconText from "./IconText"
import MenuItem from "../../shared/MenuItem"

export default function User() {
  return (
    <MenuItem>
      <ReactIcon 
        fitPercent={0.6}
        Component={<SlPicture />}
      />
      <IconText>Pictures</IconText>
    </MenuItem>
  )
}