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
  const formatDateToDDMMYY = (date: Date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Add 1 because months are 0-indexed.
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
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
            {data
              ?.sort(
                (a, b) =>
                  new Date(b.createAt).getTime() -
                  new Date(a.createAt).getTime()
              )
              .map(
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
                    <TableCell>
                      {formatDateToDDMMYY(new Date(item.createAt))}
                    </TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>
                      {item.paymentMethods === 0 ? "Quét QR" : "Tại Quầy"}
                    </TableCell>
                    <TableCell>
                      {(item.status === "ACTIVE" && "Đã Thanh toán") ||
                        (item.status === "INACTIVE" && "Đã huỷ") ||
                        (item.status === "DELETED" && "Đã huỷ") ||
                        (item.status === "PENDING" && "Chờ xác nhận") ||
                        (item.status === "FINISHED" && "Đã hoàn thành") ||
                        (item.status === "REFUNDED" && "Đã hoàn tiền") ||
                        (item.status === "REFUNDING" && "Đang hoàn tiền") ||
                        (item.status === "REFUND_FAILED" &&
                          "Hoàn tiền thất bại") ||
                        (item.status === "REFUND_REQUEST" &&
                          "Yêu cầu hoàn tiền") ||
                        (item.status === "REFUND_SUCCESS" &&
                          "Hoàn tiền thành công")}
                    </TableCell>
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
