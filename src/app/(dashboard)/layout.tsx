"use client";

import React, { use, useEffect, useState } from "react";
import {
  LayoutDashboard,
  ArrowRightLeft,
  Newspaper,
  UserRound,
  LandPlot,
  Unplug,
} from "lucide-react";
import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import { useAuth } from "@/context/authContext";
import { revalidatePath } from "next/cache";
import { usePathname, useRouter } from "next/navigation";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { isLogged, loading, setIsLogged, user } = useAuth();
  const router = useRouter();

  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const navLinks = [
    { name: "Thống kê", icon: LayoutDashboard, link: "/dashboard" },
    { name: "Giao dịch", icon: ArrowRightLeft, link: "/transaction" },
    { name: "Bài đăng", icon: Newspaper, link: "/post" },
    { name: "Người dùng", icon: UserRound, link: "/user" },
    { name: "Câu lạc bộ", icon: LandPlot, link: "/billiard_club" },
    { name: "Đăng xuất", icon: Unplug, link: "/signin" },
  ];

  useEffect(() => {
    setActiveNavIndex(
      navLinks.findIndex((item) => item.link === window.location.pathname)
    );
  }, []);

  useEffect(() => {
    if (!isLogged && !loading && user?.data.role !== "Admin") {
      // revalidatePath("/signin");
      return router.push("/signin");
    }
  }, [isLogged, loading]);

  useEffect(() => {
    router.push("/dashboard");
  }, []);

  // if (isLogged) {
  //   router.push("/dashboard");
  // }

  const logout = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
    router.push("/signin");
    // revalidatePath("/signin");
  };

  return (
    <div className="flex w-full bg-[url('/assets/image/bg_hero.png')] ">
      <div className="px-10 py-6 flex flex-col border border-r-2 w-1/6 h-screen">
        <Image
          width={100}
          height={100}
          className="h-30 w-40"
          src="/assets/image/logo.svg"
          alt="logo"
        />
        <div className="pt-8 flex flex-col space-y-8">
          {navLinks.map((item, index) => (
            <div key={index}>
              <Link href={item.link !== "/signin" ? item.link : ""}>
                <div
                  className={
                    "flex space-x-3 p-2 rounded" +
                    (activeNavIndex === index
                      ? " bg-[#FF8C8C] text-white font-semibold"
                      : "")
                  }
                  onClick={() => {
                    setActiveNavIndex(index);
                    if (item.link === "/signin") {
                      logout();
                    }
                  }}
                >
                  <item.icon />
                  <span className="text-lg">{item?.name}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-5/6">
        {/* <div className="container flex py-5 justify-end border border-b-2">
          <Avatar />
        </div> */}
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
