import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "../ui/dropdown-menu";

function UserTable({ data, loading }: { data: any[]; loading: boolean }) {
  return (
    <>
      {loading && <div>Đang tải...</div>}
      {!loading && (
        <Table className="bg-white border rounded-lg w-[100%]">
          <TableHeader>
            <TableRow>
              <TableHead>Tên</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Số điện thoại</TableHead>
              <TableHead>Vai trò</TableHead>
              <TableHead>Địa chỉ </TableHead>

              <TableHead>Trạng thái</TableHead>
              <TableHead>Thao tác</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map(
              (item: {
                id: number;
                roleId: number;
                userName: string;
                email: string;
                phone: string;
                identificationCardNumber: string;
                image: string;
                address: string;
                createAt: string;
                modifineAt: string;
                doB: string;
                note: string;
                status: number;
              }) => (
                <TableRow key={item.id}>
                  <TableCell>{item.userName}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>
                    {item.phone && item.phone !== "" ? item.phone : "N/A"}
                  </TableCell>
                  <TableCell>{item.roleId}</TableCell>
                  <TableCell>
                    {item.address && item.address !== "" ? item.address : "N/A"}
                  </TableCell>

                  <TableCell>
                    {(item.status == 0 && "Hoạt động") ||
                      (item.status == 1 && "Ngưng hoạt động")}
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
                          <DropdownMenuItem></DropdownMenuItem>
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

export default UserTable;
