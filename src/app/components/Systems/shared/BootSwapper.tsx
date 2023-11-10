"use client"

import React, { useContext } from 'react'
import { BOOT_SYSTEM } from "@/app/stores/systemReducer";
import { SystemContext } from "@/app/contexts/systemContext";
import { SYSTEMS } from "./Systems";


export default function BootSwapper() {
  const { state, dispatch } = useContext(SystemContext);

  return (
    <ul className="system-selector cursor-pointer">
      {Object.keys(SYSTEMS).map(((system)=>
        <li 
          key={system}
          className={`${system === state.system ? "font-bold" : "font-normal"}`}
          onClick={ ()=> dispatch({type: BOOT_SYSTEM, payload: system}) }
        >
          {system}
        </li>
        ))}
    </ul>
  )
}
