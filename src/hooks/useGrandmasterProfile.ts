import { useEffect, useState } from 'react';

import { getGrandmasterProfile } from '../services/chessApi';
import type { PlayerProfile } from '../types/players';

export const useGrandmasterProfile = (username: string | undefined) => {
  const [profile, setProfile] = useState<PlayerProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) {
      setError('Username is missing');
      setIsLoading(false);
      return;
    }

    const fetchProfile = async () => {
      try {
        const data = await getGrandmasterProfile(username);
        setProfile(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load profile.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [username]);

  return { profile, isLoading, error };
};
