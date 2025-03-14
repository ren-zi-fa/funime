"use client";

import { useAnimeSlugStore } from "@/store/useAnimeSlugStore";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function AnimeDetail() {
  const { slug } = useParams();

  const { fetchAnimeDetail, data,loading } = useAnimeSlugStore();

  useEffect(() => {
    fetchAnimeDetail(slug as string);
    // fetchData();
  }, [slug]);
  console.log(data);
  // console.log(slug);
  return (
    <div className="h-fit bg-gray-300/30 mt-2 flex flex-col space-y-1 px-2">
      <div className="p-4 bg-black text-white">
        <p className="text-center">{}</p>
      </div>
      {/* <Image
        src={poster}
        width={140}
        height={70}
        alt={title}
        className="mx-auto border-2 "
        priority
      />
      <ul>
        <li>Judul : {title}</li>
        <li>Japanase: {japanese_title}</li>
        <li>Skor: {rating}</li>
        <li>Produser: {produser}</li>
        <li>Tipe: {type}</li>
        <li>Status: {status}</li>
        <li>Total Episode: {episode_count}</li>
        <li>Durasi: {duration}</li>
        <li>Tanggal Rilis: {release_date}</li>
        <li>Studio: {studio}</li>
        <li>
          Genre:{" "}
          {genres.map((item: any, index) => (
            <span key={index} className="mr-2">
              {item.name}
            </span>
          ))}
        </li>
      </ul> */}
    </div>
  );
}
