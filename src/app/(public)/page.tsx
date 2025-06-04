import InputLogin from "@/componets/imputs";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.cardLogin}>
        <InputLogin label="Login" />
        <InputLogin type="password" label="Senha" />
      </div>
    </div>
  );
}
