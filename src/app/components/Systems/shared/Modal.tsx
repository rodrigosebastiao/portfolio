import ReactDOM from "react-dom";
import { useEffect, useRef } from "react";

export function Modal({ children }: React.PropsWithChildren) {
  const modalRootRef = useRef<Element | null>(null);

  useEffect(() => {
    modalRootRef.current = document.getElementById("modal") as HTMLElement;
  }, []);

  return <>{modalRootRef.current && ReactDOM.createPortal(<div>{children}</div>, modalRootRef.current)}</>;
};
