import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  ChevronUp, 
  ChevronDown,
  ListMusic,
  ExternalLink,
  Disc3
} from 'lucide-react';
import { SpotifyIcon } from './Icons';

const PLAYLIST = [
  // --- THE 1975 (DEFAULT SPOTLIGHT) ---
  {
    id: 'the-1975-about-you',
    spotifyId: '3hEfpBHxgieRLz4t3kLNEg',
    title: 'About You',
    album: 'Being Funny In A Foreign Language',
    artist: 'The 1975',
    genre: 'Dream Pop / Indie',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1f/c7/98/1fc7988e-0a39-5724-1390-e45246250e24/198704825934_Cover.jpg/300x300bb.jpg',
    spotifyUrl: 'https://open.spotify.com/track/3hEfpBHxgieRLz4t3kLNEg'
  },
  {
    id: 'the-1975-robbers',
    spotifyId: '73jVPicY2G9YHmzgjk69ae',
    title: 'Robbers',
    album: 'The 1975 (Deluxe)',
    artist: 'The 1975',
    genre: 'Indie Rock',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/7f/3b/6e/7f3b6e0f-ac35-98ff-f27f-fc51db0efea4/13UAAIM67470.rgb.jpg/300x300bb.jpg',
    spotifyUrl: 'https://open.spotify.com/track/73jVPicY2G9YHmzgjk69ae'
  },
  {
    id: 'the-1975-chocolate',
    spotifyId: '4jgrqD6WdrX1h81t810Q62',
    title: 'Chocolate',
    album: 'The 1975 (Deluxe)',
    artist: 'The 1975',
    genre: 'Indie Pop',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/7f/3b/6e/7f3b6e0f-ac35-98ff-f27f-fc51db0efea4/13UAAIM67470.rgb.jpg/300x300bb.jpg',
    spotifyUrl: 'https://open.spotify.com/track/4jgrqD6WdrX1h81t810Q62'
  },
  {
    id: 'the-1975-the-sound',
    spotifyId: '7Jzsc94oFkXsl5bB3G88eR',
    title: 'The Sound',
    album: 'I like it when you sleep...',
    artist: 'The 1975',
    genre: 'Synthpop / Dance',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/8c/7f/98/8c7f9860-fea6-e34b-3b4b-ccf3f9408d60/15UMGIM75912.rgb.jpg/300x300bb.jpg',
    spotifyUrl: 'https://open.spotify.com/track/7Jzsc94oFkXsl5bB3G88eR'
  },
  {
    id: 'the-1975-its-not-living',
    spotifyId: '3TgMcrV32NUKjEG2ujn9eh',
    title: "It's Not Living (If It's Not With You)",
    album: 'A Brief Inquiry Into Online Relationships',
    artist: 'The 1975',
    genre: 'New Wave / Pop',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ea/24/e2/ea24e228-6bf1-625a-11dc-d83d5ee780e6/18UMGIM53788.rgb.jpg/300x300bb.jpg',
    spotifyUrl: 'https://open.spotify.com/track/3TgMcrV32NUKjEG2ujn9eh'
  },
  {
    id: 'the-1975-fallingforyou',
    spotifyId: '7LbUv7w2z7rEbNqp1uIL9U',
    title: 'Fallingforyou',
    album: 'The 1975 (Deluxe)',
    artist: 'The 1975',
    genre: 'Ambient Indie',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/1e/bc/71/1ebc7173-6bcd-26d9-3a67-1d3ceffded78/13UAAIM67470.rgb.jpg/300x300bb.jpg',
    spotifyUrl: 'https://open.spotify.com/track/7LbUv7w2z7rEbNqp1uIL9U'
  },
  {
    id: 'the-1975-paris',
    spotifyId: '0bN5i8d0jXhJq3wW3C11J4',
    title: 'Paris',
    album: 'I like it when you sleep...',
    artist: 'The 1975',
    genre: 'Dream Pop',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/8c/7f/98/8c7f9860-fea6-e34b-3b4b-ccf3f9408d60/15UMGIM75912.rgb.jpg/300x300bb.jpg',
    spotifyUrl: 'https://open.spotify.com/track/0bN5i8d0jXhJq3wW3C11J4'
  },

  // --- THE WEEKND ---
  {
    id: 'blinding-lights',
    spotifyId: '0VjIjW4GlUZAMYd2vXMi3b',
    title: 'Blinding Lights',
    album: 'After Hours',
    artist: 'The Weeknd',
    genre: 'R&B / Synthwave',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/6f/bc/e6/6fbce6c4-c38c-72d8-4fd0-66cfff32f679/20UMGIM12176.rgb.jpg/300x300bb.jpg',
    spotifyUrl: 'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b'
  },
  {
    id: 'starboy',
    spotifyId: '7MXVkk9YM5IZxh0WSlVIh0',
    title: 'Starboy (feat. Daft Punk)',
    album: 'Starboy',
    artist: 'The Weeknd',
    genre: 'R&B / Electro',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/92/bb/b592bb72-52e3-e756-9b26-9f56d08f47ab/16UMGIM67864.rgb.jpg/300x300bb.jpg',
    spotifyUrl: 'https://open.spotify.com/track/7MXVkk9YM5IZxh0WSlVIh0'
  },
  {
    id: 'save-your-tears',
    spotifyId: '5QO79kh1waicV47BqGRL3g',
    title: 'Save Your Tears',
    album: 'After Hours',
    artist: 'The Weeknd',
    genre: 'Synthpop',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/83/3a/f7/833af71b-2e0c-3303-24f5-8f5c546c073b/20UMGIM21167.rgb.jpg/300x300bb.jpg',
    spotifyUrl: 'https://open.spotify.com/track/5QO79kh1waicV47BqGRL3g'
  },

  // --- ONE DIRECTION ---
  {
    id: 'night-changes',
    spotifyId: '5iXzpQ8Tgvnts4HNlL0FHT',
    title: 'Night Changes',
    album: 'FOUR (Deluxe)',
    artist: 'One Direction',
    genre: 'Pop / Acoustic',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/62/2d/19/622d19da-eb88-022c-2bc5-d843657defe8/886444549851.jpg/300x300bb.jpg',
    spotifyUrl: 'https://open.spotify.com/track/5iXzpQ8Tgvnts4HNlL0FHT'
  },
  {
    id: 'story-of-my-life',
    spotifyId: '4nVBt6MZDDP6tRVdQTgxJg',
    title: 'Story of My Life',
    album: 'Midnight Memories',
    artist: 'One Direction',
    genre: 'Folk Pop',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/73/f7/aa/73f7aa2b-bd94-a528-c42b-24a3e588e21b/dj.yyouuvfg.jpg/300x300bb.jpg',
    spotifyUrl: 'https://open.spotify.com/track/4nVBt6MZDDP6tRVdQTgxJg'
  },

  // --- THE BEATLES ---
  {
    id: 'beatles-here-comes-the-sun',
    spotifyId: '6dGnYIeXmHdcikdzNNDMm2',
    title: 'Here Comes the Sun',
    album: 'Abbey Road',
    artist: 'The Beatles',
    genre: 'Classic Rock',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/df/db/61/dfdb615d-47f8-06e9-9533-b96daccc029f/18UMGIM31076.rgb.jpg/300x300bb.jpg',
    spotifyUrl: 'https://open.spotify.com/track/6dGnYIeXmHdcikdzNNDMm2'
  },
  {
    id: 'beatles-let-it-be',
    spotifyId: '7iN1s7xHE4ifF5povM6A48',
    title: 'Let It Be',
    album: 'Let It Be',
    artist: 'The Beatles',
    genre: 'Classic Rock / Ballad',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ae/98/4c/ae984c7a-cd06-a7cd-e8bf-32cb15ba698d/00602567705475.rgb.jpg/300x300bb.jpg',
    spotifyUrl: 'https://open.spotify.com/track/7iN1s7xHE4ifF5povM6A48'
  },

  // --- FAMOUS ROCK ANTHEMS ---
  {
    id: 'queen-bohemian-rhapsody',
    spotifyId: '2JiDi0qAXsPwhPqA2qaKGt',
    title: 'Bohemian Rhapsody',
    album: 'A Night At The Opera',
    artist: 'Queen',
    genre: 'Progressive Rock',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8b/0a/ea/8b0aea60-6f4a-195b-5958-cdf459c2333b/602527644271.jpg/300x300bb.jpg',
    spotifyUrl: 'https://open.spotify.com/track/2JiDi0qAXsPwhPqA2qaKGt'
  },
  {
    id: 'nirvana-teen-spirit',
    spotifyId: '4CeeEOM32jQcH3eN9Q2dGj',
    title: 'Smells Like Teen Spirit',
    album: 'Nevermind',
    artist: 'Nirvana',
    genre: 'Grunge / Alt Rock',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/95/fd/b9/95fdb9b2-6d2b-92a6-97f2-51c1a6d77f1a/00602527874609.rgb.jpg/300x300bb.jpg',
    spotifyUrl: 'https://open.spotify.com/track/4CeeEOM32jQcH3eN9Q2dGj'
  },

  // --- MORE WEEKND HITS ---
  {
    id: 'die-for-you',
    spotifyId: '2Ch7LmS7r2Gy2LmYDgg9Vg',
    title: 'Die For You',
    album: 'Starboy',
    artist: 'The Weeknd',
    genre: 'R&B / Soul',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e2/61/f8/e261f8c1-73db-9a7a-c89e-1068f19970e0/16UMGIM67863.rgb.jpg/300x300bb.jpg',
    spotifyUrl: 'https://open.spotify.com/track/2Ch7LmS7r2Gy2LmYDgg9Vg'
  },
  {
    id: 'the-hills',
    spotifyId: '7fBv7CLKzipRk6ECYdnWHQ',
    title: 'The Hills',
    album: 'Beauty Behind the Madness',
    artist: 'The Weeknd',
    genre: 'Dark R&B',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/30/05/1e/30051e57-a63a-3acc-4b30-42568293f5f7/15UMGIM36514.rgb.jpg/300x300bb.jpg',
    spotifyUrl: 'https://open.spotify.com/track/7fBv7CLKzipRk6ECYdnWHQ'
  },
  {
    id: 'i-feel-it-coming',
    spotifyId: '3dhjNA0jGA5umDTiLHEVqE',
    title: 'I Feel It Coming (feat. Daft Punk)',
    album: 'Starboy',
    artist: 'The Weeknd',
    genre: 'Disco Pop',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e2/61/f8/e261f8c1-73db-9a7a-c89e-1068f19970e0/16UMGIM67863.rgb.jpg/300x300bb.jpg',
    spotifyUrl: 'https://open.spotify.com/track/3dhjNA0jGA5umDTiLHEVqE'
  }
];

