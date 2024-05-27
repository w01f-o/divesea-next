import { FC, ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalBodyProps {
  children: ReactNode;
}

const ReactPortal: FC<ModalBodyProps> = ({ children }) => {
  const portalRootRef = useRef(document.getElementById("portal-root"));

  useEffect(() => {
    const modalRoot = portalRootRef.current;
    if (!modalRoot) {
      throw new Error("No modal-root exists!");
    }
  }, []);

  return createPortal(children, portalRootRef.current!);
};

export default ReactPortal;
