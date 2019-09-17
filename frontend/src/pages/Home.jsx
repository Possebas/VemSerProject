/* All librarys */
import React, { Component } from 'react';

/* Components */
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

export default class Home extends Component {

    /* constructor(props){
        super(props)
    } */

    render() {
        return (
            <React.Fragment>
                    <NavBar/>
                    <h1 className="text-center mt-3">Home</h1>
                    <Footer />
            </React.Fragment>
        )
    }
}