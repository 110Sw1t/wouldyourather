import { Component } from 'react';
import { connect } from 'react-redux';

// Use package/x instead of {x} from package to reduce amount of code packaged to user
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { handleAddQuestion } from '../actions/questions';

/**
 * @description Login form 
 * @constructor
 * @param { object } props.users - Available users for login
 */
class AddQuestionForm extends Component {


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

   onSubmit = (e) => {
      e.preventDefault();
      const question = { 
         optionOneText: this.option1.value, 
         optionTwoText:this.option2.value, 
         author: this.props.loggedInUser.id
      }
      this.props.dispatch(handleAddQuestion(question));
   }

   // refs

   option1 = null;
   option2 = null;

   render() {

      return (

         <div style={this.formStyle}>
            <Modal.Dialog>
               <Modal.Header>
                  <Modal.Title>Would you rather?</Modal.Title>
               </Modal.Header>

               <Modal.Body>
                  <Form>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Option One</Form.Label>
                        <Form.Control type="text" placeholder="Option One" ref={(element) => this.option1 = element} />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Option Two</Form.Label>
                        <Form.Control type="text" placeholder="Option Two" ref={(element) => this.option2 = element} />
                     </Form.Group>
                     <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                  </Form>
               </Modal.Body>
            </Modal.Dialog>
         </div>
      );
   }
}

export default connect((state) => ({ loggedInUser: state.loggedInUser }))(AddQuestionForm);