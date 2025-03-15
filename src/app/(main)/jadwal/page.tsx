"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useScheduleStore } from "@/store/useScheduleStore";
import Link from "next/link";
import { useEffect } from "react";

export default function JadwalPage() {
  const { data, fetchSchedule } = useScheduleStore();
  useEffect(() => {
    fetchSchedule();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 mx-auto w-fit">
        {data.map((item, index) => (
          <Table key={index} className="w-[250px] border border-white ">
            <TableHeader>
              <TableRow>
                <TableHead className="text-white bg-gray-700 text-center">
                  {item.day}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {item.anime_list.map((anime, idx) => (
                <TableRow key={idx}>
                  <TableCell className="text-black text-center">
                    <Link href={`/anime/${anime.slug}`} className="hover:underline">
                      {anime.anime_name.split(" ").slice(0, 6).join(" ")}
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
