import React, { Component } from "react";
import { withMediaProps } from "react-media-player";

class CustomPlayPause extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying;
  }

  _handlePlayPause = () => {
    this.props.media.playPause();
  };

  render() {
    const { className, style, media } = this.props;
    return (
      <button
        type="button"
        className={className}
        style={style}
        onClick={this._handlePlayPause}
      >
        {media.isPlaying ? (
          <div className="items-center justify-center hover:opacity-50 hover:scale-100  flex h-full w-full">
            <div className="w-10 h-10 bg-red-500 transition duration-1000 ease-in-out opacity-0 transform -translate-y-1  scale-150 rounded-full items-center justify-center flex ">
              <h1>Pause</h1>
            </div>
          </div>
        ) : (
          <div className="items-center justify-center  flex h-full w-full"></div>
        )}
      </button>
    );
  }
}

export default withMediaProps(CustomPlayPause);
