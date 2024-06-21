import TabsCLB from "@/components/clb/TabsCLB";
import Link from "next/link";
import React from "react";

function BilliardClubLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className={`flex flex-row justify-end mr-4`}>
        <TabsCLB />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default BilliardClubLayout;
