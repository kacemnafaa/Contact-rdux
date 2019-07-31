import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import ContactItem from './ContactItem'
// import Listcontredoucer from 're'
import './App.css';

class Contactliste extends Component {
    
    render() {
        const { contactReducer } = this.props
        return (
            <div className='contactliste-container'>


                <h1>CONTACT LIST </h1>

                <div className='contactliste'>
                    {this.props.contactReducer.map((el, index) => <ContactItem item={el} key={index} />)}

                    
                </div>
                <Link to='/'>
                    <button>Home</button>
                </Link>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        contactReducer: state.Listcontredoucer
    }
}

export default connect(mapStateToProps)(Contactliste);