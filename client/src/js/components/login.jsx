import React from 'react';

export default class login extends React.Component
{
    constructor(){
    super();
    this.register=this.register.bind(this);

    }

   register()
   {
       $.ajax({
            url: "http://localhost:8080/users/insert",
            type: "POST",
           
            data: 'username='+document.getElementById("username").value+'&email=' + document.getElementById("email").value + '&password=' + document.getElementById("password").value,

            success: function(msg){
                console.log("user registration done");
            },
            error: function(err){
                console.log("error occurred");
            }
        })
   }

	render()
	{
	return(
         <div>
                <center>
                <h1>SignUp</h1>
                <h3>Username:<input type="text" placeholder="Enter Username"/></h3>
                
                <h3>Password:<input type="password" placeholder="Enter password"/></h3>
               
                <button className="btn btn-primary" type="button">Login</button>
                
                <br />
                <br />
                If New User,Click Here <a href="#ModalWindow" role="button" data-toggle="modal" class="btn btn-primary" >Sign Up</a>
                </center>

                <div className="modal fade"  id="ModalWindow">
                   <div className="modal-dialog">
										<div className="modal-content">
											<div className="modal-header">
											 <button className="close" data-dismiss="modal">X</button>
                                            <h4>User Registration </h4>

                                            </div>

                                            <div className="modal-body">
                                             
                                              <form className="form-horizontal">
													<div className="form-group">
							     						<label className="col-lg-2 control-label" for="username">Username
							     						</label>
														<div class="col-lg-10">
														<input class="form-control" id="username" type="text" placeholder="Enter username" />
										    			</div>
													</div>

													<div className="form-group">
							     						<label className="col-lg-2 control-label" for="email">Email
							     						</label>
														<div class="col-lg-10">
														<input class="form-control" id="email" type="email" placeholder="Enter email -id" />
										    			</div>
													</div>

													<div className="form-group">
							     						<label className="col-lg-2 control-label" for="password">Password
							     						</label>
														<div class="col-lg-10">
														<input class="form-control" id="password" type="text" placeholder="Enter Password" />
										    			</div>
													</div>

											<div className="modal-footer">
											<button className="btn btn-primary" type="button" onClick={this.register}>Submit
											</button>
											
 											<button className="btn btn-success" type="button" data-dismiss="modal" >Close
											</button>

											</div> 
                                              </form>
                                            </div>
                                        </div>
                    </div>
                </div>                        
            </div>
	)
	}
}