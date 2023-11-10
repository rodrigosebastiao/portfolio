import React from 'react'
import ReactIcon from "../../shared/ReactIcon"
import { AiOutlineUser } from "react-icons/ai"
import IconText from "./IconText"
import MenuItem from "../../shared/MenuItem"

export default function User() {
  return (
    <MenuItem>
      <span className="flex items-center justify-center rounded-full bg-neutral-200 w-5 h-5">
        <ReactIcon
          fill="text-slate-500"
          fitPercent={0.6}
          Component={<AiOutlineUser />}
        />
      </span>
      <IconText>Rodrigo Sebastião</IconText>
    </MenuItem>
  )
}