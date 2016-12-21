import 'file?name=[name].[ext]!../index.html';

import React from 'react';
import ReactDOM from 'react-dom';
var {browserHistory, Route, Router, IndexRoute}
  = require('react-router');

import About from './components/About.jsx';
import home from './components/home.jsx';
import registrationAndLogin from './components/registrationAndLogin.jsx';

import Contact from './components/Contact.jsx';

import NavBar from './components/NavBar.jsx';
import viewFavComponent from './components/viewFavComponent';


class MainComponent extends React.Component{

render(){

return (
<div>
<NavBar/>
  <br/><br/><br/><br/>
    {this.props.children}
</div>
)
}
}
ReactDOM.render(
<Router history={browserHistory}>
             
            
             <Route path="/" component={registrationAndLogin}>
             <IndexRoute component={home}/>
             <Route path="/home" component={home}/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
			 <Route path="/viewfavcomponent" component={viewFavComponent}/>
			
			 </Route>

</Router>,document.getElementById('content'));