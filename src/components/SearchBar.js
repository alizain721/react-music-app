import React from 'react';
import  { AutoComplete, Button, Icon } from 'antd';


class SearchBar extends React.Component {
  render() {
    return(
      <div className="search-background ">
        <AutoComplete
          size={"large"}
          style={{ width: 400 }}
          onSelect={ this.onSelect }
          onChange={ this.props.onChange }
          placeholder="Search Video"
        >
        </AutoComplete>
        <Button style={{ "marginLeft":"5px" }} size={"large"}><Icon type={"search"}/></Button>
    </div>
    );
  }
}

export default SearchBar;
