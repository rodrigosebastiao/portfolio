import React, { useContext, useState } from 'react'
import SegoeIcon from "../../shared/SegoeIcon"
import IconText from "./IconText"
import MenuItem from "../../shared/MenuItem"
import { SystemContext } from "@/app/contexts/systemContext";

export default function Power() {
  const { state } = useContext(SystemContext);
  const [power, setPower] = useState(false);

  const PowerOptions = () => (
    <div 
      className={`px-4 fixed left-0 bottom-10 ${power? 'block' : 'hidden'}`}
      style={{...state.theme}}
    >
      <ul>
        <li>
          <SegoeIcon code="E708" fitPercent={0.6} />
          <IconText>Sleep</IconText>
        </li>
        <li>
          <SegoeIcon code="E7E8" fitPercent={0.6} />
          <IconText>Shutdown</IconText>
        </li>
        <li>
          <SegoeIcon code="E777" fitPercent={0.6} />
          <IconText>Restart</IconText>
        </li>
      </ul>
    </div>
  );
  
  return (
    <MenuItem>
      <div
        className="relative"
        onClick={()=> setPower(prevState => !prevState)}>
        <SegoeIcon code="E7E8" fitPercent={0.6} />
        <IconText>Power</IconText>
        <PowerOptions />
      </div>
    </MenuItem>
  )
}