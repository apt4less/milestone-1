import React, {Component} from 'react';
import axios, {Axios} from "axios";


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


    render() {


        return (

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
                    </tr>

                    {
                        this.state.data.map((apt) => {
                            console.log(apt);
                            return (
                                <tr>
                                    <td><img src={apt.photo}/></td>
                                    <td>{apt.prop_type}</td>
                                    <td>{apt.address}</td>
                                    <td>{apt.price}</td>
                                    <td style = {{textAlign:"center"}}>{apt.beds}/{apt.baths}</td>
                                    <td>{apt.pet_policy}</td>
                                    <td>{apt.prop_status}</td>
                                </tr>



                            )

                        })
                    }
                </table>


            </blockquote>
        )
    }



}
export default Offer;
