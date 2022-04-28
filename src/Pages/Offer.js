import React, {Component} from 'react';
import axios, {Axios} from "axios";
import logo from "../logo.png";


class Offer extends Component {

    constructor(props) {
        super(props);
        this.state = {data: []};

    }

    componentDidMount() {


        const options = {
            method: 'GET',
            url: 'https://realty-in-us.p.rapidapi.com/properties/list-for-rent',
            params: {
                state_code: 'FL',
                city: 'Tallahassee',
                limit: '200'

            },
            headers: {
                'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com',
                'X-RapidAPI-Key': '517f635808msh5e5a610ac50cb0ep1cee3ejsn4f6aa9114d9e'
            }
        };

        const req = async () => {
            await axios.request(options).then( (response) => {
                //console.log(response.data);

                this.setState({data : response.data.listings})
            }).catch(function (error) {
                console.error(error);
            });
        }
        req();

    }

    insert(evt, id) {

        evt.preventDefault();
        let ca = localStorage.getItem("firebaseResponse");
        ca = (ca ? JSON.parse(ca) : "");

        const likes = {
            method: 'POST',
            url: 'http://localhost:8080/api/Offer/' + id,
            headers: {Authorization: "Bearer " + ca.token}
        };

        const cer = async () => {
            await axios.request(likes).then((response) => {
                //console.log(response.data);

                this.setState({data: response.data})
            }).catch(function (error) {
                console.error(error);
            });
        }
        cer();
    }

        update(id) {
            let ga = localStorage.getItem("firebaseResponse");
            ga = (ga ? JSON.parse(ga): "");

            const updates = {
                method: 'GET',
                url: 'http://localhost:8080/api/Offer/'+ id,
                headers: {Authorization: "Bearer " + ga.token}
            };

            const ter = async () => {
                await axios.request(updates).then((response) => {
                    //console.log(response.data);

                    this.setState({data: response.data})
                }).catch(function (error) {
                    console.error(error);
                });
            }
            ter();

    }

    render() {


        return (
<>
            <nav className="navbar navbar-dark bg-dark">
                <img src= {logo} width="75" height="47" alt=""/>
                <a className="navbar-brand" href="/SignOut">SignOut</a>
                <a className="navbar-brand" href="/Scholarship">Scholarships</a>
                <a className="navbar-brand" href="/Offer">Offer</a>
                <a className="navbar-brand" href="/Home">Home</a>

            </nav>

        <blockquote className="blockquote text-right">



                <h1>OFFERS</h1>

                <p className="scholarship">These Scholarships below will help students with tution and rent. So if you
                    need fundng, heres some
                    oppurnuties.
                </p>

                <table className="table-container">
                    <tr>
                        <th>Property</th>
                        <th>Type</th>
                        <th>Address</th>
                        <th>Price</th>
                        <th>Bedrooms/Bathroom</th>
                        <th>Pet</th>
                        <th>Status</th>
                        <th>Likes</th>
                    </tr>

                    {
                        this.state.data.map((apt) => {
                            console.log(apt);
                            let addr = encodeURIComponent(apt.address)
                            return (
                                <tr>
                                    <td><img style = {{width:"150px", height:"100px"}} src={apt.photo}/></td>
                                    <td>{apt.prop_type}</td>
                                    <td><a href={'https://www.google.com/maps/search/?api=1&query='+ addr}>{apt.address}</a></td>
                                    <td>{apt.price}</td>
                                    <td style = {{textAlign:"center"}}>{apt.beds}/{apt.baths}</td>
                                    <td>{apt.pet_policy}</td>
                                    <td>{apt.prop_status}</td>
                                    <td><button classname="Likes" type="button" onClick={(event) => this.insert(event,apt.property_id)}>Likes</button></td>


                                </tr>



                            )

                        })
                    }
                </table>

                <footer>
                    <p>&copy; Copyright 2021. All Rights Reserved.</p>
                    <p> Written By: Nehemie Augustin, Xavier White, Milik</p>
                    <p>Students at: <a href="https://www.famu.edu/">Florida Agricultural & Mechnical University</a></p>
                    <p>Contact@<a href="mailto:policebrutality@gmail.com">APT4LESS@gmail.com</a></p>
                </footer>


            </blockquote>
    </>
        )
    }



}
export default Offer;
