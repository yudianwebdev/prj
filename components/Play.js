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
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 17C10 18.1 9.09998 19 8 19C6.90002 19 6 18.1 6 17V7C6 5.9 6.90002 5 8 5C9.09998 5 10 5.9 10 7V17ZM14 17V7C14 5.9 14.9 5 16 5C17.1 5 18 5.9 18 7V17C18 18.1 17.1 19 16 19C14.9 19 14 18.1 14 17Z"
              fill="#ffffff"
              fill-opacity="0.54"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.92749 6.82V17.18C6.92749 17.97 7.79749 18.45 8.46749 18.02L16.6075 12.84C17.2275 12.45 17.2275 11.55 16.6075 11.15L8.46749 5.98C7.79749 5.55 6.92749 6.03 6.92749 6.82Z"
              fill="#ffffff"
              fill-opacity="0.54"
            />
          </svg>
        )}
      </button>
    );
  }
}

export default withMediaProps(CustomPlayPause);
