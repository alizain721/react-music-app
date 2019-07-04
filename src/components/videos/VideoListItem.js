import React from 'react';

class VideoListItem extends React.Component {
  render() {
    const video = this.props.video;
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
      <li onClick={ () => this.props.onUserSelected() } className="video-list-item">
        <div>
          <img src={ imageUrl } alt={ video.snippet.title }/>
          <span style={{ "color": "#444"}}>{ video.snippet.title }</span>
        </div>
      </li>
    );
  }
}

export default VideoListItem;
