'use client'
import InputLogin from "@/componets/imputs";
import styles from "./page.module.css";

import Form from "next/form";
import { useActionState } from "react";
import loginAction from "./loginAction";
import { redirect } from "next/navigation";


export default function Home() {
  const [state, formaAction, isPending] = useActionState(loginAction, null);

  
if (state?.susses === true){
  redirect('/dashboard')
}

  return (
    <div className={styles.page}>
      <div className={styles.cardLogin}>
        <Form action={formaAction}>
          <InputLogin name="login" label="Login" />
          <InputLogin name="password" type="password" label="Senha" />
          <button disabled= {isPending}  type="submit">Login</button>
        </Form>
      </div>
    </div>
  );
}
