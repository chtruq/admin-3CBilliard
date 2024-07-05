// import SearchInput from "@/components/SearchInput";
import TabsCLB from "@/components/clb/TabsCLB";
import Link from "next/link";
import React from "react";

function BilliardClubLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className={`flex flex-row justify-between`}>
        {/* <SearchInput placeholder="Tìm kiếm theo tên" /> */}
        <div></div>
        <TabsCLB />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default BilliardClubLayout;
