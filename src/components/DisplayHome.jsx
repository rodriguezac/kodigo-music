import React from 'react'
import Navbar from './Navbar'
import { artistData } from '../assets/assets';
import ArtistItem from './ArtistItem';
import {thisisData} from '../assets/assets'
import ThisIsItem from './ThisIsItem'
import {albumsData} from '../assets/assets'
import AlbumItem from './AlbumItem'
import {songsData} from '../assets/assets'
import SongsItem from './AlbumItem'

function DisplayHome() {
    return (
        <>
            <Navbar />
            {/* Popular artist */}
            <div className="mb-4">
                <h1 className='my-5 font-bold text-xl'>Popular artists</h1>
                <div className="flex overflow-auto">
                    {artistData.map((item, index) => (<ArtistItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
                </div>
            </div>
            {/* Best artist */}
            <div className="mb-4">
                <h1 className='my-5 font-bold text-xl'>Best artists</h1>
                <div className="flex overflow-auto">
                    {thisisData.map((item, index) => (<ThisIsItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
                </div>
            </div>
            {/* Top Album */}
            <div className="mb-4">
                <h1 className='my-5 font-bold text-xl'>Featured Charts</h1>
                <div className="flex overflow-auto">
                    {albumsData.map((item, index) => (<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
                </div>
            </div>
            {/* Today's Top Hits */}
            <div className="mb-4">
                <h1 className='my-5 font-bold text-xl'>Today’s Top Hit</h1>
                <div className="flex overflow-auto">
                    {songsData.map((item, index) => (<SongsItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
                </div>
            </div>

        </>
    )
}

export default DisplayHome