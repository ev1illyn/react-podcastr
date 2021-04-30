import { createContext } from "react";

type Episode = {
    title: string;
    members: string;
    thumbnail: string;
    duration: string;
    url: string;
};

type PlayerContextData = {
    episodeList: Episode[];
    currentEpisodeIndex: number;
    isPlaying: boolean;
    play: (episode: Episode) => void;
    setPlayingState: (state: boolean) => void;
    togglePlay: () => void;
};

// PAREI NA AULA 04 - 00:41:11

// exportando valor inicial objeto PlayerContext
export const PlayerContext = createContext({} as PlayerContextData);