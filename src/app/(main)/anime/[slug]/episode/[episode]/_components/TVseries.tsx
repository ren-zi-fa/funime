import { episode } from "@/types/response";


type TVseriesProps = Pick<episode, 'episode' | 'stream_url'>;

export default function TVseries({ stream_url, episode }: TVseriesProps) {
  return (
    <div className="p-4">
      <iframe
        src={stream_url}
        className="h-[200px] w-full rounded-xl sm:h-[300px] sm:w-full md:h-[400px] md:w-full lg:h-[500px] lg:w-full xl:h-[600px] xl:w-full"
        allowFullScreen
      ></iframe>
    </div>
  );
}
