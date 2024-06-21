import ClubApprovalPagination from "@/components/clb/clbaproval/ClubApproval";
import { getClubs } from "@/lib/action/club";
import React, { Suspense } from "react";

const page = async ({ searchParams }: { searchParams: any }) => {
  const page = searchParams.page ?? 1;
  const per_page = searchParams.per_page ?? 10;
  const data = await getClubs(page, per_page, "WAITING");

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ClubApprovalPagination data={data} />
      </Suspense>
    </div>
  );
};

export default page;
