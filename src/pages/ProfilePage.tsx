import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getGrandmasterProfile } from '../services/chessApi';
import type { PlayerProfile } from '../types/players';

const ProfilePage = () => {
  const { username } = useParams();
  const [profile, setProfile] = useState<PlayerProfile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPlayerProfile = async () => {
      try {
        const data = await getGrandmasterProfile(username!);
        setProfile(data);
        console.log('profile data: ', data);
      } catch (e) {
        console.error(e);
        setError('Error fetching players');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlayerProfile();
  }, [username]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col gap-6">
      <img src={profile?.avatar} alt={profile?.name} className="w-10 h-10" />
      {/* <p>country: {profile?.country}</p> */}
      <p>followers: {profile?.followers}</p>
      <p>is_streamer: {profile?.is_streamer ? 'true' : 'false'}</p>
      <p>joined: {profile?.joined}</p>
      <p>last_online: {profile?.last_online}</p>
      <p>league: {profile?.league}</p>
      <p>location: {profile?.location}</p>
      <h1>name: {profile?.name}</h1>
      <p>status: {profile?.status}</p>
      {/* <p>streaming_platforms: {profile?.streaming_platforms}</p> */}
      <p>title: {profile?.title}</p>
      <p>url: {profile?.url}</p>
      <p>username: {profile?.username}</p>
      <p>verified: {profile?.verified ? 'true' : 'false'}</p>
    </div>
  );
};

export default ProfilePage;
