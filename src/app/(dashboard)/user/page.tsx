import { getUsers } from "@/app/actions/user";
import UserPagination from "@/components/users/UserPagination";
import React, { Suspense } from "react";

const UserPage = async ({ searchParams }: { searchParams: any }) => {
  const page = searchParams.page ?? 1;
  const per_page = searchParams.per_page ?? 10;
  const data = await getUsers(page, per_page);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <UserPagination data={data} />
      </Suspense>
    </>
  );
};

export default UserPage;
