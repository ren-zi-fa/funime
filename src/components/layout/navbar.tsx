"use client";

import { AlignJustifyIcon, Search } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Input } from "../ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [keyword, setkeyword] = useState("");

  const handleSearch = () => {
    if (!keyword.trim()) return;
    router.push(`/result/${keyword}`);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(); 
      setOpen(false)
    }
  };
  return (
    <div className="sticky top-0 w-full left-0 right-0 z-50 border-b-2 border-gray-100/60 py-4 backdrop-blur-lg backdrop-filter dark:border-gray-700">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          className="flex flex-row items-center p-1  gap-4 w-full"
          onClick={() => setOpen(true)}
        >
          <AlignJustifyIcon strokeWidth={2} />
          <Input
            className="w-full "
            disabled
            placeholder="search anime..."
            inert
          />
        </SheetTrigger>
        <SheetContent
          side="bottom"
          className="[&>button]:hidden"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <SheetHeader>
            <SheetDescription />

            <SheetTitle>
              <div className="flex flex-row items-center gap-3">
                <Input
                  value={keyword}
                  onChange={(e) => setkeyword(e.target.value)}
                  className="w-full h-8"
                  placeholder="search anime..."
                  onKeyDown={handleKeyDown} 
                />
                <SheetClose asChild>
                  <Button
                    size="icon"
                    className="bg-blue-500 hover:bg-blue-400 text-white"
                    type="submit"
                    onClick={handleSearch}
                  >
                    <Search />
                  </Button>
                </SheetClose>
              </div>
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col text-xl space-y-4 mb-32">
            <SheetClose asChild>
              <Button
                variant="ghost"
                onClick={() => {
                  router.push("/");
                }}
              >
                Home
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button
                variant="ghost"
                onClick={() => {
                  router.push("/jadwal");
                }}
              >
                Jadwal
              </Button>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
