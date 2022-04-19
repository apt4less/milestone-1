import React from "react";
import logo from "../logo.png";




function Login() {



    return (

        <div>
            <body>
            <div className="container">
                <div className="wrapper">
                    <div className="title"><span>Login Form</span></div>
                    <form action="#">
                        <div className="row">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Email or Phone" required/>
                        </div>
                        <div className="row">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" required/>
                        </div>
                        <div className="pass"><a href="/SignUp">Forgot password?</a></div>
                        <div className="row button" >

                            <input type="submit" value="Login"/>
                        </div>
                        <div className="signup-link">Not a member? <a href="/SignUp">SignUp now</a></div>
                    </form>
                </div>
            </div>

            </body>
        </div>
    );
}

export default Login;

