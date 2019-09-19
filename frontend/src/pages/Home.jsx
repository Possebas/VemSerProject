/* All librarys */
import React, { Component } from 'react';

/* Components */
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import WhatIs from '../components/home/WhatIs';
import Technology from '../components/home/Technology';
import Phases from '../components/home/Phases';


export default class Home extends Component {

    /* constructor(props){
        super(props)
    } */

    render() {
        return (
            <React.Fragment>
                    <NavBar/>
                    <WhatIs />
                    <Technology />
                    <Phases />
                    <Footer />
            </React.Fragment>
        )
    }
}