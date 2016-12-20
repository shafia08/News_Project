import 'file?name=[name].[ext]!../index.html';

import React from 'react';
import ReactDOM from 'react-dom';
var {hashHistory, Route, Router, IndexRoute}
  = require('react-router');

import About from './components/About.jsx';
import Home from './components/Home.jsx';
import login from './components/login.jsx';

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
<Router history={hashHistory}>
             
            
             <Route path="/" component={MainComponent}>
             <IndexRoute component={login}/>
             <Route path="/home" component={Home}/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
			 <Route path="/viewfavcomponent" component={viewFavComponent}/>
			
			 </Route>

</Router>,document.getElementById('content'));