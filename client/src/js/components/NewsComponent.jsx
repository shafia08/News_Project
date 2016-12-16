import React from 'react';
import DisplayComponent from './DisplayComponent';

export default class NewsComponent extends React.Component{

 constructor()
  {
    super();	
  }
  
  render(){ 
      console.log("NEWS MANAER COMPONENT Array is ");
      console.log(this.props.newdata);
     return (
      <div>
	       {
          this.props.newdata.map(function(item){
          return(<DisplayComponent item={item}/>)
          })
         }
      </div>
    )
   
  }
};  
