import Link from "next/link";
import '../styles/globals.css'
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

// var thisDay() => {
// let date = new Date();
// let options = {timeZone: 'Asia/Jakarta'};
// let wibTime = date.toLocaleString('en-US', options);
// }
const today = new Date().toLocaleDateString("id-ID", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export default function Header() {
  const pathname = usePathname(); // Mendapatkan path aktif
  const [selected, setSelected] = useState("Area");
  useEffect(() => {
    if (pathname === "/") setSelected("Global");
    else if (pathname === "/indonesia") setSelected("Indonesia");
  }, [pathname]);
  return (



    <div className="flex justify-center items-center p-4 w-full shadow-lg shadow-teal-900/20 mb-0 h-15">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      <div className="ml-6 inline-block text-left group">
      {/* Tombol Dropdown */}
      <button className="px-4 py-1 mt-1 mr-2 bg-teal-600 text-white rounded-full  hover:bg-teal-950 hover:text-teal-100 transition">
      <i class="fa-solid fa-location-dot"></i>  {selected}
      </button>

      {/* Menu Dropdown (Hanya tampil saat hover) */}
      <div className="absolute opacity-0 invisible group-focus-within:opacity-100 text-xs group-focus-within:visible mt-0 w-52 bg-white border rounded-lg shadow-lg">
        <Link href="/" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setSelected("Global")}>
        Global
        </Link>
        <Link href="/indonesia" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setSelected("Indonesia")}>
          Indonesia
        </Link>
      </div>

    </div>
    <h1 className="text-lg font-bold text-cyan-950">Sound Viral -  {today}  <i class="fa-solid fa-arrow-trend-up"></i></h1>


      {/* <div className="text-cyan-950">
        <Link href="/" className="mr-4 px-3 py-2 bg-white text-blue-500 rounded">🌎 Global</Link>
        <Link href="/indonesia" className="px-3 py-2 bg-white rounded text-inherit">🇮🇩 Indonesia</Link>
      </div> */}
    </div>
  );
}
