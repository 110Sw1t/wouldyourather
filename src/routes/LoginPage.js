import { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';


/**
 * @description Login page 
 * @constructor
 */
export default class LoginPage extends Component {

   static propTypes = {
      users: PropTypes.object.isRequired,
   }

   style = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
   }

   render() {
      return (
         <Route exact path="/login">
            <div style={this.style}>
               <LoginForm users={this.props.users} />
            </div>
         </Route>
      );
   }
}

