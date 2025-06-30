export interface PlayerNames {
  players: string[];
}

export interface PlayerProfile {
  avatar: string;
  country: string;
  followers: number;
  is_streamer: boolean;
  joined: number;
  last_online: number;
  league?: string;
  location?: string;
  name?: string;
  player_id: number;
  status: string;
  streaming_platforms: string[];
  title?: string;
  url: string;
  username: string;
  verified: boolean;
}
