import React, { Component } from 'react'
import{Link}from'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1> My Contact List</h1>
                <Link to='/contact'>
                <button>liste Contact</button>
                </Link>
                <Link to='/addcontact'>
                    <button>Add Contact</button>
                    </Link>
            </div>
        )
    }
}
