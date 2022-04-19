import React from "react";




function SignUp() {

    return (

        <div className="container">
            <div className="wrapper">
                <div className="title"><span>Sign Up</span></div>
                <form action="#">
                    <div className="row">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="First Name" required/>
                    </div>
                    <div className="row">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Last Name" required/>
                    </div>
                    <div className="row">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Email Address" required/>
                    </div>
                    <div className="row">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" required/>
                    </div>
                    <div className="row">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Re-Type Password" required/>
                    </div>
                    <div className="row button">
                        <input type="submit" value="SignUp" />
                    </div>
                </form>
            </div>
        </div>
    );
}
export default SignUp;