import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styles from "./button.module.scss";
import { clsx } from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  children?: ReactNode;
  width?: "full" | "auto";
  background: "white" | "black";
  noneUppercase?: boolean;
}

const Button: FC<ButtonProps> = ({
  title,
  type,
  width,
  children,
  background,
  noneUppercase,
  ...props
}) => {
  return (
    <button
      title={title}
      type={type || "button"}
      className={clsx(styles.button, {
        [styles.white]: background === "white",
        [styles.black]: background === "black",
        [styles.fullWidth]: width === "full",
        [styles.nonUppercase]: noneUppercase,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
