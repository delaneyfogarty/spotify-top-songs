import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleSong } from './services/fetch-utils';
import './App.css';

export default function SongDetail() {
  const [song, setSong] = useState({});
  const params = useParams();

  useEffect(() => {
    async function fetchSingleSong() {
      const songData = await getSingleSong(params.id);

      setSong(songData);
    }

    fetchSingleSong();
  }, [params.id]);

  return (
    <div className="song-detail">
      <h3>{song.track_name}</h3>
      <h4>{song.artist_name}</h4>
      <p>Popularity Score: {song.popularity}</p>
      <p>Danceability Score: {song.danceability}</p>
      <p>Loudness (Higher the value, louder the song): {song.loudness}</p>
      <p>How likely the song is a live recording: {song.liveness}</p>
      <p>Duration in milliseconds: {song.duration_ms}</p>
    </div>
  );
}
