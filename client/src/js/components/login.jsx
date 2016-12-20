import React from 'react';

export default class login extends React.Component
{
	render()
	{
	return(
         <div>
                <center>
                <h1>SignUp</h1>
                <h3>UserName:<input type="text" placeholder="Enter Username"/></h3>
                
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
                                            <h4>User Registration </h4>
                                            </div>

                                            <div className="modal-body">
                                             
                                              <form className="form-horizontal">
													<div className="form-group">
							     						<label className="col-lg-2 control-label" for="name_input">Name</label>
															<div class="col-lg-10">
															<input class="form-control" id="name_input" type="text" placeholder="Enter name" />
										    				</div>
													</div>

                                            </div>
                                        </div>
                    </div>
                </div>                        
            </div>
	)
	}
}