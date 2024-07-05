// import { useGlobalContext } from "@/context/GlobalProvider";
"use client";
import { useAuth } from "@/context/authContext";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import React, { use, useEffect } from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  // const { loading, isLogged } = useGlobalContext();

  // if (!loading && isLogged) {
  //   return revalidatePath("/dashboard");
  // }

  const router = useRouter();
  const { isLogged, loading } = useAuth();
  useEffect(() => {
    if (!loading && isLogged) {
      return router.push("/dashboard");
      // return revalidatePath("/dashboard");
    }
  }, [isLogged, loading]);

  return <div>{children}</div>;
}

export default AuthLayout;
