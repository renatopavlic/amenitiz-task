import { useEffect, useState } from 'react';
import { getGrandmasterPlayers } from '../services/chessApi';
import { Link } from 'react-router';

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

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h1>Grandmaster List</h1>
      <div className="flex flex-col gap-4">
        {players.map((name, index) => (
          <div key={index}>
            <Link to={`/profile/${name}`}>
              {index + 1}: {name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
