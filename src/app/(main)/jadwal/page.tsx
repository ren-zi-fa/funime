"use client";
import LoadingGif from "@/components/layout/loadGift";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useScheduleStore } from "@/store/useScheduleStore";
import Link from "next/link";
import { useEffect } from "react";

export default function JadwalPage() {
  const { data, fetchSchedule, loading } = useScheduleStore();
  useEffect(() => {
    fetchSchedule();
  }, [fetchSchedule]);

  if (loading) return <LoadingGif />;
  return (
    <>
      <h1
        className="text-center font-extrabold text-2xl my-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
        style={{
          textShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
        }}
      >
       Jadwal Rilis
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto w-fit justify-center md:gap-4">
        {data.map((item, index) => (
          <Table key={index} className="w-[250px] border-2 border-black my-2">
            <TableHeader>
              <TableRow>
                <TableHead
                  className={cn(
                    "text-center bg-gray-700",
                    item.day === "Random" ? "text-blue-300 " : "text-white"
                  )}
                >
                  {item.day}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {item.anime_list.map((anime, idx) => (
                <TableRow key={idx}>
                  <TableCell className="text-black text-center">
                    <Link
                      href={`/anime/${anime.slug}`}
                      className="hover:underline"
                    >
                      {anime.anime_name.split(" ").slice(0, 4).join(" ")}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ))}
      </div>
    </>
  );
}
