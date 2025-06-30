import type { PlayerNames, PlayerProfile } from '../types/players';

export const getGrandmasterPlayers = async (): Promise<PlayerNames> => {
  const res = await fetch('https://api.chess.com/pub/titled/GM');
  const data = await res.json();
  return data;
};

export const getGrandmasterProfile = async (username: string): Promise<PlayerProfile> => {
  const res = await fetch(` https://api.chess.com/pub/player/${username}`);
  const data = await res.json();
  return data;
};
