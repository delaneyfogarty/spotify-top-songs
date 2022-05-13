import Song from './Song.js';
import './App.css';

export default function SongList({ songs }) {
  return (
    <div className="songs">
      {songs.map((song) => (
        <Song key={song.id} song={song} />
      ))}
    </div>
  );
}
