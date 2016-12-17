		import React from 'react';
		

		export default class viewDisplayComponent extends React.Component
		{
		
	    render()
		{
		 	console.log("View Display Component");
		 	console.log(this.props.viewElement);
		    return (
		    
		    <div className="container-fluid">
            <div className="row">
            <div className="col-md-12">
		    <div className = "jumbotron">
		   
	

		    <article className="col-md-4">
		    <img src="newsPic col-md-4" src={this.props.viewElement.urlToImage} alt="image" width="200" height="200" />
		    </article>

		    <article className="col-md-8" >
		    <h3><a href="#" >{this.props.viewElement.title}</a></h3>
		    <h6>{this.props.viewElement.publishedAt}</h6>
		    <p>{this.props.viewElement.description}</p>
		    <input type="button" value="Save"  />
		     <input type="button" value="update"  />
		      <input type="button" value="delete"  />
		    </article>
		    
		    </div>
		    </div>
		    </div>
		    </div>
		  
		   );
		}
		}