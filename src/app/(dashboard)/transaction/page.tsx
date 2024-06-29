import { getBills } from "@/app/actions/transaction";
import PaginationComponent from "@/components/transaction/PaginationComponent";
import TransactionTable from "@/components/transaction/TransactionTable";
import { Button } from "@/components/ui/button";
import { DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

interface TransactionPageProps {
  data: any;
}

const TransactionPage = async ({ searchParams }: { searchParams: any }) => {
  const page = searchParams.page ?? 1;
  const per_page = searchParams.per_page ?? 10;
  const data = await getBills(page, per_page);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <PaginationComponent data={data} />
      </Suspense>
    </>
  );
};

export default TransactionPage;
