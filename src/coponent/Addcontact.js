import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import{connect} from 'react-redux'
class Addcontact extends Component {
    state={ }
   handelChange=(event)=>
    {
     
      this.setState({
[event.target.name]:event.target.value
      })
    }
 Add=()=>{
    this.props.addredoucer(this.state)
 }
    render() {
        return (<div>
                <h1>Add Contact</h1>
                <h6> Name</h6>
                <input type='name' name='name'onChange={this.handelChange} />
                <h6> Phone</h6>
                <input type='phone' name='phone' onChange={this.handelChange}/>
                <h6> Email</h6>
                <input type='email' name='email' onChange={this.handelChange}/>
                <div>
                    <Link to='/contact'>
                <button onClick={this.Add}>Add contact</button>
                </Link>
                </div>

            </div>
        );
    }
}
const mapDispatchToprops=(dispatch)=>{
    return{
        addredoucer:newcontact=>{

            dispatch({type:'ADD-CONTACT',
            newcontact})
        }
    }
}
export default connect(null,mapDispatchToprops)(Addcontact)