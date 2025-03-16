"use client";

import LoadingGif from "@/components/layout/loadGift";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useSearchStore } from "@/store/useSearchStore";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ResultSearch() {
  const { keyword } = useParams();
  const { data, fetchResult } = useSearchStore();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (keyword) {
      setLoading(true);
      fetchResult(keyword as string).finally(() => {
        setLoading(false);
      });
    }
  }, [keyword]);
  if (loading) return <LoadingGif />;

  if (!loading && !data) return notFound();
  console.log(data);
  return (
    <div className="container py-6 flex flex-col gap-4">
      <h1 className="text-center text-xl font-bold">
        Hasil pencarian: {decodeURIComponent(keyword as string)}
      </h1>
      {data && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4  md:grid-cols-6 lg:grid-cols-6 p-4">
          {data.map((item: any) => (
            <Card
              key={item.slug}
              className="relative group shadow-md py-2 px-2 rounded-none  h-50 w-40 cursor-pointer"
            >
              <Link
                href={`/anime/${item.slug}`}
                className="relative h-full w-full"
              >
                {item.poster && (
                  <Image
                    src={item.poster}
                    alt={item.title || ""}
                    fill
                    className="object-cover"
                  />
                )}
                <p
                  className={cn(
                    "absolute bottom-0 w-full bg-black/50 mt-10 text-white text-center transition-all duration-200 overflow-hidden",
                    "group-hover:h-7 p-2"
                  )}
                >
                  {item.title}
                </p>
              </Link>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
