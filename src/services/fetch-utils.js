import { client, checkError } from './client';

export async function getSongs(from = 0, to = 30) {
  const response = await client.from('2021_songs').select().range(from, to);

  return checkError(response);
}

export async function getSingleSong(id) {
  const response = await client.from('2021_songs').select().match({ id }).single();

  return checkError(response);
}
