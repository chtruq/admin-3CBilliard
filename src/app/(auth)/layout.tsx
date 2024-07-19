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
  const { isLogged, loading, user } = useAuth();
  console.log(isLogged, loading, user);
  useEffect(() => {
    if (!loading && isLogged && user?.data.role === "Admin") {
      return router.push("/dashboard");
    }
  }, [isLogged, loading]);

  return <div>{children}</div>;
}

export default AuthLayout;
