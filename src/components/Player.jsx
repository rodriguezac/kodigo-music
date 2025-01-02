import React from 'react';
import { assets, songsData} from '../assets/assets';

const Player = () => {
  
  return (
    <div className="h-[10%] w-full bg-black flex justify-between items-center text-white px-4 fixed bottom-0">
      {/* Información de la canción */}
      <div className="hidden lg:flex items-center gap-4 mr-32 max-w-[300px]">
        <img className="w-12" src={songsData[0].image} alt="Información de la canción" />
        <div className="flex flex-col">
          <p className="text-sm font-bold truncate">{songsData[0].name}</p>
          <p className="text-xs text-gray-400 truncate">{songsData[0].desc}</p>
        </div>
      </div>

      {/* Contenedor central */}
      <div className="flex flex-col items-center gap-2  mx-auto ">
        {/* Controles de reproducción */}
        <div className="flex gap-4">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="shuffle icon" />
          <img className="w-4 cursor-pointer" src={assets.prev_icon} alt="previous icon" />
          <img className="w-4 cursor-pointer" src={assets.play_icon} alt="play icon" />
          <img className="w-4 cursor-pointer" src={assets.next_icon} alt="next song icon" />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="loop icon" />
        </div>

        {/* Barra de música */}
        <div className="flex items-center gap-5 text-[12px]">
          <p>1:00</p>
          <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr className="h-1 border-none w-40 bg-[#482368] rounded-full" />
          </div>
          <p>2:46</p>
        </div>
      </div>

      {/* Íconos secundarios */}
      <div className="hidden lg:flex items-center gap-2 opacity-75 ml-14">
        <img className="w-4 cursor-pointer" src={assets.plays_icon} alt="play icon" />
        <img className="w-4 cursor-pointer" src={assets.mic_icon} alt="mic icon" />
        <img className="w-4 cursor-pointer" src={assets.queue_icon} alt="queue icon" />
        <img className="w-4 cursor-pointer" src={assets.speaker_icon} alt="speaker icon" />
        <img className="w-4 cursor-pointer" src={assets.volume_icon} alt="volume icon" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img className="w-4 cursor-pointer" src={assets.mini_player_icon} alt="mini player icon" />
        <img className="w-4 cursor-pointer" src={assets.zoom_icon} alt="zoom icon" />
      </div>
    </div>
  );
};

export default Player;
