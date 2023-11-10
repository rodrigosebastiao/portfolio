import React, { useContext } from 'react'
import { SystemContext } from "@/app/contexts/systemContext"
import StartBar from "../StartBar";
import { TASKBAR_HEIGHT } from "../../../../contantants/constants";
import { ANIMATION_DURATION } from "../../../../contantants/constants"

export default function MainMenu() {
  const { state } = useContext(SystemContext);

  
  return (
    <div 
      className={`
        MAIN-MENU fixed flex left-0 overflow-hidden ease-in-out transition-[height, max-height] w-[55vw]
        ${ANIMATION_DURATION}  
        ${state.window.name === "start" && state.window.active ? 'h-full max-h-[60vh]' : 'max-h-0'}
      `}
      style={{...state.theme, bottom: `${TASKBAR_HEIGHT}px` }}
    >
      <StartBar />
    </div>
  )
}
