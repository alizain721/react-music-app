import React from 'react';
import { Icon, notification } from 'antd';

import '../stylesheets/App.css';
import SearchBar from './SearchBar'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.welcome();
  }

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
