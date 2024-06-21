import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import { Button } from "../ui/button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

function CLubTable({ data, loading }: { data: any[]; loading: boolean }) {
  return (
    <>
      {loading && <div>Đang tải...</div>}
      {!loading && (
        <Table className="bg-white border rounded-lg w-[100%]">
          <TableHeader>
            <TableRow>
              <TableHead>Tên CLB</TableHead>
              <TableHead>Phone</TableHead>

              <TableHead>Ngày tạo</TableHead>
              <TableHead>Địa chỉ</TableHead>
              <TableHead>Bản đồ </TableHead>

              <TableHead>Trạng thái</TableHead>
              <TableHead>Thao tác</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map(
              (item: {
                id: number;
                userId: number;
                bidaName: string;
                image: string;
                address: string;
                description: string | null;
                phone: string;
                createAt: string;
                note: string;
                status: string;
                openTime: string;
                closeTime: string;
                averagePrice: number;
                googleMapLink: string;
              }) => (
                <TableRow key={item.id}>
                  <TableCell>{item.bidaName}</TableCell>
                  <TableCell>
                    {item.phone && item.phone !== "" ? item.phone : "N/A"}
                  </TableCell>
                  <TableCell>
                    {new Date(item.createAt).toISOString().split("T")[0]}
                  </TableCell>
                  <TableCell>
                    {item.address && item.address !== "" ? item.address : "N/A"}
                  </TableCell>
                  <TableCell>
                    {item.googleMapLink && item.googleMapLink !== "" && (
                      <a
                        href={item.googleMapLink}
                        target="_blank"
                        className="text-blue-500"
                      >
                        Xem bản đồ
                      </a>
                    )}
                  </TableCell>

                  <TableCell>
                    {(item.status == "ACTIVE" && "Hoạt động") ||
                      (item.status == "DELETED" && "Ngưng hoạt động") ||
                      (item.status == "WAITING" && "Chờ duyệt") ||
                      (item.status == "INACTIVE" && "Tạm ngưng hoạt động") ||
                      "N/A"}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                          <DotsHorizontalIcon className="" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuGroup>
                          <DropdownMenuItem>Xoá</DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      )}
    </>
  );
}

export default CLubTable;
