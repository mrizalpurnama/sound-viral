import Header from "@/components/Header";
import MusicCard from "@/components/MusicCard";
import AdBanner from "@/components/AdBanner";
import fs from "fs";
import path from "path";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Footer from "@/components/Footer";
import AdBannerFix from "@/components/AdBannerFix";



export default function Home({ songs }) {
  useEffect(() => {
    AOS.init({
      duration: 600, // Durasi animasi dalam milidetik
      anchorPlacement: "center-bottom", // Posisi animasi
      once: true, // Animasi hanya berjalan sekali
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <div className="p-4 grid md:grid-cols-2 mx-4 mt-7">
        {songs.map((song, index) => (
          <><MusicCard key={index} song={song} />
          {(index + 1) % 10 === 0 && <AdBanner key={`ad-${index}`} />} {/* Iklan setiap 10 lagu */}
          {(index + 1) % 10 === 0 && <AdBanner key={`ad-${index}`} />} {/* Iklan setiap 10 lagu */}
          </>
        ))}
      </div>

      <AdBannerFix/>
    <Footer/>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data/indonesiaChart.json");
  const jsonData = fs.readFileSync(filePath);
  const songs = JSON.parse(jsonData);

  return { props: { songs } };
}
