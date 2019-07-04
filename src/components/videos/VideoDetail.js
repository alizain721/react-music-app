import React from 'react';
import { Icon } from "antd";

class VideoDetail extends React.Component {
  state = {
    video: null
  };

  componentDidUpdate(prevProps) {
    if( this.props.video && ( prevProps.video !== this.props.video)  ) {
      this.setState({ video: this.props.video })
    }
  }

  render() {
    const video = this.state.video;
    if( !video ) {
      return (
        <div className="empty-box">
            <h1 className="youtube-icon-heading"><Icon type={"youtube"}/></h1>
        </div>
      )
  }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${ videoId }`;
    return (
      <div>
        <div className={"embed-responsive embed-responsive-16by9"}>
          <iframe title={ video.snippet.title } className={"embed-responsive-item"} src={url} allowFullScreen />
        </div>
        <div>
          <h2>
              { video.snippet.title }
          </h2>
          <div>
              { video.snippet.description }
          </div>
        </div>
      </div>
    )
  }
}

export default VideoDetail;
