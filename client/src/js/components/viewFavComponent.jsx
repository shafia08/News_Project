import React from 'react';
export default class FavComponent extends React.Component
{

  constructor()
  {
      super();
      this.state={myArr:[]};
  }

  ViewSaveNews()
	    {
	       var that = this;
	      $.ajax({
		  url: "http://localhost:8080/news/viewnews",
		  type: "Get",
		  dataType: 'JSON',
		  data : this.props.item,
		  
		  success : function(msg){
		    console.log('view news')
		    that.setState({myArr:msg});

		  },
		  error: function(err){
		  console.log('error');
		  }
		});
	    }

ComponentDidMount()
{
	this.ViewSaveNews
}

render()
{
  return (
    <div>
    <h3> Favorites </h3>
    </div>
  );
}
}