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
    setTimeout( () => {
      if( value === ''){
        this.setState({ videos: [], selectedVideo: null });
        return;
      }

      if( this.state.search ) {
      }

      setTimeout( () => {
        this.setState({ search: true });
      }, 5000);

    }, 2000);

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

}

export default App;
