import { createStore, applyMiddleware, compose} from 'redux'; // cpmpose allows us to do more than one thing
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const initialState={}; //an empty object

const middleware =[thunk];
const store= createStore( rootReducer, initialState,
compose(
applyMiddleware(...middleware),

)
);

export default store;