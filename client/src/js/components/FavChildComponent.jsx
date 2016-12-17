import React from 'react';
import ViewDisplayComponent from './viewDisplayComponent';

export default class FavChildComponent extends React.Component{

 constructor()
  {
    super();	
  }
  
  render(){ 
      console.log("Fav Child component ");
      console.log(this.props.viewNews);
     return (
      <div>
	       {
          this.props.viewNews.map(function(viewElement){
          return(<viewDisplayComponent viewElement={viewElement}/>)
          })
         }
      </div>
    );
   
  }
};  
