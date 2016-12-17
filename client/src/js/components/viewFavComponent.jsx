	import React from 'react';
	import FavChildComponent from './FavChildComponent.jsx';

	export default class viewFavComponent extends React.Component
	{

	  constructor()
	  {
	      super();
	      this.state={viewArr:[]};
	  }

	componentDidMount()
	{
		
		console.log("In Component Did Mount");
		 var that = this;
		      $.ajax({
			  url: "http://localhost:8080/news/viewnews",
			  type: "GET",
			  
			  
			  
		    	success : function(msg){
			    console.log('view news')
			    that.setState({viewArr:msg});

			  },
			  error: function(err){
			  console.log('error');
			  }
			});
	}

	render()
	{
	  	console.log("View Favorites plan = ");
		 	
		    return (
		    <FavChildComponent viewNews={this.state.viewArr}/>
		  
		   )
	}
}