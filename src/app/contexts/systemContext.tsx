import {initialState, ReducerAction } from "@/app/stores/systemReducer";
import { createContext } from "react";


export const SystemContext = createContext({
  state: initialState,
  dispatch: (() => undefined) as React.Dispatch<ReducerAction>,
});
