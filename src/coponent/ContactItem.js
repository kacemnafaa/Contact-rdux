import React, { Component } from 'react'
import {connect} from 'react-redux'

class ContactItem extends Component {
    remove=(id)=>{
        this.props.removeredoucer(id)

    }
    render() {
        const {item}=this.props
        return (
        <div className='contactitem-container'>
            <div>
                <h2>Name:{item.name}</h2>
                <h3>mail:{item.email}</h3>
                <h3>phone:{item.phone}</h3>
            </div>
            <div>
                <button>Edit</button>
                <button onClick={() => this.remove(item.id)}>Remove</button>
            </div>
        </div>
        )
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        removeredoucer: id => {

            dispatch({
                type: 'REMOVE-CONTACT',
                id
            })
        }
    }
}
export default connect(null, mapDispatchToprops)(ContactItem)
