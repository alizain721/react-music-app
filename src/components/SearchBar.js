import React from 'react';
import  { AutoComplete, Button, Icon } from 'antd';
const { Option } = AutoComplete;

class SearchBar extends React.Component {
  state = {
    videos: []
  };

  componentDidUpdate( prevProps ) {
    if( this.props.video && prevProps.video !== this.props.video ) {
      this.setState({ videos: this.props.videos })
    }
  }

  onSelect = (index ) => {
    this.props.handleSearch( index );
  };

  render() {
    const options = this.state.videos.map((video, index) => <Option key={ index } >{ video.snippet.title }</Option> )
    return(
      <div className="search-background ">
        <AutoComplete
          size={"large"}
          style={{ width: 400 }}
          onSelect={ this.onSelect }
          onChange={ this.props.onChange }
          placeholder="Search Video"
        >
        {options}

        </AutoComplete>
        <Button style={{ "marginLeft":"5px" }} size={"large"}><Icon type={"search"}/></Button>
    </div>
    );
  }
}

export default SearchBar;
