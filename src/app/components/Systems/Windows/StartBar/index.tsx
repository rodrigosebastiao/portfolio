import React from 'react'
import Power from "./Power";
import Settings from "./Settings";
import User from "./User";
import StartHeader from "./StartHeader";
import StartBarContainer from "./StartBarContainer";
import Pictures from "./Pictures";

export default function StartBar() {
  
  return (
    <StartBarContainer>
      <div 
        data-test="start-bar"
        className="flex justify-end gap-8 flex-col py-4 h-full"
      >
        <StartHeader />
        
        <User />
        <Settings />
        <Pictures />
        <Power />
      </div>
    </StartBarContainer>
  )
}
