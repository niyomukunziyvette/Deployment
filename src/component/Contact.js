import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import '../component/Contacts';
import {DeleteContact} from '../action/ContactTask';
import '../Css/container.css';

class Contact extends Component {
 
// Delete Contact
  onDeleteClick = id => {  
this.props.DeleteContact(id);
  };

  render() {
    const {id,name, phone_number} = this.props.contact;
   

    return (
      <div className="detail-content" key={this.id} >
           <ul className="list-group list-group-horizontal-sm" >
                 <li className="list-widths list-group-item">{name}</li> 
                 <li className="list-widths list-group-item">{phone_number}</li> 
                 <Link to={`/contact/edit/${id}`}>
                    
                         <i className=" list-group-item fas fa-edit" id="edit_button" ></i>
                      
                   </Link>
                       <i className="  list-group-item fas fa-trash delete" id="delete_button"onClick={this.onDeleteClick.bind(this, id)}></i> 
            </ul> 
      </div> 
      
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  DeleteContact:PropTypes.func.isRequired
};

export default connect(null,{DeleteContact}) (Contact);