import React from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { albumsData, assets, songsData } from '../assets/assets';

const DisplayAlbum = () => {
  const { id } = useParams();

  
  const album = albumsData.find(album => album.id === Number(id));

  // Manejar si no se encuentra el álbum
  if (!album) {
    return (
      <>
        <Navbar />
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold">Álbum no encontrado</h2>
          <p className="text-gray-400">Por favor, selecciona un álbum válido.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        {/* Imagen del álbum */}
        <img className="w-48 rounded" src={album.image} alt="Playlist Cover" />
        {/* Información del álbum */}
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">{album.name}</h2>
          <h4>{album.desc}</h4>
          <p className="mt-1">
            <img className="inline-block w-5" src={assets.kmusic_logo} alt="Kodigo Music Logo" />
            <b>Kodigo Music</b> • 2,606,184 likes • 6 songs, 20 min 12sec
          </p>
        </div>
      </div>

      {/* Encabezado de las columnas */}
      <div className="grid grid-cols-2 sm:grid-cols-3 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p className="col-span-2 sm:col-span-1">
          <b className="mr-4">#</b> Title
        </p>
        <p className="hidden sm:block">Artist</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="clock icon" />
      </div>
      <hr />

      {/* Listado de canciones */}
      {
        songsData.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-black cursor-pointer"
          >
            {/* Título*/}
            <div className="col-span-4 sm:col-span-1">
              <p className="text-white truncate">
                <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
                <img className="inline w-10 mr-5" src={item.image} alt="" />
                {item.name}
              </p>
              
            </div>

            {/* Artista visible solo en pantallas normales */}
            <p className="hidden sm:block text-[15px]">{item.desc}</p>

            {/* Duración */}
            <p className="text-[15px] text-center">{item.duration}</p>
          </div>
        ))
      }
    </>
  );
};

export default DisplayAlbum;
