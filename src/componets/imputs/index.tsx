import React, { InputHTMLAttributes } from 'react'
import styles from "./imput.module.css";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
const InputLogin = ({ label, ...rest }: IInput) => {
  return (
    <div className= {styles.container}>
      <label className={styles.label} >{label}</label>
      <input className={styles.inputComponent} {...rest} />
    </div>
  )
}

export default InputLogin
