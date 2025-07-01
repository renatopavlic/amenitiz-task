import { useCallback, useRef, useState } from 'react';

import { useGrandmasters } from '../hooks/useGrandmasters';
import SkeletonGrandmasterList from '../components/SkeletonGrandmasterList';
import GrandmasterRow from '../components/GrandmasterRow';

const SLICE_SIZE = 20;

const HomePage = () => {
  const { players, isLoading, error } = useGrandmasters();
  const [visibleCount, setVisibleCount] = useState(SLICE_SIZE);
  const observer = useRef<IntersectionObserver | null>(null);

  const lastPlayerRef = useCallback(
    (node: HTMLAnchorElement | null) => {
      if (isLoading) {
        return;
      }
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && visibleCount < players.length) {
          setVisibleCount((prevCount) => {
            const nextCount = prevCount + SLICE_SIZE;
            const maxCount = players.length;
            return nextCount > maxCount ? maxCount : nextCount;
          });
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, visibleCount, players.length]
  );

  const visiblePlayers = players.slice(0, visibleCount);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-gray-300">Grandmaster List</h1>

      {error && <p>{error}</p>}

      {isLoading ? (
        <SkeletonGrandmasterList />
      ) : (
        <div className="flex flex-col gap-6">
          {visiblePlayers.map((name, index) => {
            const isLast = index === visiblePlayers.length - 1;
            return (
              <GrandmasterRow
                key={name}
                name={name}
                index={index}
                ref={isLast ? lastPlayerRef : undefined}
              />
            );
          })}
          {visibleCount < players.length && (
            <p className="text-center text-sm text-gray-400">Loading more...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
