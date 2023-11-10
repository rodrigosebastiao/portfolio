export type Window = {
  name: string,
  active?: boolean,
}

export type Program = {
  name: string,
  open?: boolean,
}

export type Systems = "Windows" | "Android";


export const initialState = {
  system: "Windows" as Systems,
  welcomeScreen: false,
  cortana: false,
  taskView: false,
  spotify: false,
  window: {
    name: "",
    active: false,
  } as Window,
  program: {
    name: "",
    open: false,
  },
  programs: [] as Program[],
  theme: {
    color: "#fff",
    backgroundColor: "#000",
    filter: `opacity(0.9)`,
    backdropFilter: `blur(2px)`,
  },
}
export type StateType = typeof initialState;

export type Payload = any;
export type ReducerAction = { type: string; payload?: Payload };

export const BOOT_SYSTEM = "BOOT_SYSTEM";
export const WELCOME_COMPLETE = "WELCOME_COMPLETE";
export const TOGGLE_CORTANA = "TOGGLE_CORTANA";
export const TOGGLE_TASK_VIEW = "TOGGLE_TASK_VIEW";
export const TOGGLE_SPOTIFY = "TOGGLE_SPOTIFY";
export const TOGGLE_WINDOW = "TOGGLE_WINDOW";
export const OPEN_PROGRAM = "OPEN_PROGRAM";


export const systemReducer = (state = initialState, action: ReducerAction) => {
  const program = action?.payload as Program;
  const window = action?.payload as Window;

  switch(action.type){
    case BOOT_SYSTEM:
      return { ...state, system: action.payload };

    case WELCOME_COMPLETE:
      return { ...state, welcomeScreen: action.payload };

    case TOGGLE_WINDOW:
      if(window.name === state.window.name){
        return { ...state, window: {...action.payload, active: !state.window.active } };
      } else {
        return { ...state, window: {...action.payload, active: true } };
      }

    case OPEN_PROGRAM:
      const programNotOpen = !(state.programs.some(item => item.name === program.name));
      
      if(programNotOpen){
        return {...state, programs: [...state.programs, program]};
      }
      return state;

    default:
      return state;
  }
}
