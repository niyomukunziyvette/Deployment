import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getContact ,updateContact} from '../action/ContactTask';
import Contact from './Contact';
import'../Css/container.css'; 
class EditContact extends Component {
  state = {
    name: '',
    phone_number: ''
  };
componentWillReceiveProps(nextProps){
  
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
    const { id } = this.props.match.params;
    const upudatedContact = {
      id,
      name,
      phone_number
      
    };

    // Update contact
this.props.updateContact(upudatedContact);
    // Clear State
    this.setState({
      name: '',
      phone_number: '',
    });

    this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name,phone_number } = this.state;
    
    return (
      <div className="card mb-3 id=body">
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
                                   />
                            </div>
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
  Contact.propTypes = {
  contact:PropTypes.object.isRequired,
  getContact:PropTypes.func.isRequired
}
const mapStateToProps= (state)=>({
 contact:state.contact.contact

})
export default connect(mapStateToProps, {getContact,updateContact}) (EditContact);

