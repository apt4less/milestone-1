import Home from "./Pages/Home";
import About from "./Pages/About";
import SignUp from "./Pages/SignUp";
import Offer from "./Pages/Offer"
import Login from "./Pages/Login";
import Scholarship from "./Pages/Scholarship";
import logo from "./logo.png";
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
import React, { Component }  from 'react';
import './App.css';
import PrivateRoute from "./Component/PrivateRoute";
function App() {


    return (
        <Router>
            <div id="pages" >

                <nav className="navbar navbar-dark bg-dark">
                    <img src= {logo} width="75" height="47" alt=""/>
                    <a className="navbar-brand" href="/Login">Login/SignUp</a>
                    <a className="navbar-brand" href="/Scholarship">Scholarships</a>
                    <a className="navbar-brand" href="/Offer">Offer</a>
                    <a className="navbar-brand" href="/">Home</a>

                </nav>




                <div  className="containter bg-black ">
                    <div className="row">
                        <div className="col-12">

                            <Routes>
                                <Route path="/" exact element={<PrivateRoute><Home /> </PrivateRoute>} />
                                <Route path="/About" element={<About />}/>
                                <Route path="/Scholarship" element={<Scholarship />}/>
                                <Route path="/Offer" element={<Offer />}/>
                                <Route path="/Login" element={<Login />}/>
                                <Route path="/SignUp" element={<SignUp />}/>

                            </Routes>

                            <footer>
                                <p>&copy; Copyright 2021. All Rights Reserved.</p>
                                <p> Written By: Nehemie Augustin, Xavier White, Milik</p>
                                <p>Students at: <a href="https://www.famu.edu/">Florida Agricultural & Mechnical University</a></p>
                                <p>Contact@<a href="mailto:policebrutality@gmail.com">APT4LESS@gmail.com</a></p>
                            </footer>

                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;