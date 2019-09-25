/* All librarys */
import React, { Component } from 'react';

/* Components */
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import WhatIs from '../components/home/WhatIs';
import Technology from '../components/home/Technology';
import Phases from '../components/home/Phases';
import Requirements from '../components/home/Requirements';
import Location from '../components/home/Location';
import Comments from '../components/home/Comments';
import Benefits from '../components/home/Benefits';
import Dates from '../components/home/Dates'


export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <WhatIs/>
                <Requirements/>
                <Phases/>
                <Dates/>
                <Technology/>
                <Comments/>
                <Benefits/>
                <Location/>
                <Footer />
            </React.Fragment>
        )
    }
}