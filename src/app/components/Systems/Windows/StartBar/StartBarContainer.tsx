import React from 'react'
import { ANIMATION_DURATION } from "../../../../contantants/constants"

export default function StartBarContainer({children}: {children: JSX.Element}) {
  
  return (
    <div className={`flex gap-6 flex-col items-start justify-end overflow-hidden h-full w-10 hover:w-full delay-400 ${ANIMATION_DURATION}`}>
      {children}
    </div>
  )
}
