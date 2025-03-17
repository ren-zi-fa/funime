"use client";

import LoadingGif from "@/components/layout/loadGift";
import { useAnimeSlugStore } from "@/store/useAnimeSlugStore";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useEffect } from "react";

export default function AnimeDetail() {
  const { slug } = useParams();

  const { fetchAnimeDetail, data, loading, error } = useAnimeSlugStore();

  useEffect(() => {
    if (slug) {
      fetchAnimeDetail(slug as string);
    }
  }, [slug,fetchAnimeDetail]);
  if (loading) return <LoadingGif />;
  if (error) return notFound();

  return (
    <div className="h-full bg-gray-300/30 mt-2 flex flex-col space-y-1 px-2">
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
              {data.genres.map((item, index: number) => (
                <span key={index} className="mr-2">
                  {item.name}
                </span>
              ))}
            </li>
            {data.synopsis && (
              <li>
                Synopsis: <br />
                {data.synopsis}
              </li>
            )}
          </ul>
        </div>
      )}
      {data && (
        <div className="flex flex-col space-y-2">
          {data?.episode_lists.map((item, index) => (
            <Link
              href={`/anime/${slug}/episode/${item.episode_number}`}
              className="bg-zinc-900 text-white underline p-3"
              key={index}
            >
              <p>{item.episode}</p>
            </Link>
          ))}
        </div>
      )}
      {data?.batch && (
        <a
        className="text-center underline text-red-500 my-5" 
          href={`/batch/${data?.batch?.slug}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Dwonload Batch {data?.title}
        </a>
      )}
    </div>
  );
}
