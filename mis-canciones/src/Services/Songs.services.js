export const getArtist = (artist)=> {
  let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
  return fetch(artistUrl);
}