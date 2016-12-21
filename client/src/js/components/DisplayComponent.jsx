		import React from 'react';
		

		export default class DisplayComponent extends React.Component
		{
		constructor(){
		super();
		this.savingNews = this.savingNews.bind(this);
		}

		savingNews(){
		 alert('Your news is saved');
		 $.ajax({
		  url: "http://localhost:8080/news/save",
		  type: "POST",
		  dataType: 'JSON',
		  data : this.props.item,
		  success : function(msg){
		    console.log('news saved')
		  },
		  error: function(err){
		  console.log('error');
		  }
		});
	   }	
	    
	    

	    render()
		{
		 	console.log("Display Component Item received is ");
		 	console.log(this.props.item);
		    return (
		    
		    <div className="container">
            <div className="row jumbotron">
		   
	

		    <article className="col-md-4">
		    <img src="newsPic col-md-4" src={this.props.item.urlToImage} alt="image" width="200" height="200" />
		    </article>

		    <article className="col-md-8" >
		    <h3><a href={this.props.item.url} target="_blank">{this.props.item.title}</a></h3>
		    <h6>{this.props.item.publishedAt}</h6>
		    <p>{this.props.item.description}</p>
		    <a href={this.props.item.url} role="button" target="_blank">...more</a>
		    <br/>
		    <br/>
		    <button className="btn btn-primary" type="button" onClick={this.savingNews}>Save</button>
		    </article>
		    
		    </div>
		    </div>
		  
		   );
		}
		}