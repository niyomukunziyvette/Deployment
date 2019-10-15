import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getContact ,updateContact} from '../action/ContactTask';
import Contact from './Contact';

class EditContact extends Component {
  state = {
    name: '',
    phone_number: '',
    errors: {}
  };
componentWillReceiveProps(nextProps,nextState){
  const {name,phone_number}= nextProps.contact;
  this.setState({name,phone_number})
}
componentDidMount(){
  const {id}= this.props.match.params;
  this.props.getContact(id)
}
  onSubmit = (e) => {
    e.preventDefault();

    const { name, phone_number } = this.state;

    // Check For Errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (phone_number === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }

    
    const { id } = this.props.match.params;
    const updContact = {
      id,
      name,
      phone_number
    };

    // Update contact
this.props.updateContact(updContact);
    // Clear State
    this.setState({
      name: '',
      phone_number: '',
     // errors: {}
    });

    this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name,phone_number } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Edit Contact</div>
        <div className="card-body">
        <form onSubmit={this.onSubmit}>      
      <div className="form-row names" >
        <div className="form-name">
          <label>Name</label>
          <input className="form-control" 
          type="tel" 
          required placeholder="John" 
          id="cardCVC" 
          name="name"
          value={name}
          onChange={this.onChange}
          />
          </div>
     </div>

     <div className="form-row">
        <div className="form-number">
          <label>Mobile</label>
          <input className="form-control" 
          type="tel"
           required placeholder="+111 1111 1111" 
           id="cardCVC" 
           name="phone_number"
           value={phone_number}
           onChange={this.onChange}
           /></div>
     </div>
     <div>
       
         <button className="add-number"> + Add Number</button>
        
    </div>
            
       
       </form>
      
        </div>
      </div>
    );
  }
}
  Contact.PropTypes = {
  contact:PropTypes.object.isRequired,
  getContact:PropTypes.func.isRequired
}
const mapStateToProps= (state)=>({
 contact:state.contact.contact
})
export default connect(mapStateToProps, {getContact,updateContact}) (EditContact);

