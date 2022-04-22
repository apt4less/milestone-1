import React from "react";
import logo from "../logo.png";




function Scholarship() {

    return (
        <blockquote className="blockquote text-right">

            <nav className="navbar navbar-dark bg-dark">
                <img src= {logo} width="75" height="47" alt=""/>
                <a className="navbar-brand" href="/SignOut">SignOut</a>
                <a className="navbar-brand" href="/Scholarship">Scholarships</a>
                <a className="navbar-brand" href="/Offer">Offer</a>
                <a className="navbar-brand" href="/Home">Home</a>

            </nav>


            <h1> Scholarships</h1>

            <h2 className="scholarship">Have no money to afford an apartment off campus?</h2>
            <h2>No worries, these Scholarships below will assist students with rent.
            </h2>

            <section class="scholarship">
                <tr>
                    <th>Name</th>
                    <th>Links</th>
                    <th>Amount</th>
                    <th>Deadlines</th>
                </tr>

                <tr>
                    <td>$1,000 Cover Your Cost Scholarship</td>
                    <td><a href="https://www.privatestudentloans.com/apply1/?st=1070&offer_id=255&mobile=no&aff_sub=&aff_sub2=&aff_sub3=&transaction_id=10291acbfe5aa409450e016dde73b2&utm_source=niche.com&utm_medium=Affiliate&utm_campaign=PrivateStudentLoans.com%2BOne%2BClick%2BProgram&college_Location={college_Location}&ipedId={ipedId}&OPEID={OPEID}&college={college}&allow_passthrough=yes">$1,000 Cover Your Cost Scholarship Link</a></td>
                    <td>$1,000</td>
                    <td>May 31, 2022</td>
                </tr>

                <tr>
                    <td>"Be Bold" No-Essay Scholarship</td>
                    <td><a href="https://bold.org/scholarships/the-be-bold-no-essay-scholarship/#ref=find-exclusive-scholarships">"Be Bold" No-Essay Scholarship Link</a></td>
                    <td>$25,050</td>
                    <td>Apr 30, 2022</td>
                </tr>

                <tr>
                    <td>$1000 2022 Scholly Relief Fund </td>
                    <td><a href="https://myscholly.com/relief-sta-2022/?utm_source=niche&utm_medium=affiliate&utm_campaign=reliefstash&utm_content=niche">Scholly Link</a></td>
                    <td>$1,000</td>
                    <td>Apr 30, 2022</td>
                </tr>

                <tr>
                    <td>Full Circle Scholarship</td>
                    <td><a href="https://collegefund.org/students/scholarships/">Full Circle Scholarship Link</a></td>
                    <td>$15,000</td>
                    <td>May 31, 2022</td>
                </tr>

                <tr>
                    <td>No Essay Smart Owl Scholarship </td>
                    <td><a href="https://scholarshipowl.com/awards/smart-owl-scholarship?transaction_id=102852e018e3dd519065a77884c854&offer_id=24&affiliate_id=1345&aff_sub=&aff_sub2=&aff_sub3=&aff_sub4=&aff_sub5=">No Essay Smart Owl Scholarship Link</a></td>
                    <td>$7,000</td>
                    <td>Apr 29, 2022</td>
                </tr>

                <tr>
                    <td>Porch Skilled Trade and Technology Scholarship </td>
                    <td><a href="https://porch.com/resources/scholarships">Porch Skilled Trade and Technology Scholarship Link</a></td>
                    <td>$2,000</td>
                    <td>March 31, 2022</td>
                </tr>

                <tr>
                    <td>$1,022 Fizz Student Card 'No Essay' Scholarship</td>
                    <td><a href="https://www.joinfizz.com/scholarship?utm_source=niche&utm_medium=giveaway&utm_campaign=$1,022+Fizz+Student+Card+No+Essay+Scholarship">Fizz ScholarshipLink</a></td>
                    <td>$1,022</td>
                    <td>May 14, 2022</td>
                </tr>

                <tr>
                    <td>$2,000 Nitro Scholarship </td>
                    <td><a href="https://www.nitrocollege.com/nitro-scholarship-application?utm_source=cpc&utm_medium=niche&utm_campaign=niche_student_2K">$2,000 Nitro Scholarship Link</a></td>
                    <td>$2,000</td>
                    <td>Apr 30, 2022</td>
                </tr>


            </section>
        </blockquote>
    );
}
export default Scholarship;