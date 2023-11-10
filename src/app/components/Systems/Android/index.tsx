import React from 'react'
import AndroidTaskbar from "./AndroidTaskbar"
import Taskbar from "./../shared/Taskbar"
import Window from "../shared/Window"
import MainMenu from "../Windows/MainMenu"

export default function Android() {
  return (
    <>
      <title>Android</title>
      <link rel="icon" href="favicon-android.png" type="image/png" />
      
      <Window>
        <MainMenu />
      </Window>
      
      <Taskbar>
        <AndroidTaskbar />
      </Taskbar>
    </>
  )
}
