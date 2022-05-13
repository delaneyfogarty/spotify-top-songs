import { Link } from 'react-router-dom';

export default function Song({ song }) {
  return (
    <div>
      <h3>{song.track_name}</h3>
      <p>{song.artist_name}</p>
      <Link to={`/songs/${song.id}`}>Detail Page</Link>
    </div>
  );
}
