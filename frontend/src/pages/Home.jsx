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

export default class Home extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <WhatIs id="whatis" key="whatis" />
                <Requirements id="requirements" key="requirements"/>
                <Technology id="technology" key="technology" />
                <Phases />
                <Comments />
                <Location />
                <Footer />
            </React.Fragment>
        )
    }
}