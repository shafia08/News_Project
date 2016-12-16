	import React from 'react';

	export default class DisplayComponent extends React.Component
	{
	render()
	{
	 	console.log("Display Component Item received is ");
	 	console.log(this.props.item);
	  return (
	    
	    <article>

	    <div className="row" id="maindiv">

	    <div className="col-sm-4"><img className="newsPic col-sm-4" src={this.props.item.urlToImage} alt="image" width="200px" />
	    </div>

	    <div className="col-sm-8" height="200px">
	    <div  className="col-sm-8">
	    <text className="textTitle"><a href="#" >{this.props.item.title}</a></text>
	    </div>
	    <div className="col-sm-8" >
	    <text>{this.props.item.description}</text>
	    </div>
	    </div>


	    </div>
	    </article>
	  );
	}
	}