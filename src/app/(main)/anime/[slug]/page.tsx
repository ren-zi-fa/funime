"use client";

import LoadingGif from "@/components/layout/loadGift";
import { useAnimeSlugStore } from "@/store/useAnimeSlugStore";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function AnimeDetail() {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);

  const { fetchAnimeDetail, data } = useAnimeSlugStore();

  useEffect(() => {
    if (slug) {
      setLoading(true);
      fetchAnimeDetail(slug as string).finally(() => {
        setLoading(false);
      });
    }
  }, [slug]);
  if (loading) return <LoadingGif/>;

  if (!loading && data === null) return notFound();

  return (
    <div className="h-fit bg-gray-300/30 mt-2 flex flex-col space-y-1 px-2">
      {data && (
        <div className=" flex-col space-y-1 px-2">
          <div className="p-4 bg-black text-white">
            <p className="text-center">{data.title}</p>
          </div>
          <Image
            src={data.poster || ""}
            width={140}
            height={70}
            alt={data.title || ""}
            className="mx-auto border-2"
            priority
          />
          <ul>
            <li>Judul: {data.title}</li>
            <li>Japanese: {data.japanese_title}</li>
            <li>Skor: {data.rating}</li>
            <li>Produser: {data.produser}</li>
            <li>Tipe: {data.type}</li>
            <li>Status: {data.status}</li>
            <li>Total Episode: {data.episode_count}</li>
            <li>Durasi: {data.duration}</li>
            <li>Tanggal Rilis: {data.release_date}</li>
            <li>Studio: {data.studio}</li>
            <li>
              Genre:{" "}
              {data.genres.map((item: any, index: number) => (
                <span key={index} className="mr-2">
                  {item.name}
                </span>
              ))}
            </li>
            <li>Synopsis: <br />{data.synopsis}</li>
          </ul>
        </div>
      )}
      {data && (
        <div className="flex flex-col space-y-2">
          {data?.episode_lists.map((item, index) => (
            <Link
              href={`/anime/${slug}/episode/${item.episode_number}`}
              className="bg-red-600 text-white underline p-3"
              key={index}
            >
              <p>{item.slug}</p>
            </Link>
          ))}
        </div>
      )}


    </div>
  );
}
