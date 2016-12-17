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
     
      return (

        <div className="container-fluid">
        
         <div className="row">
          <div className="col-md-12">
                 <div className="jumbotron">
                     <div className="form-group">
                      <input type="text" className="form-control input-lg"  placeholder="Search" id = "SearchText"/>
                      
                      <div className="input-group-btn-lg">
                        <center><button className="btn btn-success" onClick={this.searchProvider}>SEARCH
                        </button></center>
                      </div>
                    </div>
                 </div>
             </div>
         </div>
     </div>
        
        
      );
    }
  }
