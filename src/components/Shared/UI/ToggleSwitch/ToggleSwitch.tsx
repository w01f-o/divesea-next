import { FC, InputHTMLAttributes } from "react";
import styles from "./toggleSwitch.module.scss";

interface ToggleSwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {}

const ToggleSwitch: FC<ToggleSwitchProps> = ({ ...props }) => {
  return (
    <label className={styles.switch}>
      <input type="checkbox" className={styles.input} {...props} />
      <span className={styles.slider}></span>
    </label>
  );
};

export default ToggleSwitch;
