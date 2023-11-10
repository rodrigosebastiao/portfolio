import { SystemContext } from "@/app/contexts/systemContext";
import { WELCOME_COMPLETE } from "@/app/stores/systemReducer";
import React, { useCallback, useContext, useEffect } from 'react'
import { Modal } from "./Modal";

export default function Window({children}: {children: JSX.Element}) {
  const { state, dispatch } = useContext(SystemContext);

  
  const handleWelcomeScreen = useCallback(() => {
    dispatch({type: WELCOME_COMPLETE, payload: true});
  }, [dispatch]);

  useEffect(() => {
    handleWelcomeScreen()
  }, [handleWelcomeScreen]);
   

  return (
    <div
        data-test="Window" 
        className={`absolute inset-0 h-full w-full ease-out duration-[3000ms] ${state.welcomeScreen ? 'opacity-100' : 'opacity-0'}`}
      >
      <Modal>
        {children}
      </Modal>
    </div>
  )
}