	import React from 'react';
	export default class FavComponent extends React.Component
	{

	  constructor()
	  {
	      super();
	      this.state={viewArr:[]};
	  }

	ComponentDidMount()
	{
		
		console.log("In Component Did Mount");
		 var that = this;
		      $.ajax({
			  url: "http://localhost:8080/news/viewnews",
			  type: "Get",
			  dataType: 'JSON',
			  data : this.props.item,
			  
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
	  	console.log("View Favorites plan");
		 	console.log(this.state.viewArr.title);
		    return (
		    
		    <div className="container-fluid">
            <div className="row">
            <div className="col-md-12">
		    <div classname = "jumbotron">
		   
	

		    <article className="col-md-4">
		    <img src="newsPic col-md-4" src={this.props.viewArr.urlToImage} alt="image" width="200" height="200" />
		    </article>

		    <article className="col-md-8" >
		    <h3><a href="#" >{this.props.viewArr.title}</a></h3>
		    <h6>{this.props.item.publishedAt}</h6>
		    <p>{this.props.item.description}</p>
		    <input type="button" value="delete" />
		    <input type="button" value="update" />
		    </article>
		    
		    </div>
		    </div>
		    </div>
		    </div>
		  
		   );
	}
}