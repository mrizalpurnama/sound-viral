export default function SpotifyCard({ song }) {
    return (
      <div className="p-4 border rounded-lg shadow-md">
        <h2 className="text-lg font-bold">{song.track_name}</h2>
        <p className="text-gray-500">{song.artist_names}</p>
        <p>Rank: {song.rank} (Sebelumnya: {song.previous_rank})</p>
        <p>Days on Chart: {song.days_on_chart}</p>
        <a href={`https://open.spotify.com/track/${song.uri.split(":")[2]}`} target="_blank" className="text-green-500">🎵 Dengarkan di Spotify</a>
      </div>
    );
  }
