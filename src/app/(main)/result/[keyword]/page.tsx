"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useSearchStore } from "@/store/useSearchStore";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ResultSearch() {
  const {keyword} = useParams();
  console.log(keyword)
  const { data, fetchResult, loading } = useSearchStore();

  // useEffect(() => {
  //   fetchResult(search);
  // }, []);
  // console.log(data);
  return (
    // <div className="container py-6 flex flex-col gap-4">
    //   {loading ? (
    //     <p className="text-center text-xl font-bold">Loading....</p>
    //   ) : (
    //     <h1 className="text-center text-xl font-bold">
    //       Hasil pencarian: {search}
    //     </h1>
    //   )}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4  md:grid-cols-6 lg:grid-cols-6 p-4">
        {/* {data && (
          <Card className="relative group  shadow-md h-[250px] cursor-pointer">
            <Link href={`/anime/${data?.slug}`}>
              <Image
                src={data?.poster || `/anime.webp`}
                alt={data?.title || "anime"}
                fill
                className="object-cover "
                
              />
              <p
                className={cn(
                  "absolute bottom-0 w-full bg-black/50  mt-10 text-white text-center transition-all duration-200 overflow-hidden",
                  "group-hover:h-7  p-2"
                )}
              >
                {data?.title}
              </p>
            </Link>
          </Card>
        )} */}
      </div>
    // </div>
  );
}
