import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header'; 
import Player from './components/Player';
import Display from './components/Display';


export const App = () => {
  return (
    <div className="h-screen bg-black">
      {/* Header */}
      <Header />

      <div className="h-[90%] flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Display */}
        <Display />
      </div>
      {/* Player */}
      <Player />
    </div>
  );
};

export default App;
