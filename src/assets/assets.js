//-------IMPORT--------

//icons
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import kmusic_logo from './kmusic-logo.png'
import clock_icon from './clock_icon.png'
//popular artist
import billie from './billie.png'
import chappell from './chappell.png'
import rosalia from './rosalia.png'
import misamo from './misamo.png'
import mac from './mac.png'
import kendrick from './kendrick.png'
//best of artist
import kali from './this-kali.png'
import charli from './this-charli.png'
import twice from './this-twice.png'
import tyler from './this-tyler.png'
import doja from './this-doja.png'
import badbunny from './this-bad.png'
//feature charts
import globalsongs from './global-songs.png'
import panamasongs from './panama-songs.png'
import global50 from './global-top50.png'
import panama50 from './panama-top50.png'
import summer from './summer-vibes.png'
import metime from './me-time.png'
// todays top hit
import twicest from './strategy.png'
import billiebirds from './birds-feather.png'
import kendrickluther from './luther.png'
import gagasmile from './die-with-smile.png'
import chaliapple from './apple.png'
import chappelluck from './good-luck-babe.png'
//music (mp3)
import strategy from  './Strategy-twice.mp3'
import birds from  './billie-boaf.mp3'
import luther from  './KendrickLamar-luther.mp3'
import smile from  './Lady-Mars-DieWithASmile.mp3'
import apple from  './Charlixcx-Apple.mp3'
import goodluck from  './ChappellRoan-GoodLuck,Babe.mp3'


//-------EXPORT--------
//icons
export const assets = {
    home_icon,
    like_icon,
    stack_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    kmusic_logo,
    clock_icon
}

//popular artists
export const artistData = [
    {   
        id:0,
        name: "Billie Eilish",
        image: billie,
        desc:"Artist"
    },
    {   
        id:1,
        name: "Chappell Roan",
        image: chappell,
        desc:"Artist"
    },
    {   
        id:2,
        name: "ROSALÍA",
        image: rosalia,
        desc:"Artist"
    },
    {   
        id:3,
        name: "MISAMO",
        image: misamo,
        desc:"Artist",
    },
    {   
        id:4,
        name: "Mac Miller",
        image: mac,
        desc:"Artist"
    },
    {   
        id:5,
        name: "Kendrick Lamar",
        image: kendrick,
        desc:"Artist"
    }
]

//best of artist
export const thisisData = [
    {   
        id:0,
        name: "Kodigo's Playlist",
        image: kali,
        desc:"This is Kali Uchis.The essential tracks, all in one playlist.",
        bgColor:"#C74C8A"
    },
    {   
        id:1,
        name: "Kodigo's Playlist",
        image: charli,
        desc:"This is Charli xcx.The essential tracks, all in one playlist.",
        bgColor:"#7AB407"
    },
    {   
        id:2,
        name: "Kodigo's Playlist",
        image: twice,
        desc:"This is TWICE.The essential tracks, all in one playlist.",
        bgColor:"#4E0602"
    },
    {   
        id:3,
        name: "Kodigo's Playlist",
        image: tyler,
        desc:"This is Tyler, The Creator.The essential tracks, all in one playlist.",
        bgColor:"#84BED9"
    },
    {   
        id:4,
        name: "Kodigo's Playlist",
        image: doja,
        desc:"This is Doja Cat.The essential tracks, all in one playlist.",
        bgColor:"#8D7B70"
    },
    {   
        id:5,
        name: "Kodigo's Playlist",
        image: badbunny,
        desc:"This is Bad Bunny.The essential tracks, all in one playlist.",
        bgColor:"#112A45"
    }
]

//feature charts
export const albumsData = [
    {   
        id:0,
        name: "Top Songs Global",
        image: globalsongs,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#3A105F"
    },
    {   
        id:1,
        name: "Top Songs Panama",
        image: panamasongs,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#700712"
    },
    {   
        id:2,
        name: "Top 50 Global",
        image: global50,
        desc:"Your daily update of the most played tracks",
        bgColor:"#1C8075"
    },
    {   
        id:3,
        name: "Top 50 Panama",
        image: panama50,
        desc:"Your daily update of the most played tracks",
        bgColor:"#9F260B"
    },
    {   
        id:4,
        name: "Summer Vibes",
        image: summer,
        desc:"Sunny days are ahead and so is this playlist",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Me time",
        image: metime,
        desc:"Light a candle, run a bath - you deserve it",
        bgColor:"#B7146E"
    }
]

//todays top hit
export const songsData = [
    {
        id:0,
        name: "Strategy (feat. Megan Thee Stallion)",
        image: twicest,
        file:strategy,
        desc:"TWICE",
        duration:"2:46"
    },
    {
        id:1,
        name: "BIRDS OF A FEATHER",
        image: billiebirds,
        file:birds,
        desc:"Billie Eilish",
        duration:"3:31"
    },
    {
        id:2,
        name: "luther (feat. SZA)",
        image: kendrickluther,
        file:luther,
        desc:"Kendrick Lamar",
        duration:"2:57"
    },
    {
        id:3,
        name: "Die with A Smile",
        image: gagasmile,
        file:smile,
        desc:"Lady Gaga, Bruno Mars",
        duration:"4:49"
    },
    {
        id:4,
        name: "Apple",
        image: chaliapple,
        file:apple,
        desc:"Charli xcx",
        duration:"2:34"
    },
    {
        id:5,
        name: "Good luck, Babe!",
        image: chappelluck,
        file:goodluck,
        desc:"Chappell Roan",
        duration:"3:38"
    }, 
]