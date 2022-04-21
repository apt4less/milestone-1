import React, {useContext} from 'react';
import {AuthContext} from "../Component/AuthContext";
import {Navigate} from "react-router-dom";

function PrivateRoute({children})
{
    const {currentUser} = useContext(AuthContext);

    if(currentUser != null && currentUser.length > 0 )
        localStorage.setItem("user", JSON.stringify(currentUser));

    return currentUser ? children : <Navigate to="/SignUp" replace={true} />

}
export default PrivateRoute;