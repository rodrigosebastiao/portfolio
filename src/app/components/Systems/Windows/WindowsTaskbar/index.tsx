import React, { useContext, useState } from 'react'
import Start from "./Start"
import TaskView from "./TaskView"
import Cortana from "./Cortana"
import Spotify from "../../shared/Spotify"
import { SystemContext } from "@/app/contexts/systemContext"
import { TASKBAR_HEIGHT } from "../../../../contantants/constants"
import { OPEN_PROGRAM, TOGGLE_WINDOW } from "@/app/stores/systemReducer"


interface ComponentItem {
  name: string,
  component: JSX.Element,
  openMark: boolean
}


const componentList: ComponentItem [] = [
  {
    name: "start",
    component: <Start />,
    openMark: false,
  },
  {
    name: "cortana",
    component: <Cortana />,
    openMark: false,
  },
  {
    name: "taskview",
    component: <TaskView />,
    openMark: false,
  },
  {
    name: "spotify",
    component: <Spotify />,
    openMark: true,
  },
];


export default function WindowsTaskbar() {
  const { state, dispatch } = useContext(SystemContext);
  const [mouseOver, setMouseOver] = useState("");


  const handleActiveProgram = (name: string) => {
    dispatch({type: OPEN_PROGRAM, payload: {name: name,  open: true} });
    dispatch({type: TOGGLE_WINDOW, payload: {name: name} });
  }


  return (
    <nav 
      className={`TASKBAR flex items-center gap-0 w-full h-[${TASKBAR_HEIGHT}px]`} 
      style={{...state.theme, height: `${TASKBAR_HEIGHT}px`}}
    >
      {
        componentList.map(({component, name, openMark}, index) => {
          const isProgramOpen = state.programs.some(item => item.name === name && item.open);
          const isProgramVisible = name === state.window.name && state.window.active;

          return (
            <div 
                key={index}
                className={`
                  flex items-center justify-center whitespace-nowrap cursor-pointer select-none w-[50px] h-full hover:bg-gray-100/[0.2] 
                  border-solid border-b-[3px]
                  ${isProgramOpen && openMark ? " border-sky-300" : "border-transparent"}
                  ${isProgramVisible ? "bg-gray-100/[0.2]" : ""}
                `}
                onClick={ ()=> {handleActiveProgram(name);} }
                onMouseEnter={()=>setMouseOver(name)}
                onMouseLeave={()=>setMouseOver("")}
              >
              {React.cloneElement(component, {mouseOver: mouseOver})}
            </div>
          )
          }
        )
      }
    </nav>
  )
}