import React from 'react';
export default class FavComponent extends React.Component
{

  ViewSaveNews()
	    {
	      $.ajax({
		  url: "http://localhost:8080/news/viewnews",
		  type: "Get",
		  dataType: 'JSON',
		  data : this.props.item,
		  success : function(msg){
		    console.log('view news')
		  },
		  error: function(err){
		  console.log('error');
		  }
		});
	    }



render()
{
  return (
    <div>
    <h3> Fav Component </h3>
    </div>
  );
}
}