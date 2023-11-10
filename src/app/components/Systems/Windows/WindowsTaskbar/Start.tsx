import React, { useContext } from 'react'
import ReactIcon from "../../shared/ReactIcon"
import { CgWindows } from "react-icons/cg"
import { SystemContext } from "@/app/contexts/systemContext";

export default function Start({mouseOver}: {mouseOver?: string}) {
  const { state } = useContext(SystemContext);
  // const isProgramVisible = "start" === state.window.name && state.window.active;
  const isProgramVisible = "start" === mouseOver;
  
  return (
    <ReactIcon
      className={`${mouseOver && isProgramVisible ? "text-sky-500" : ""}`}
      Component={<CgWindows data-testid="start-button" />}
    />
  )
}