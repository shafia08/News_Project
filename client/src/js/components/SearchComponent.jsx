import React from 'react';

export default class SearchComponent extends React.Component{

  constructor()
  {
    super();
    this.searchProvider=this.searchProvider.bind(this);
  }
  searchProvider()
  {
    this.props.search(document.getElementById("SearchText").value);
  }
  render(){
    //child will always access the parent's data as props.//
    return (
      <div>

      <input type = "Text" name="SearchText" id = "SearchText" width="200px" height="200px" />
      <button onClick={this.searchProvider}>Search</button>
      
      </div>
    )
  }
}
