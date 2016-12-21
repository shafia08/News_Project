import 'file?name=[name].[ext]!../index.html';

import React from 'react';
import ReactDOM from 'react-dom';
var {browserHistory, Route, Router, IndexRoute}
  = require('react-router');

import About from './components/About.jsx';
import Homecomponent from './components/Homecomponent.jsx';
import Login from './components/Login.jsx';

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
             
            
             <Route path="/" component={MainComponent}>
             <IndexRoute component={Login}/>
             <Route path="/home" component={Homecomponent}/>
             <Route path="/about" component={About}/>
             <Route path="/navbar" component={NavBar}/>
             <Route path="/login" component={Login}/>
             <Route path="/contact" component={Contact}/>
			 <Route path="/viewfavcomponent" component={viewFavComponent}/>
			
			 </Route>

</Router>,document.getElementById('content'));