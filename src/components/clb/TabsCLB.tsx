"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

function TabsCLB() {
  const pathname = usePathname();

  return (
    <>
      <Link
        href={"/billiard_club"}
        className={`p-2 ${
          pathname === "/billiard_club"
            ? "bg-[#ff8c8c] text-white rounded-lg w-32 text-center"
            : ""
        } `}
      >
        Thông chi tiết
      </Link>
      <Link
        href={"/billiard_club/club-approval"}
        className={`p-2 w-36 text-center ${
          pathname === "/billiard_club/club-approval"
            ? "bg-[#ff8c8c] text-white rounded-lg"
            : ""
        }`}
      >
        Chờ duyệt
      </Link>
    </>
  );
}

export default TabsCLB;
