import React from "react";
import bannerAPT4LESS from "../bannerAPT4LESS.png";
import '../App.css'
import Xavier from "../Xavier.jpg";
import Milik from "../Milik.jpg";
import Nehemie from "../Nehemie.jpg";





function Home() {

        return (
            <>
                    <div id= "banner">
                            <h1>Apartment4Less</h1>
                            <img src={bannerAPT4LESS} class="img-fluid" alt="Apt Banner"/>
                    </div>



                    <h2>For Undergraduates and Graduates in Tallahassee</h2>

                    <blockquote className="blockquote text-right">
                            <p className="mb-0">Apartments4Less is a website that shows opportunities for undergraduates and graduates to have housing .
                                    We demonstrate a way for college students to easily find cheap apartments around Tallahassee, especially
                                    for students who wished to live off campus. This website also provides links for current scholarships for
                                    individuals who can’t afford to pay rent or deposit for an apartment. This is a great way for students to
                                    spend less time and effort looking for an apartment all while dealing with their school work and personal
                                    lives.</p>
                    </blockquote>

                    <h3>SignUp or Login to find apartments and apply for rent assistance!</h3>

                    <aside>
                            <hr></hr>
                            <h1><strong>Creators</strong></h1>
                            <hr></hr>
                    </aside>



                    <div className="card-group m-2">
                            <div className="card">
                                    <img src={Nehemie} class="Nehemie" alt="a snow-capped mountain range"/>
                                    <div className="card-body">
                                            <h2 className="card-title">Nehemie Augustin</h2>
                                            <p className="card-text">I was born and raised in Haiti.
                                                    I'am currently attending Florida Agricultural & Mechanical University pursuing my bachelor’s degree in Computer Science.
                                                    I'm also working as a lab technician at KWB Pathology. After graduating,
                                                    I want to acquire knowledge and skills in having an opportunity to work in a professional environment. Eventually,
                                                    I want to build my own software company to give back to the community.</p>
                                            <a href="#" className="btn btn-secondary">Linkedln</a>
                                    </div>
                            </div>
                            <div className="card">
                                    <img src={Xavier} class="Xavier"
                                         alt="a snowy mountain with clouds behind it"/>
                                    <div className="card-body">
                                            <h2 className="card-title">Xavier White</h2>
                                            <p className="card-text">I was born and raised in Gainesville. I am a Senior majoring in Computer Science at Florida Agricultural & Mechanical University. Upon graduating
                                                    I plan on beginning my path toward cloud computing. Currently, I am working on my CompTIA A+ and will
                                                    pursue a CCNA certification next. I enjoy accomplishing short term goals and learning along the way.
                                                    Also, I have a dog named Pluto.</p>
                                            <a href="#" className="btn btn-secondary">Linkedln</a>
                                    </div>
                            </div>

                            <div className="card">
                                    <img src={Milik} class="Milik"
                                         alt="a mountain range under a thin layer of clouds"/>
                                    <div className="card-body">
                                            <h2 className="card-title">Milik Bennett</h2>
                                            <p className="card-text">I'm from the strawberry capital of Florida. I attended Plant City High school.
                                                    I'm currently a CIS student at Florida Agricultural & Mechanical University. I really into cars. My favorite movie series is the "Fast and Furious".
                                                    My goal is to continue to enhance my programming skills along my journey. My favorite quote is "All of your dreams can come true, if you have the courage to pursue them".</p>
                                            <a href="#" className="btn btn-secondary">Linkedln</a>

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
export default Home;
