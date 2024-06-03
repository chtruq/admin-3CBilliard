import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";

function SignIn() {
  return (
    <div className="container mx-auto p-0">
      <div className="grid grid-cols-10 w-full h-dvh">
        <div className="flex flex-col justify-center items-center col-span-6 bg-[url('/assets/image/bg_hero.png')]">
          <img src="/assets/image/3C-Icon.png" alt="logo" className="m-2 w-50 h-50" />
          <p className="text-2xl font-semibold m-1">Connect-Cue-Community</p>
          <p className="text-2xl font-semibold m-1">3C Billiard</p>
        </div>
        <div className="flex flex-col justify-center items-center col-span-4 bg-slate-50">
          <p className="text-2xl">Đăng nhập</p>
          <div>
            <Input placeholder="Nhập tên tài khoản" type="email" className="m-4 w-80 h-10 rounded-xl"></Input>
          </div>
          <div>
            <Input placeholder="Nhập mật khẩu" type="password" className="m-4 w-80 h-10 rounded-xl"></Input>
          </div>
          <p className="">Quên mật khẩu?</p>
          <Link href="/dashboard">
            <Button className="m-4 w-80 h-10 rounded-xl">Đăng nhập</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
