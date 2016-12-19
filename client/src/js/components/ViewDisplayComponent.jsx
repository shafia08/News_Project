							import React from 'react';
							

							export default class ViewDisplayComponent extends React.Component
							{
							constructor()
							{
							super();
	                        this.state={comment:''};

							this.deleteNews=this.deleteNews.bind(this);

							this.updateNews=this.updateNews.bind(this);


							}

							deleteNews()
							{
							$.ajax({
							url: "http://localhost:8080/news/delete",
							type: "DELETE",
							data :this.props.viewElement,

							success : function(msg){

							console.log('news deleted')
							},
							error: function(err){
							console.log('error');
							}
							});
							}


							updateNews()
							{   var that=this
							$.ajax({
							url: "http://localhost:8080/news/update",
							type: "PUT",
							data :this.props.viewElement,

							success : function(msg){
	                        
	                        that.setState({comment:document.getElementById('commentid').value})
							console.log('comments UPDATED')
							},
							error: function(err){
							console.log('error');
							}
							});
							}    




							render()
							{
							console.log("View Display Component");
							console.log(this.props.viewElement);
							return (

							<div className="container">
							<div className = "row jumbotron">

							<article className="col-md-4">
							<img src="newsPic col-md-4" src={this.props.viewElement.urlToImage} alt="image" width="200" height="200" />
							</article>

							<article className="col-md-8" >
							<h3><a href="#" >{this.props.viewElement.title}</a></h3>
							<h6>{this.props.viewElement.publishedAt}</h6>
							<p>{this.props.viewElement.description}</p>


							<a href="#MyModal" role="button" data-toggle="modal" class="btn btn-primary">
							<span class="glyphicon glyphicon-hand-up"></span>Update</a>


							<div className="modal fade" id="MyModal">
							<div className="modal-dialog">
							<div className="modal-content">
							<div className="modal-header">
							<button className="close" data-dismiss="modal">X</button>
							<h4>Add your Comments</h4>		
							</div>
							<div className="modal-body">
							<div className="container">
							<div className = "row jumbotron">

							<article className="col-sm-12">

							<article className="col-sm-6">
							<img src="newsPic " src={this.props.viewElement.urlToImage} alt="image" width="200" height="200" />
							</article>

							<article className="col-sm-6" >
							<h3><a href="#" >{this.props.viewElement.title}</a></h3>

							<p>{this.props.viewElement.description}</p>
							</article>

							</article>

							<form className="form-horizontal">
							       <div className="form-group">
									<label className="col-lg-2 control-label" for="comment_input">Comment</label>
									<div className="col-lg-10">
									<input type="text"  id="commentid"  placeholder="Enter Comment" />
								    </div>
							       </div>
							</form>
							

						</div>

							<div className="modal-footer">
							<button className="btn btn-primary" type="button" onClick={this.updateNews} >Save Comments
							</button>
							<button className="btn btn-default" data-dismiss="modal" type="button">Close
							</button>

							</div> 
							</div>
							</div>    
							</div>
							</div>
							</div>


							<input type="button" value="delete"  onClick={this.deleteNews}/>
							</article>
	                         
	                         
	                         <p>{this.state.comment}</p>

							</div>
							</div>



							);
							}
							}; 