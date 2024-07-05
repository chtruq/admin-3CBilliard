"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { revalidatePath } from "next/cache";
import { on } from "events";
import { toast } from "../ui/use-toast";
import { signInTo3C } from "@/app/actions/user";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";

function SignInComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setIsLogged } = useAuth();

  const onSignIn = async () => {
    console.log(email, password);

    try {
      const response = await signInTo3C(email, password);
      console.log(response);
      if (response) {
        localStorage.setItem("token", response.token);
        setIsLogged(true);
        toast({
          title: "Đăng nhập thành công",
          description: "Chào mừng bạn đến với 3C Billiard",
        });
        router.replace("/dashboard");
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Đăng nhập thất bại",
        description: "Vui lòng kiểm tra lại thông tin đăng nhập",
      });
    }
  };

  return (
    <div>
      <div className="bg-[url('/assets/image/bg_hero.png')]">
        <div className="grid grid-cols-10 w-full h-dvh">
          <div className="flex flex-col justify-center items-center col-span-6 ">
            <Image
              src="/assets/image/3C-Icon.png"
              alt="logo"
              width={250}
              height={100}
              className="m-2 w-50 h-50"
            />
            <p className="text-2xl font-semibold m-1">Connect-Cue-Community</p>
            <p className="text-2xl font-semibold m-1">3C Billiard</p>
          </div>
          <div className="flex flex-col justify-center items-center col-span-4">
            <div className=" bg-[#FFFFFF] py-40 px-16 drop-shadow-xl rounded-lg">
              <p className="text-2xl text-center">Đăng nhập</p>
              <div>
                <Input
                  placeholder="Nhập tên tài khoản"
                  type="email"
                  className="m-4 w-80 h-10 rounded-xl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <Input
                  placeholder="Nhập mật khẩu"
                  type="password"
                  className="m-4 w-80 h-10 rounded-xl"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p className="text-end pr-4">Quên mật khẩu?</p>
              {/* <Link href="/dashboard"> */}
              <Button
                onClick={() => {
                  onSignIn();
                }}
                className="m-4 w-80 h-10 rounded-xl"
              >
                Đăng nhập
              </Button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInComponent;
