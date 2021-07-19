import { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';


/**
 * @description Login page 
 * @constructor
 */
export default class LoginPage extends Component {

   static propTypes = {
      users: PropTypes.object,
   }

   style = {
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
   }

   render() {
      return (
         <div style={this.style}>
            <LoginForm users={this.props.users} />
         </div>
      );
   }
}

