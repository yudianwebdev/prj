import React, { Component } from "react";
import { Media, Player, controls } from "react-media-player";
import Play from "../../components/Play";
import Playpause from "../../components/Playpause";

class MediaPlayer extends Component {
  render() {
    return (
      <Media>
        <div className="relative">
          <Player
            src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4"
            className="rounded-lg"
          />
          <div className="absolute h-full w-full flex flex-col items-center top-0">
            <Playpause className="focus:outline-none w-full h-full flex items-center" />
            <div className="w-full h-1 bg">
              <div></div>
            </div>
            <div className="inset-bottom-0 bot">
              <Play />
            </div>
          </div>
        </div>
      </Media>
    );
  }
}

export default MediaPlayer;
