import { getClubs } from "@/app/actions/club";
import ClubPagination from "@/components/clb/ClubPagination";
import React, { Suspense } from "react";

const page = async ({ searchParams }: { searchParams: any }) => {
  const page = searchParams.page ?? 1;
  const per_page = searchParams.per_page ?? 10;
  const data = await getClubs(page, per_page, "ACTIVE");
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ClubPagination data={data} />
      </Suspense>
    </>
  );
};

export default page;
