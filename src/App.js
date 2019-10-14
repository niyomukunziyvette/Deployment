import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './component/Contacts';
import AddContact from './component/AddContact';
import EditContact from './component/EditContact';
import {Provider} from 'react-redux';
import store from './Store';
import Header from './component/header';
import Footer from './component/footer';

const App = () => {
    return(
       <Provider store={store}>
        <Router>
        <div className="App">
          <Header/>
           <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
            </Switch>
          </div>
        </div>
      </Router>
      <Footer/>
       </Provider>
        
)
}
export default App;