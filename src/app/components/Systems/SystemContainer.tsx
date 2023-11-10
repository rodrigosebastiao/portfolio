"use client"

import React, { useReducer } from 'react'
import { systemReducer, initialState } from "@/app/stores/systemReducer";
import { SystemContext } from "@/app/contexts/systemContext";
import { SYSTEMS, Systems } from "./shared/Systems";


export default function SystemContainer() {
  const [state, dispatch] = useReducer(systemReducer, initialState);
  const activeSystem = SYSTEMS[state.system as Systems];

  return (
    <SystemContext.Provider value={{state, dispatch}}>
      {activeSystem.component}
    </SystemContext.Provider>
  )
}
