import Home from "./Pages/Home";
import About from "./Pages/About";
import SignUp from "./Pages/SignUp";
import Offer from "./Pages/Offer"
import Login from "./Pages/Login";
import SignOut from "./Pages/SignOut";
import Scholarship from "./Pages/Scholarship";
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
import React, { Component }  from 'react';
import './App.css';
import PrivateRoute from "./Component/PrivateRoute";
import {AuthProvider} from "./Component/AuthContext";
function App() {


    return (
        <AuthProvider>
        <Router>
            <div id="pages" >
                <div  className="containter bg-black ">
                    <div className="row">
                        <div className="col-12">

                            <Routes>
                                <Route path="/Home" exact element={<PrivateRoute><Home /> </PrivateRoute>} />
                                <Route path="/Scholarship" element={<PrivateRoute><Scholarship /></PrivateRoute>}/>
                                <Route path="/Offer" element={<PrivateRoute><Offer /></PrivateRoute>}/>
                                <Route path="/" element={<Login />}/>
                                <Route path="/SignUp" element={<SignUp />}/>
                                <Route path="/SignOut" element={<SignOut />}/>

                            </Routes>

                        </div>
                    </div>
                </div>
            </div>
        </Router></AuthProvider>
    );
}

export default App;