import React, {useContext, useRef, useState} from "react";
import {AuthContext} from "../Component/AuthContext";
import {useNavigate} from "react-router-dom";




function SignUp() {
    const context = useContext(AuthContext);
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [errors, setErrors] = useState([]);
    let navigate = useNavigate();



    async function handleSubmit(event){

        event.preventDefault();

        await context.signUp(emailRef.current.value, passwordRef.current.value);

        if(context.currentUser != null)
        {
            context.setErrors(null, false);
            navigate("/");

        }
        else {
            setErrors(context.errors);
        }
    }

    return (

        <div className="container">
            <div className="wrapper">
                <div className="title"><span>Sign Up</span></div>
                <form onSubmit={handleSubmit} >
                    <div className="row">
                        <i className="fas fa-lock"></i>
                        <input type="" placeholder="Email Address" required ref={emailRef}/>
                    </div>
                    <div className="row">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" required ref={passwordRef}/>
                    </div>
                    <div className="row button">
                        <button type="submit" value="SignUp" >
                            SignUp
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
}
export default SignUp;