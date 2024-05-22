import {
  FC,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import styles from "./input.module.scss";
import { clsx } from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  icon?: {
    element: ReactNode;
    position: "left" | "right";
  };
}

const Input: FC<InputProps> = ({ type, placeholder, icon, ...props }) => {
  return (
    <label
      className={clsx(styles.label, {
        [styles.iconLeft]: icon && icon.position === "left",
        [styles.iconRight]: icon && icon.position === "right",
      })}
    >
      {icon && icon.position === "left" && icon.element}
      <input
        type={type}
        placeholder={placeholder}
        className={clsx(styles.input, {
          [styles.iconLeft]: icon && icon.position === "left",
          [styles.iconRight]: icon && icon.position === "right",
        })}
        {...props}
      />
      {icon && icon.position === "right" && icon.element}
    </label>
  );
};

export default Input;
