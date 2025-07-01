import { useParams } from 'react-router';
import { formatUnixTimestampToDate } from '../utils/date';
import { getCountryCode } from '../utils/countryCode';
import SkeletonProfile from '../components/SkeletonProfile';
import { useGrandmasterProfile } from '../hooks/useGrandmasterProfile';
import TimeTicker from '../components/TimeTicker';

const ProfilePage = () => {
  const { username } = useParams();
  const { profile, isLoading, error } = useGrandmasterProfile(username);

  if (isLoading) return <SkeletonProfile />;
  if (error) return <p>{error}</p>;

  if (!profile) return <p>Profile not found</p>;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-6 bg-neutral-800 p-6">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-40 h-40"
          loading="lazy"
          decoding="async"
        />
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <span className="bg-rose-900 px-1">{profile.title}</span>
            <h1 className="text-2xl font-extrabold">{profile.username}</h1>
            <h1>{getCountryCode(profile.country)}</h1>
          </div>
          <h1 className="text-xl text-gray-400">{profile.name} </h1>
          <div className="flex gap-4 mt-auto">
            <h1 className="font-bold text-sm">
              {formatUnixTimestampToDate(profile.joined)}
              <span className="font-light text-gray-300 pl-2">Joind</span>
            </h1>
            <h1 className="font-bold text-sm">
              {profile.followers}
              <span className="font-light text-gray-300 pl-2">Followers</span>
            </h1>
            <h1 className="font-bold text-sm">
              <span className="font-light text-gray-300 pr-2">Last Online</span>
              {formatUnixTimestampToDate(profile.last_online)}
              <TimeTicker timestamp={profile.last_online} />
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-200">
        <div>
          <span className="text-gray-400">Streamer:</span> {profile.is_streamer ? 'Yes' : 'No'}
        </div>
        <div>
          <span className="text-gray-400">League:</span> {profile.league || '—'}
        </div>

        <div>
          <span className="text-gray-400">Status:</span> {profile.status || '—'}
        </div>
        <div>
          <span className="text-gray-400">Verified:</span> {profile.verified ? 'Yes' : 'No'}
        </div>
        <div className="col-span-2">
          <span className="text-gray-400">Profile URL:</span>{' '}
          <a
            href={profile.url}
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {profile.url}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
