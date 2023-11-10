import React from 'react'
// import Taskbar from "./../shared/Taskbar"
// import WindowsTaskbar from "./WindowsTaskbar"
import Window from "../shared/Window"
import MainMenu from "./MainMenu"
import Test from "../shared/Test"

export default function Windows() {
  return (
    <>
      <title>Windows</title>
      <link rel="icon" href="favicon-windows.png" type="image/png" />
      
      <Window>
        <MainMenu />
      </Window>
      
      {/* <Taskbar>
        <WindowsTaskbar />
      </Taskbar> */}
      <Test />
    </>
  )
}
