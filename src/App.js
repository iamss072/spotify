import React,{useEffect,useState} from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { DataLayer,useDataLayerValue } from './DataLayer';

const spotify=new SpotifyWebApi();

function App() {
  //run code based on a given condition
  
  const [{user,token},dispatch]=useDataLayerValue();


  useEffect(() => {
    const hash=getTokenFromUrl();
    // console.log(token);
    window.location.hash="";
    const _token=hash.access_token;

    if(_token){

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })


      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log(user);
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists
        })
      })
    }
  }, [])
  return (
    <div className="app">
      {
        token?(
          <Player spotify={spotify}/>
          // <h1>logged</h1>
        ):(
          <Login/>
        )
      }
    </div>
  );
}

export default App;
