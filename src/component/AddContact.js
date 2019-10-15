
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import '../component/Contacts';
import {addContact} from '../action/ContactTask';

class AddContact extends Component {
  state = {
   
    phone_number: '',
    fname:'',
    lname:''
  
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { phone_number,fname,lname } = this.state;
  const newContact = {
      name:fname+' '+lname,
      phone_number:phone_number
     
     };
  

    // Submit Contact 
       this.props.addContact(newContact)
   
    this.setState({
      phone_number: '',
      fname:'',
      lname:''
    
    });

    this.props.history.push('/');
  };

onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { fname,lname,phone_number} = this.state;

    return (
      <div className="card mb-3">
          <div className="card-header">Add Contact</div>
             <div className="card-body">
                  <form onSubmit={this.onSubmit}>
                     <div className="form-row names" >
                        <div className="form-name">
                           <label>Name</label>
                               <input className="form-control" 
                                     type="tel" 
                                     required placeholder="John" 
                                     id="cardCVC" 
                                     name="fname"
                                     value={fname}
                                    onChange={this.onChange}
                                 />
                           </div>
                       </div>
                      <div className="form-row names">
                         <div className="sname form-name">
                             <label>Surname</label>
                                   <input className="form-control" 
                                          type="tel" 
                                          required placeholder="Smith" 
                                          id="cardCVC"
                                          name="lname" 
                                          value={lname}
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
  addContact.propTypes={
  addContact:PropTypes.func.isRequired,

}
export default connect(null,{addContact})(AddContact);