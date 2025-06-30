import { useEffect, useState } from 'react';
import { getGrandmasterPlayers } from '../services/chessApi';
import { Link } from 'react-router';
import SkeletonGrandmasterList from '../components/SkeletonGrandmasterList';

const HomePage = () => {
  const [players, setPlayers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const data = await getGrandmasterPlayers();
        setPlayers(data.players);
      } catch (e) {
        console.error(e);
        setError('Error fetching players');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  if (isLoading) return <SkeletonGrandmasterList />;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-gray-300">Grandmaster List</h1>
      <div className="flex flex-col gap-6">
        {players.map((name, index) => (
          <Link
            to={`/profile/${name}`}
            className="bg-neutral-800 rounded-2xl px-6 py-4 hover:bg-neutral-700 transition duration-200"
          >
            <p className="font-bold">
              {index + 1}. {name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
