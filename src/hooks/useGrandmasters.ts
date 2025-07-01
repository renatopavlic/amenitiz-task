import { useEffect, useState } from 'react';
import { getGrandmasterPlayers } from '../services/chessApi';

export const useGrandmasters = () => {
  const [players, setPlayers] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const data = await getGrandmasterPlayers();
        setPlayers(data.players);
      } catch (err) {
        console.error(err);
        setError('Failed to load grandmasters.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  return { players, isLoading, error };
};
