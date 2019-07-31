import{Route}from'react-router-dom';
import React, { Component } from 'react'
import Home from './Home';
import Contactliste from './Contactliste'
import Addcontact from './Addcontact'

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path='/'component={Home}/>
                <Route exact path='/contact'component={Contactliste}/>
                <Route exact path='/addcontact' component={Addcontact}/> 
            </div>
        )
    }
}

