import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

import { handleAnswerQuestion } from '../actions/questions';

/**
 * @description Question tabs 
 * @constructor
 */
class QuestionPollForm extends Component {

   state = {
      selectedOption: QuestionPollForm.OPTION_ONE,
   }

   static OPTION_ONE = "optionOne";
   static OPTION_TWO = "optionTwo";

   // Styles

   divHighlightedStyle = {
      boxShadow: "0rem 0rem 1rem 1rem #009ecf",
      backgroundColor: "white",
      borderRadius: "1rem",
      margin: "3rem 1rem 3rem 1rem",
      padding: "1rem"

   }

   authorAvatarStyle = {
      borderRadius: "4%",
      margin: "auto",
      width: "50%"
   }

   // Event listeners

   onValueChange = (e) => {
      this.setState((prev) => ({ selectedOption: e.target.value }))
   }

   onSubmit = (e) => {
      if (Object.keys(this.props.loggedInUser.answers).includes(this.props.match.params.question_id)) {
         alert("Question already answered");
         return;
      }
      let optionSelected = "";
      if (this.option1.checked) {
         optionSelected = QuestionPollForm.OPTION_ONE;
      } else if (this.option2.checked) {
         optionSelected = QuestionPollForm.OPTION_TWO;
      } else {
         alert("Kindly select an option");
         return;
      }
      let question = {
         id: this.props.match.params.question_id,
         answerer: this.props.loggedInUser.id,
         answer: optionSelected,
      }
      this.props.dispatch(handleAnswerQuestion(question))
   }


   // refs

   option1 = null;
   option2 = null;

   // Lifecycle

   componentDidMount() {
      const questionId = this.props.match.params.question_id;
      const question = this.props.questions[questionId];
      if (!question) {
         this.props.history.push("/404");
      }
   }

   static getDerivedStateFromProps(props, state) {
      const questionId = props.match.params.question_id;
      const question = props.questions[questionId];

      if (question) {
         const answer = props.loggedInUser.answers[question.id];

         const alreadyAnswered = Object.keys(props.loggedInUser.answers).includes(question.id);
         if (alreadyAnswered) {
            return { selectedOption: answer };
         }
      }
      
      return state;
   }

   render() {

      const questionId = this.props.match.params.question_id;
      const question = this.props.questions[questionId];
      if (!question) {
         return null;
      }
      const author = this.props.users[question.author];

      const alreadyAnswered = Object.keys(this.props.loggedInUser.answers).includes(question.id);
      const answer = this.props.loggedInUser.answers[question.id];

      const answeredOp1 = question.optionOne.votes.length;
      const answeredOp2 = question.optionTwo.votes.length;
      const total = answeredOp1 + answeredOp2;


      let op1Style = undefined;
      let op2Style = undefined;
      if (answer === QuestionPollForm.OPTION_ONE) {
         op1Style = this.divHighlightedStyle;
      } else if (answer === QuestionPollForm.OPTION_TWO) {
         op2Style = this.divHighlightedStyle;
      }

      return (
         <Modal.Dialog style={{ height: "1rem" }}>


            <img src={author.avatarURL} alt="Author avatar" style={this.authorAvatarStyle} />

            <ModalDialog centered={true} scrollable={false} size={"xl"}>{author.name}</ModalDialog>

            <Modal.Header>
               <Modal.Title>Would you rather</Modal.Title>
            </Modal.Header>

            <Modal.Body>


               <div style={op1Style}>
                  <label>
                     <input
                        type="radio"
                        value={QuestionPollForm.OPTION_ONE}
                        checked={this.state.selectedOption === QuestionPollForm.OPTION_ONE}
                        onChange={this.onValueChange}
                        ref={(ref) => this.option1 = ref}
                        disabled={alreadyAnswered}
                     />
                     {question.optionOne.text}
                  </label>
                  { alreadyAnswered && <ProgressBar now={Math.round(answeredOp1*100/total)} label={`${Math.round(answeredOp1*100/total)}% - {${answeredOp1} out of ${total}}`} />}
               </div>

               <div style={op2Style}>
                  <label>
                     <input
                        type="radio"
                        value={QuestionPollForm.OPTION_TWO}
                        checked={this.state.selectedOption === QuestionPollForm.OPTION_TWO}
                        onChange={this.onValueChange}
                        ref={(ref) => this.option2 = ref}
                        disabled={alreadyAnswered}
                     />
                     {question.optionTwo.text}
                  </label>
                  { alreadyAnswered && <ProgressBar now={Math.round(answeredOp2*100/total)} label={`${Math.round(answeredOp2*100/total)}% - {${answeredOp2} out of ${total}}`} />}
               </div>

               <br />
               <Button variant="primary" onClick={this.onSubmit} type="submit">Submit</Button>


            </Modal.Body>
         </Modal.Dialog>
      );
   }

}

export default withRouter(connect((state) => (state))(QuestionPollForm));