import React, {useContext, useEffect, useRef, useState} from 'react';
import {AuthContext} from "../Component/AuthContext";
import { useNavigate} from "react-router-dom";




function Login() {
    const context = useContext(AuthContext);
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [errors, setErrors] = useState([]);
    let navigate = useNavigate();



    async function handleSubmit(event){

        event.preventDefault();

        await context.signIn(emailRef.current.value, passwordRef.current.value);

        if(context.currentUser != null)
        {
            context.setErrors(null, false);
            //navigate("/");

        }
        else {
            setErrors(context.errors);
        }
    }

    return (

        <div>

            <div className="container">
                <div className="wrapper">
                    <div className="title"><span>Login Form</span></div>
                    <form onSubmit={handleSubmit} >
                        <div className="row">
                            <i className="fas fa-user"></i>

                            <input type="email" placeholder="Email or Phone" required ref={emailRef}/>
                        </div>
                        <div className="row">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" required ref={passwordRef}/>
                        </div>
                        <div className="pass"><a href="/SignUp">Forgot password?</a></div>
                        <div className="row button" >

                            <button className="w-100 btn btn-outline-light" type="submit" >
                           Login
                            </button>
                        </div>
                        <div className="signup-link">Not a member? <a href="/SignUp">SignUp now</a></div>
                    </form>
                </div>
            </div>


        </div>
    );
}

export default Login;

