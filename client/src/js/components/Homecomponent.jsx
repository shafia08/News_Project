import React from 'react';
import ReactDOM from 'react-dom';
import SearchComponent from './SearchComponent';
import NewsComponent from './NewsComponent';

export default class Homecomponent extends React.Component{
	constructor(){
		super();
		this.state={newsArr:[]};
		this.fetchNewsFromExternalAPI=this.fetchNewsFromExternalAPI.bind(this);
	}

	fetchNewsFromExternalAPI(provider) {
		var that = this;
		console.log("main: "+provider);
		$.ajax({

			url: "https://newsapi.org/v1/articles?source="+provider+"&apiKey=c37357c46e3441b29e0c4c976e74299c",
			type: "GET",
			dataType: 'JSON',

			success : function(msg){
			console.log('msg:'+msg);
			var array = msg.articles;
			console.log('hello'+array);
			/*msg reprewsents JSON data of news headlines sent back by external API*/
			that.setState({newsArr:array});
			},
			error: function(err){
			}
		});
	}
	render()
	{
		console.log(this.state.newsArr);
		return (
			<div>
			<h1>Welcome!</h1>
			<SearchComponent search = {this.fetchNewsFromExternalAPI} />
			<NewsComponent newdata = {this.state.newsArr} />
	        <h2>{this.state.newsArr}</h2>
			</div>
		)
	}
}
