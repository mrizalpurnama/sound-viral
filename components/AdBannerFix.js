export default function AdBannerFix() {
    return (
      <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white text-center p-2 max-h-14">
        <span className="text-sm"></span>
        <div className="mt-1">
          {/* Ganti dengan kode iklan dari AdSense atau AdMob */}
          <img src="/ads-placeholder.png" alt="Ads" className="mx-auto h-12" />
        </div>
      </div>
    );
  }