import React from 'react';

export default class login extends React.Component
{
	render()
	{
	return(
         <div>
                <h1>SignUp</h1>
                <h3>UserName:<input type="text" placeholder="Firstname"/></h3>
                
                <h3>Password:<input type="password" placeholder="password"/></h3>
                <button type="button">login</button>
            </div>
	)
	}
}