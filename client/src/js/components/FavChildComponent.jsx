import React from 'react';
import ViewDisplayComponent from './ViewDisplayComponent';

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
          <h2>Inside Fav child Component</h2> 
  	       {
          this.props.viewNews.map(function(ViewElement){
          return(<ViewDisplayComponent viewElement={ViewElement}/>)
          })
         }
      </div>
    )
   
  }
};  
