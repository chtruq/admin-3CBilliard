"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import UserTable from "./UserTable";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

function UserPagination({ data }: { data: any }) {
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const createQueryString = useCallback(
    (page: number, per_page: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", String(page));
      params.set("per_page", String(per_page));
      return params.toString();
    },
    [searchParams]
  );

  const page = searchParams.get("page");
  useEffect(() => {
    console.log(page);
  }, [page]);

  const per_page = 10;

  const [currentPage, setCurrentPage] = useState(page ?? 1);
  const handlePageChange = (value: any) => {
    console.log(value);
    setCurrentPage(value);
    const queryString = createQueryString(value, per_page);
    console.log(queryString);
    router.push(pathname + "?" + queryString);
    setLoading(true);
  };

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  const checkPage = (value: any) => {
    console.log(value);
    return value;
  };

  const items = data;
  const totalItems = items?.length;
  console.log(totalItems);
  return (
    <>
      <UserTable data={data} loading={loading} />

      <Pagination className="fixed bottom-2 w-[100%] items-center">
        <PaginationContent className="items-center">
          {currentPage != 1 ? (
            <PaginationItem>
              <PaginationPrevious
                className="cursor-pointer"
                onClick={() => {
                  handlePageChange(Number(currentPage) - 1);
                }}
              />
            </PaginationItem>
          ) : (
            <PaginationItem>
              <PaginationPrevious aria-disabled className="cursor-pointer" />
            </PaginationItem>
          )}
          {currentPage != 1 && (
            <PaginationItem>
              <PaginationLink
                className="cursor-pointer"
                onClick={() => {
                  handlePageChange(Number(currentPage) - 1);
                }}
                // href={`?page=${Number(currentPage) - 1}&per_page=5`}
              >
                {Number(currentPage) - 1}
              </PaginationLink>
            </PaginationItem>
          )}
          <PaginationItem>
            <PaginationLink
              className="cursor-pointer"
              isActive
              onClick={() => {
                checkPage(currentPage);
              }}
            >
              {currentPage}
            </PaginationLink>
          </PaginationItem>
          {totalItems == per_page && (
            <PaginationItem>
              <PaginationLink
                className="cursor-pointer"
                onClick={() => {
                  handlePageChange(Number(currentPage) + 1);
                }}
              >
                {Number(currentPage) + 1}
              </PaginationLink>
            </PaginationItem>
          )}
          {totalItems == per_page && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}
          {totalItems == per_page ? (
            <PaginationItem>
              <PaginationNext
                className="cursor-pointer"
                onClick={() => {
                  handlePageChange(Number(currentPage) + 1);
                }}
              />
            </PaginationItem>
          ) : (
            <PaginationItem>
              <PaginationNext aria-disabled className="cursor-pointer" />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </>
  );
}

export default UserPagination;
