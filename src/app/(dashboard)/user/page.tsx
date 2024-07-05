import { getUsers } from "@/app/actions/user";
// import SearchInput from "@/components/SearchInput";
import UserPagination from "@/components/users/UserPagination";
import React, { Suspense } from "react";

const UserPage = async ({ searchParams }: { searchParams: any }) => {
  const page = searchParams.page ?? 1;
  const per_page = searchParams.per_page ?? 10;
  const search = searchParams.search ?? "";
  const data = await getUsers(page, per_page, search);
  console.log("data", data);
  return (
    <>
      {/* <div className="w-48 m-2">
        <SearchInput placeholder="Tìm kiếm" />
      </div> */}
      <Suspense fallback={<div>Loading...</div>}>
        <UserPagination data={data} />
      </Suspense>
    </>
  );
};

export default UserPage;
