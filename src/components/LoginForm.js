import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Use package/x instead of {x} from package to reduce amount of code packaged to user
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { handleRetreiveUsers } from '../actions/users';
import { loginUser } from '../actions/session';




/**
 * @description Login form 
 * @constructor
 * @param { object } props.users - Available users for login
 */
class LoginForm extends Component {
   static propTypes = {
      users: PropTypes.object.isRequired
   }

   state = {
      selectedUserId: null,
   }


   // Styles

   formStyle = {
      height: "50%",
      width: "50%",
   }

   eventPassthroughStyle = {
      pointerEvents: "none",
   }

   avatarStyle = {
      height: "8vh"
   }

   // Event listeners

   onMenuItemSelect = (_, event) => {
      this.setState((prevState) => ({selectedUserId: event.target.name}))
   }

   onLoginClick = (_, event) => {
      this.props.dispatch(loginUser(this.props.users[this.state.selectedUserId]))
   }

   
   // Lifecycle

   componentDidMount() {
      this.props.dispatch(handleRetreiveUsers());
   }

   render() {
      const selectedUser = this.props.users[this.state.selectedUserId];
      
      return (

         <div style={this.formStyle}>
         <Modal.Dialog>
            <Modal.Header>
               <Modal.Title>Login</Modal.Title>
            </Modal.Header>

            <Modal.Body>
               <p>Choose a User</p>
               <Dropdown>
                  <Dropdown.Toggle>
                     {selectedUser && <img style={{...this.avatarStyle, ...this.eventPassthroughStyle}} src={selectedUser.avatarURL} alt={"Avatar"}/>}
                     {(selectedUser && selectedUser.name) || "Users"}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                     {Object.keys(this.props.users).map((userKey) => {
                        const user = this.props.users[userKey];
                        return <Dropdown.Item key={user.id} onSelect={this.onMenuItemSelect} name={user.id}>
                           <img style={{...this.avatarStyle, ...this.eventPassthroughStyle}} src={user.avatarURL} alt={"Avatar"}/>
                           <span style={this.eventPassthroughStyle}>{user.name}</span> 
                        </Dropdown.Item>
                     })}
                  </Dropdown.Menu>
               </Dropdown>
            </Modal.Body>

            <Modal.Footer>
               <Button variant="primary" onClick={this.onLoginClick}>Login</Button>
            </Modal.Footer>
         </Modal.Dialog>
         </div>
      );
   }
}

export default connect((state) => ({ users: state.users }))(LoginForm);