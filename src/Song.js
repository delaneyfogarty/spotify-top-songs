import { Link } from 'react-router-dom';

export default function Song({ song }) {
  return (
    <div>
      <Link to={`/songs/${song.id}`}>Detail Page</Link>
      <h1>{song.track_name}</h1>
      <p>{song.artist_name}</p>
    </div>
  );
}
