			import React from 'react';
			

			export default class ViewDisplayComponent extends React.Component
			{
			  constructor()
		       {
		           super();
		           this.deleteNews=this.deleteNews.bind(this);
    	       }

			  deleteNews()
			    {
		          $.ajax({
				  url: "http://localhost:8080/news/delete",
				  type: "DELETE",
				  data :this.props.viewElement,
				
				  success : function(msg){

				    console.log('news deleted')
				  },
				  error: function(err){
				  console.log('error');
				  }
				});
			        }
		    

		    render()
			{
			 	console.log("View Display Component");
			 	console.log(this.props.viewElement);
			    return (
			    
			    <div className="container">
	            <div className = "row jumbotron">
	    
			    <article className="col-md-4">
			    <img src="newsPic col-md-4" src={this.props.viewElement.urlToImage} alt="image" width="200" height="200" />
			    </article>

			    <article className="col-md-8" >
			    <h3><a href="#" >{this.props.viewElement.title}</a></h3>
			    <h6>{this.props.viewElement.publishedAt}</h6>
			    <p>{this.props.viewElement.description}</p>
			   
			     <input type="button" value="update"  /> 
			     <input type="button" value="delete"  onClick={this.deleteNews}/>
			    </article>
			    
			   
			    </div>
			    </div>
			  
			   );
			}
			}; 