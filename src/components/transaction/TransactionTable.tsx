import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function TransactionTable({
  data,
  loading,
}: {
  data: any[];
  loading: boolean;
}) {
  return (
    <>
      {loading && <div>Đang tải...</div>}
      {!loading && (
        <Table className="bg-white border rounded-lg w-[100%]">
          <TableHeader>
            <TableRow>
              <TableHead>Hoá đơn</TableHead>
              <TableHead>Ngày</TableHead>
              <TableHead>Tổng tiền</TableHead>
              <TableHead>Phương thức thanh toán</TableHead>
              <TableHead>Trạng thái</TableHead>
              {/* <TableHead>Thao tác</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map(
              (item: {
                id: number;
                clubId: number;
                bookerName: string;
                bookerPhone: string;
                bookerEmail: string;
                paymentMethods: number;
                price: number;
                image: string;
                createAt: string;
                bookingDate: string;
                orderCode: string;
                descrpition: string;
                status: string;
                bookedSlotIds: number[];
              }) => (
                <TableRow key={item.id}>
                  <TableCell>{item.orderCode}</TableCell>
                  <TableCell>{item.createAt}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>
                    {item.paymentMethods === 0 ? "Quét QR" : "Tại Quầy"}
                  </TableCell>
                  <TableCell>{item.status}</TableCell>
                  {/* <TableCell>
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
                </TableCell> */}
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      )}
    </>
  );
}

export default TransactionTable;
