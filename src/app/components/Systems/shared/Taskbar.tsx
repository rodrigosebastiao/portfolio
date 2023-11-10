import React from 'react'
import { TASKBAR_HEIGHT } from "../../../contantants/constants"

export default function Taskbar({children}: {children: JSX.Element}) {
  return (
    <div
      data-testid="taskbar"
      className={`flex items-center fixed bottom-0 left-0 w-full`}
      style={{height: `${TASKBAR_HEIGHT}px` }}
    >
      {children}
    </div>
  )
}