export default function MusicPlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [filter, setFilter] = useState('all');

  const currentTrack = PLAYLIST[currentTrackIndex];

  const handleNext = (e) => {
    e?.stopPropagation();
    setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
  };

  const handlePrev = (e) => {
    e?.stopPropagation();
    setCurrentTrackIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);
  };

  const selectTrack = (track) => {
    const idx = PLAYLIST.findIndex(t => t.id === track.id);
    if (idx !== -1) {
      setCurrentTrackIndex(idx);
    }
  };

  const filteredPlaylist = PLAYLIST.filter(track => {
    if (filter === '1975') return track.artist.includes('The 1975');
    if (filter === 'weeknd') return track.artist.includes('The Weeknd');
    if (filter === '1d') return track.artist.includes('One Direction');
    if (filter === 'rock') return track.artist.includes('Beatles') || track.artist.includes('Queen') || track.artist.includes('Nirvana');
    return true;
  });

  return (
    <>
      {/* Floating Cyber Music Widget (Bottom Left) */}
      <div className="fixed bottom-4 left-3 sm:bottom-6 sm:left-6 z-40 select-none max-w-[calc(100vw-85px)] sm:max-w-none">
        
        {/* Persistent Tracklist Drawer & Spotify Official Embed (Never unmounts, never pauses on minimize) */}
        <div className={`transition-all duration-300 origin-bottom-left ${
          isExpanded 
            ? 'opacity-100 scale-100 pointer-events-auto h-auto mb-2.5 w-[calc(100vw-1.5rem)] max-w-sm sm:w-96 rounded-3xl bg-zinc-950/95 border border-cyan-500/35 p-3.5 shadow-[0_0_45px_rgba(6,182,212,0.3)] backdrop-blur-2xl' 
            : 'opacity-0 scale-95 pointer-events-none h-0 mb-0 p-0 border-0 overflow-hidden'
        }`}>
          {/* Header with Spotify Brand & Playlist Title */}
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center">
                  <SpotifyIcon size={14} />
                </span>
                <div>
                  <h4 className="text-white font-bold text-xs">Saiyam's Playlist</h4>
                  <p className="text-[10px] text-emerald-400 font-mono">Spotify Connected • The 1975 Edition</p>
                </div>
              </div>
              
              <a
                href={currentTrack.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-[10px] font-mono flex items-center gap-1 transition-colors cursor-pointer"
                title="Open current track in Spotify"
              >
                <span>Spotify</span>
                <ExternalLink size={10} />
              </a>
            </div>

            {/* Spotify Official Secure Embed (Never triggers IDM downloads) */}
            <div className="mb-3 rounded-2xl overflow-hidden bg-black/80 border border-emerald-500/30 shadow-inner">
              <iframe
                src={`https://open.spotify.com/embed/track/${currentTrack.spotifyId}?utm_source=generator&theme=0`}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={`Spotify Player - ${currentTrack.title}`}
                className="w-full"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto pb-2 mb-2 text-[10px] font-mono border-b border-white/5 scrollbar-none">
              {[
                { id: 'all', label: 'All (19)' },
                { id: '1975', label: 'The 1975 (7)' },
                { id: 'weeknd', label: 'The Weeknd (6)' },
                { id: '1d', label: '1D (2)' },
                { id: 'rock', label: 'Rock (4)' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-2 py-1 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    filter === tab.id
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold'
                      : 'text-zinc-500 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Scrollable Song List */}
            <div className="max-h-48 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
              {filteredPlaylist.map((t) => {
                const isActive = t.id === currentTrack.id;
                return (
                  <div
                    key={t.id}
                    onClick={() => selectTrack(t)}
                    className={`flex items-center justify-between p-1.5 rounded-xl transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-cyan-500/15 border border-cyan-500/40' 
                        : 'hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <img
                        src={t.cover}
                        alt={t.title}
                        className="w-8 h-8 rounded-lg object-cover shrink-0 border border-white/10"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=150&q=80";
                        }}
                      />
                      <div className="truncate text-left">
                        <p className={`text-xs font-semibold truncate ${isActive ? 'text-cyan-300 font-bold' : 'text-zinc-200'}`}>
                          {t.title}
                        </p>
                        <p className="text-[10px] text-zinc-500 font-mono truncate">{t.artist} • {t.genre}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      {isActive && (
                        <div className="flex items-end gap-[2px] h-3">
                          <span className="w-0.5 h-2 bg-emerald-400 animate-pulse" />
                          <span className="w-0.5 h-3 bg-emerald-400 animate-pulse delay-75" />
                          <span className="w-0.5 h-1.5 bg-emerald-400 animate-pulse delay-150" />
                        </div>
                      )}

                      <a
                        href={t.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-lg bg-zinc-900 hover:bg-emerald-500/20 text-zinc-400 hover:text-emerald-400 border border-zinc-800 hover:border-emerald-500/40 transition-colors"
                        title="Listen on Spotify"
                      >
                        <SpotifyIcon size={12} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Spotify Connected
              </span>
              <span>19 Curated Tracks</span>
            </div>
          </div>

        {/* Main Floating Controller Capsule */}
        <div 
          className="flex items-center gap-1.5 sm:gap-2 p-1 pr-2 sm:p-1.5 sm:pr-3 rounded-full bg-zinc-950/95 border border-cyan-500/35 shadow-[0_0_35px_rgba(6,182,212,0.25)] hover:border-cyan-400/60 backdrop-blur-2xl transition-all group"
        >
          
          {/* Rotating Album Art Thumbnail */}
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden shrink-0 border border-white/20">
            <img
              src={currentTrack.cover}
              alt={currentTrack.title}
              className="w-full h-full object-cover animate-[spin_8s_linear_infinite]"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Disc3 size={14} className="text-cyan-300 animate-spin" />
            </div>
          </div>

          {/* Track Info & Visualizer */}
          <div className="flex flex-col justify-center max-w-[75px] xs:max-w-[110px] sm:max-w-[150px] pr-0.5 text-left">
            <div className="flex items-center gap-1">
              <span className="text-[10px] sm:text-[11px] font-bold text-white truncate block">
                {currentTrack.title}
              </span>
            </div>
            
            <div className="flex items-center gap-1 text-[8.5px] sm:text-[9px] font-mono text-cyan-400">
              <span className="truncate">{currentTrack.artist}</span>
              
              {/* Audio Waveform Indicator */}
              <div className="flex items-end gap-[1.5px] h-2 sm:h-2.5">
                <span className="w-[1.5px] sm:w-[2px] h-2 bg-emerald-400 animate-[bounce_0.8s_infinite]" />
                <span className="w-[1.5px] sm:w-[2px] h-2.5 sm:h-3 bg-emerald-400 animate-[bounce_0.6s_infinite]" />
                <span className="w-[1.5px] sm:w-[2px] h-1.5 bg-emerald-400 animate-[bounce_0.9s_infinite]" />
              </div>
            </div>
          </div>

          {/* Action Buttons: Prev, Play/Expand, Next, Spotify */}
          <div className="flex items-center gap-0.5 sm:gap-1">
            <button
              onClick={handlePrev}
              className="p-1 sm:p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer hidden xs:inline-flex"
              title="Previous Track"
            >
              <SkipBack size={12} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
              className="p-1.5 sm:p-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
              title="Open Spotify Player"
            >
              <Play size={12} className="ml-0.5" />
            </button>

            <button
              onClick={handleNext}
              className="p-1 sm:p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Next Track"
            >
              <SkipForward size={12} />
            </button>

            <a
              href={currentTrack.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1 sm:p-1.5 rounded-full text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 transition-colors cursor-pointer"
              title="Open Track on Spotify"
            >
              <SpotifyIcon size={13} />
            </a>

            <button
              onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
              className="p-0.5 sm:p-1 rounded-full text-zinc-500 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title={isExpanded ? "Close Playlist" : "View Playlist"}
            >
              {isExpanded ? <ChevronDown size={13} /> : <ChevronUp size={13} />}
            </button>
          </div>

        </div>

      </div>
    </>
  );
}
