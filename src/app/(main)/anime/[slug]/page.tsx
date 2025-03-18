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
  }, [slug, fetchAnimeDetail]);
  if (loading) return <LoadingGif />;
  if (error) return notFound();

  return (
    <div className="h-full bg-gray-300/30 mt-2 flex flex-col space-y-4 px-2">
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
          <ul className="grid grid-cols-[150px_1fr] gap-y-2">
            <li className="font-semibold">Judul</li>
            <li>: {data.title}</li>

            <li className="font-semibold">Japanese</li>
            <li>: {data.japanese_title}</li>

            <li className="font-semibold">Skor</li>
            <li>: {data.rating}</li>

            <li className="font-semibold">Produser</li>
            <li>: {data.produser}</li>

            <li className="font-semibold">Tipe</li>
            <li>: {data.type}</li>

            <li className="font-semibold">Status</li>
            <li>: {data.status}</li>

            <li className="font-semibold">Total Episode</li>
            <li>: {data.episode_count}</li>

            <li className="font-semibold">Durasi</li>
            <li>: {data.duration}</li>

            <li className="font-semibold">Tanggal Rilis</li>
            <li>: {data.release_date}</li>

            <li className="font-semibold">Studio</li>
            <li>: {data.studio}</li>

            <li className="font-semibold">Genre</li>
            <li>
              {data.genres.map((item, index: number) => (
                <span key={index} className="mr-2">
                 : {item.name}
                </span>
              ))}
            </li>

            {data.synopsis && (
              <>
                <li className="font-semibold">Synopsis:</li>
                <li>: {data.synopsis}</li>
              </>
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
