"use client";

import { acceptClub, rejectClub } from "@/app/actions/club";
import { Spinner } from "@/components/expansions/spinner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

function CLubApprovalTable({
  data,
  loading,
}: {
  data: any[];
  loading: boolean;
}) {
  const { toast } = useToast();
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [idCondition, setId] = useState(0);

  const handleApprove = async (id: number) => {
    console.log(id);
    try {
      setId(id);
      setIsLoading(true);
      const res = await acceptClub(id);
      console.log(res);
      toast({
        variant: "default",
        title: "Duyệt thành công",
        description: "CLB đã được duyệt",
      });
      router.push(pathname);
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Lỗi",
        description: "Đã có lỗi xảy ra",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReject = async (id: number, note: string) => {
    console.log(id);
    try {
      setId(id);
      setIsLoading(true);
      const res = await rejectClub(id, note);
      console.log(res);

      router.push(pathname);
      toast({
        variant: "default",
        title: "Đã từ chối",
        description: "CLB đã bị từ chối",
      });
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Lỗi",
        description: "Đã có lỗi xảy ra",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoading = (id: number) => {
    setIsLoading(true);
    setId(id);
    toast({
      variant: "destructive",
      title: "Lỗi",
      description: "Đã có lỗi xảy ra",
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const [open, setOpen] = React.useState(false);
  const [note, setNote] = React.useState("");
  const [deleteId, setDeleteId] = React.useState(0);

  return (
    <>
      {loading && <div>Đang tải...</div>}

      {!loading && data.length != 0 && (
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
                          {isLoading && idCondition == item.id ? (
                            <div className="">
                              <Spinner size="small" />
                            </div>
                          ) : (
                            <DotsHorizontalIcon className="" />
                          )}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuGroup>
                          <DropdownMenuItem
                            onClick={() => {
                              handleApprove(item.id);
                              // handleLoading(item.id);
                            }}
                            className="items-center text-center"
                          >
                            Duyệt
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => {
                              setOpen(true);
                              setDeleteId(item.id);
                              // handleLoading(item.id);
                            }}
                            className="items-center text-center"
                          >
                            Từ chối
                          </DropdownMenuItem>
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
      {data.length == 0 && <div>Không còn câu lạc bộ nào ở đây</div>}

      {
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Từ chối yêu cầu</DialogTitle>
              <DialogDescription>
                Nhập lý do từ chối yêu cầu của CLB
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="note" className="text-right">
                  Lý do
                </Label>
                <Input
                  id="note"
                  value={note}
                  className="col-span-3"
                  onChange={(value) => {
                    setNote(value.target.value);
                  }}
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                onClick={() => {
                  handleReject(deleteId, note);
                  setOpen(false);
                }}
              >
                Xác nhận
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      }
    </>
  );
}

export default CLubApprovalTable;
