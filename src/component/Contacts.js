import React from 'react';
import Contact from './Contact';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../component/Contacts';
import {Link} from 'react-router-dom';
//import AddContact from './ AddContact';
import {getContacts} from '../action/ContactTask';
//import Contact from '../component/Contact'

class Contacts extends React.Component {
  componentDidMount(){
    this.props.getContacts();
  }
  render() {
    const { contacts } = this.props;
   

    return (
      <React.Fragment>
   


         <div className="detail-content" key={this.id}>
            <h1 className="Title">Phone Book Manager</h1>
             <ul className="list-group list-group-horizontal-sm" >
                 <li className="list-width list-group-item">Name</li>
                   <li className="list-width list-group-item">Phone Number</li>
                   <li className="list-group-item">Edit</li>
                   <li className="list-group-item">Delete</li>
                    </ul>
                    </div> 
                    {/* &nbsp; &nbsp; &nbsp; */}
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
          ))}
        <Link to="/contact/add">
        <button className="add-button" > + Add Contact</button>
        </Link>

      </React.Fragment>
    );
  }
}; 
Contact.PropTypes = {
contacts:PropTypes.array.isRequired,
getContacts:PropTypes.func.isRequired
}
const mapStateToProps=(state)=>({
  //we access this from redux state which is "contact"
  contacts:state.contact.contacts
});

export default connect(
  mapStateToProps,
  {getContacts}) (Contacts);

