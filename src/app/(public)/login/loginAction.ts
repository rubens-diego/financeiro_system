"use server";

import { signIn } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";



export default async function loginAction(_prevState: any, formData: FormData) {
  

  try {
    

    await signIn("credentials", {
      email: formData.get("login") as string,
      password: formData.get("password") as string,
      redirect: true,
      redirectTo: "/dashboard",
    });

  } catch (error : any) {

if (isRedirectError(error)){
  throw error
}

   

    if (  error.type === 'CredentialsSignin')
    return {
      susses: false,
      message: "login negado",
    };
  }

}