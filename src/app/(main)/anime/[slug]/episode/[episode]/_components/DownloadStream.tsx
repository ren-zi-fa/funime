import { episode } from "@/types/response";

type DownloadStreamProps = Pick<episode, "download_urls">;

export default function DownloadStream({ download_urls }: DownloadStreamProps) {
  return (
    <div className="bg-gray-100 p-2">
      {download_urls.mp4.map((item, index) => (
        <div
          className="flex items-center justify-between border-b border-gray-300 py-2"
          key={index}
        >
          {/* Resolution Box */}
          <div className="bg-gray-700 text-white font-bold px-3 py-1 rounded-md">
            {item.resolution}
          </div>

          {/* Download Links */}
          <div className="flex-1 text-blue-600 flex flex-wrap justify-center space-x-2 px-4">
            {item.urls.map((piece, idx) => (
              <span key={idx}>
                <a href={piece.url} target="_blank" rel="noopener noreferrer" className="underline">
                  {piece.provider}
                </a>
                {idx !== item.urls.length - 1 && (
                  <span className="px-1">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
