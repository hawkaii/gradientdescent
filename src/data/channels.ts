export type Channel = {
  name: string;
  niche: string;
  handle: string;
  platform: 'instagram' | 'youtube' | 'both';
  logo: string;
  url: string;
};

export const channels: Channel[] = [
  {
    name: 'SeteFootball',
    niche: 'Football',
    handle: '@setefootball.mp4',
    platform: 'both',
    logo: '/media/channels/setefootball.png',
    url: 'https://instagram.com/setefootball.mp4',
  },
  {
    name: 'Ki Khobor',
    niche: 'Bengali news',
    handle: '@kikhobor',
    platform: 'both',
    logo: '/media/channels/kikhobor.png',
    url: '#',
  },
  {
    name: 'Guddu',
    niche: 'Anime & skits',
    handle: '@guddusenpai',
    platform: 'youtube',
    logo: '/media/channels/guddu.png',
    url: '#',
  },
];
