import {GET_CONTACTS,DELETE_CONTACT, ADD_CONTACT,GET_CONTACT,UPDATE_CONTACT} from '../action/types'

const initialState ={
    contacts:[],
    contact:{} // this represents a current contact which is viewed
};

export default (state=initialState,action) =>{
 switch(action.type){
    case GET_CONTACTS:
        return {
            ...state,
            contacts:action.payload
        };
        case GET_CONTACT:
        return {
            ...state,
            contact:action.payload
        };
    case DELETE_CONTACT:
        return {
            ...state,
            contacts:state.contacts.filter(contact=>
            contact.id!==action.payload
            )
        }
     case ADD_CONTACT:
         return {
             ...state,
             contacts:[action.payload,...state.contacts]
         }
     case UPDATE_CONTACT:
         return { 
        
                ...state,
              contact:action.payload,
             contacts: state.contacts.map(
                 contact=>contact.id === action.payload.id ?
                 (contact = action.payload):
                  contact 
                 )
              } ;     
        default:
            return state
}
}