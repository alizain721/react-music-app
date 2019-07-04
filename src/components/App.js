import React from 'react';
import { Icon, notification } from 'antd';
import YTSearch from 'youtube-api-search';

import '../stylesheets/App.css';
import SearchBar from './SearchBar'
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      search: true,
      selectedVideo: {}
    };
    this.welcome();
  }

  handleChange = (value) => {
      if( value === ''){
        this.setState({ videos: [], selectedVideo: null });
        return;
      }
      if( this.state.search && value.length > 16) {
        this.videoSearch( value );
      }
  };


  render() {
    return(
      <div>
        <SearchBar> </ SearchBar>
      </div>
    );
  }

  welcome = () => {
    notification.open({
      message: 'Hey nice to see you here',
      description: 'Let us start by searching for some videos',
      icon: <Icon type="smile" style={{ color: '#108ee9' }} />
    })
  }

  videoSearch( term ) {
    if( this.state.search ) {
      YTSearch({ key: API_KEY, term }, (data) => {
        try {
          if( data && data.data && data.data.error.message ) {
            console.log(data);
            throw ('error')
          }
        this.setState({ videos: data, selectedVideo: data[0] });
          console.log( this.state.videos );
        } catch( err ){
            notification['error']({
              message: "Daily Limit Exceeded",
              description: "Youtube data API daily limit have exceeded"
            })
          }
         });
      }
  }
}

export default App;
