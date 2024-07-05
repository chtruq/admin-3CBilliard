"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

function TabsCLB() {
  const pathname = usePathname();

  return (
    <div className="flex flex-row justify-end mr-4 bg-gray-200 rounded-lg my-2">
      <Link
        href={"/billiard_club"}
        className={`p-2 ${
          pathname === "/billiard_club"
            ? "bg-[#ff8c8c] text-white rounded-lg w-32 text-center"
            : "text-black rounded-lg w-32 text-center"
        } `}
      >
        Thông chi tiết
      </Link>
      <Link
        href={"/billiard_club/club-approval"}
        className={`p-2 w-36 text-center ${
          pathname === "/billiard_club/club-approval"
            ? "bg-[#ff8c8c] text-white rounded-lg"
            : "text-black rounded-lg w-32 text-center"
        }`}
      >
        Chờ duyệt
      </Link>
    </div>
  );
}

export default TabsCLB;
