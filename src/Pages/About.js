import React from "react";




function About() {

    return (
        <>
        <div className="container">

            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <span className="stars"></span>
                        <h2 className="java">Java</h2>
                        <p className="java">Java is a class-based, object-oriented programming language that is designed
                            to have as few implementation dependencies as possible.</p>
                    </div>
                </div>
                <div className="face face2">
                    <h2>01</h2>
                </div>
            </div>

            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <span className="stars"></span>
                        <h2 className="python">Python</h2>
                        <p className="python">Python is an interpreted, high-level and general-purpose programming
                            language.</p>
                    </div>
                </div>
                <div className="face face2">
                    <h2>02</h2>
                </div>
            </div>

            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <span className="stars"></span>
                        <h2 className="cSharp">C#</h2>
                        <p className="cSharp">C# is a general-purpose, multi-paradigm programming language encompassing
                            static typing, strong typing, lexically scoped and component-oriented programming
                            disciplines.</p>
                    </div>
                </div>
                <div className="face face2">
                    <h2>03</h2>
                </div>
            </div>
        </div>
    <footer>
        <p>&copy; Copyright 2021. All Rights Reserved.</p>
        <p> Written By: Nehemie Augustin, Xavier White, Milik</p>
        <p>Students at: <a href="https://www.famu.edu/">Florida Agricultural & Mechnical University</a></p>
        <p>Contact@<a href="mailto:policebrutality@gmail.com">APT4LESS@gmail.com</a></p>
    </footer>
    </>
    );
}
export default About;