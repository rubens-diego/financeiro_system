"use server";

import { auth, signIn } from "../../../auth";
 

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function loginAction(_prevState: any, formData: FormData) {
  try {
    console.log(
      formData.get("login") as string,
      formData.get("password") as string
    );

    await signIn("credentials", {
      email: formData.get("login") as string,
      password: formData.get("password") as string,
      redirect: false,
      redirectTo: "",
    });

    const aut = await auth();

    if (aut) {
      return {
        susses: true,
      };
    } else {
      return {
        susses: false,
        message: "login negado",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      susses: false,
      message: "login negado",
    };
  }
}
