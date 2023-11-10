import Android from "../Android";
import Windows from "../Windows";


export type Systems = "Windows" | "Android";

export const SYSTEMS = {
  Windows: {
    name: "Windows",
    component: <Windows />,
  },
  Android: {
    name: "Android",
    component: <Android />,
  },
} as const;
