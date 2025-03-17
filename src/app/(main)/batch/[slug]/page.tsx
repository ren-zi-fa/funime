"use client";

import { useBatchStore } from "@/store/useBatchStore";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function BatchPage() {
  const { slug } = useParams();
  const { fetchBatch, data } = useBatchStore();
  useEffect(() => {
    fetchBatch(slug as string);
  }, [slug]);
  console.log(data);
  return (
    <div className="h-full p-4">
      <h1 className="text-center text-xl mb-4">{data?.batch}</h1>
      <div className="">
        {data?.download_urls.map((item, index) => (
          <div
            className="flex items-center justify-between border-b border-gray-300 py-2"
            key={index}
          >
            <div className="bg-blue-700 text-white font-bold px-3 py-1 rounded-md">
              {item.resolution}
            </div>
            <div className="flex-1 text-red-600 flex flex-wrap justify-center space-x-2 px-4">
              {item.urls.map((piece, idx) => (
                <span key={idx}>
                  <a
                    href={piece.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {piece.provider}
                  </a>
                  {idx !== item.urls.length - 1 && (
                    <span className="px-1">|</span>
                  )}
                </span>
              ))}
              <div className="text-blue-500">
                {item.file_size}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
