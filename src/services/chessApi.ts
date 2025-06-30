export const getGrandmasterPlayers = async () => {
  const res = await fetch('https://api.chess.com/pub/titled/GM');
  const data = await res.json();
  return data;
};

export const getGrandmasterProfile = async (username: string) => {
  const res = await fetch(` https://api.chess.com/pub/player/${username}`);
  const data = await res.json();
  return data;
};
