import { useEffect, useState } from 'react';
import './App.css';
import { getSongs } from './services/fetch-utils';
import SongList from './SongList';

function App() {
  const [songs, setSongs] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    async function fetchSongs() {
      const from = page * perPage - perPage;
      const to = page * perPage - 1;
      const songsData = await getSongs(from, to);

      setSongs(songsData);
    }
    fetchSongs();
  }, [page]);

  return (
    <>
      <h2>Current Page {page}</h2>
      <div className="buttons">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous Page
        </button>
        <button onClick={() => setPage(page + 1)}>Next Page</button>
      </div>
      <SongList songs={songs} />
    </>
  );
}

export default App;
