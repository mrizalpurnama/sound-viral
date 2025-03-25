import { useState } from "react";

export default function MusicCard({ song }) {



  const videoUrl = song["YouTube URL"];
  let videoId = "";

  if (videoUrl.includes("v=")) {
    videoId = videoUrl.split("v=")[1].split("&")[0];
  }

  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);
  const linkToCopy = `${song["YouTube URL"]}`; // Custom link

  const copyToClipboard = () => {
    navigator.clipboard.writeText(linkToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }
  return (
    <div data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease-in-sine" className="mx-2 px-3 pt-1 pb-3 border-teal-950 rounded-lg shadow-md grid grid-cols-2 mt-0 mb-4 hover:bg-teal-100 delay-150 duration-700 w-100 top-0">
      {/* Tampilkan Thumbnail jika belum diklik */}
      <div className="flex flex-col justify-start items-start h-full">

        <span className="text-xs font-bold mb-2 rounded-full border-2 px-1 w-fit border-teal-950">{song["Rank"]}</span>
        {!isPlaying ? (
          <div
            className="relative w-full aspect-video cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={song["Video Title"]}
              className="w-full h-full object-cover rounded"
            />
            <div className="absolute bg-gray-500/10 inset-0 flex items-center justify-center bg-opacity-50 text-xs">
              <button className="bg-black/10 text-white px-3 py-2 rounded-full text-xs font-bold cursor-pointer">
                ▶ Play
              </button>
            </div>
          </div>
        ) : (
          // Embed YouTube setelah diklik (Diperbaiki aspect ratio)
          <div className="relative w-full aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={song["Video Title"]}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded"
            ></iframe>
          </div>
        )}
      </div>
      {/* {song["Previous Rank"]} */}
      {/* Informasi Lagu */}
      <div className="mt-10 ml-3 items-center">

        <h2 className="text-lg font-bold col-span-2 flex flex-wrap overflow-hidden max-h-8">{song["Video Title"]}</h2>
        <p className="text-gray-500 text-xs flex flex-wrap overflow-hidden max-h-4">{song["Artist Names"]}</p>

        <p className="text-xs">On Chart: {song["Periods on Chart"]} days</p>
        <div className="grid grid-cols-2">
          <a
            href={song["YouTube URL"]}
            target="_blank"
            rel="noopener noreferrer"
            className="items-center"
          >
            <div className="px-4 py-1 mt-4 mr-2 bg-teal-600 text-white rounded-full  hover:bg-teal-950 hover:text-teal-100 transition text-xs">YouTube</div>
          </a>
          <button
            onClick={copyToClipboard}
            className="px-3 py-1 mt-4 ml-1 mr-1 bg-teal-600 text-white rounded-full  hover:bg-teal-950 hover:text-teal-100 transition text-xs"
          >
            Copy
          </button>
          {copied && (
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-xs bg-black text-white px-2 py-1 rounded">
              Copied!
            </span>
          )}
        </div>

      </div>
    </div>

  );
}
