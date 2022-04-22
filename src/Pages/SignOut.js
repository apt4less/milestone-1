import React, {useContext, useRef, useState} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import {AuthContext} from "../Component/AuthContext";


function SignOut()
{
    const context = useContext(AuthContext);
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [errors, setErrors] = useState([]);
    let navigate = useNavigate();



    async function handleSubmit(event){

        event.preventDefault();

        await context.signOut(emailRef.current.value, passwordRef.current.value);

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
                <form onSubmit={handleSubmit} >
                    <div className="row button">
                        <button type="submit" value="SignUp" >
                            SignOut
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default SignOut;