import { Dispatch, FC, SetStateAction, MouseEvent, ReactNode } from "react";
import styles from "./modal.module.scss";
import { animated, useTransition } from "@react-spring/web";
import ReactPortal from "@/components/ReactPortal/ReactPortal";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, setIsOpen, children }) => {
  const transition = useTransition(isOpen, {
    from: { opacity: 0, x: 10 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: 10 },
    config: { duration: 100 },
  });

  return transition(
    (props, item) =>
      item && (
        <ReactPortal>
          <animated.div
            style={props}
            className={styles.modal}
            onMouseDown={() => setIsOpen(false)}
          >
            <div
              className={styles.content}
              onMouseDown={(e: MouseEvent<HTMLDivElement>) =>
                e.stopPropagation()
              }
            >
              {children}
            </div>
          </animated.div>
        </ReactPortal>
      ),
  );
};

export default Modal;
