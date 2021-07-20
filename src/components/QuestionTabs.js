import { Component } from 'react';
import { connect } from 'react-redux';

import Nav from 'react-bootstrap/Nav';
import CardColumns from 'react-bootstrap/CardColumns';

import QuestionCard from '../components/QuestionCard';

/**
 * @description Question tabs 
 * @constructor
 */
class QuestionTabs extends Component {

   state = {
      selectedTab: QuestionTabs.UNANSWERED,
   }

   static ANSWERED = "Answered";
   static UNANSWERED = "Un-Answered"

   // Styles

   // Event listeners

   onTabSelect = (e) => {
      this.setState((prevState) => ({ selectedTab: e.target.name }))
   }

   // Lifecycle

   render() {

      const questionsAsArray = Object.keys(this.props.questions).map((qId) => this.props.questions[qId]);
      const answeredQuestions = Object.keys(this.props.loggedInUser.answers).map((qId) => this.props.questions[qId])
      const unansweredQuestions = questionsAsArray.filter((question) => !answeredQuestions.includes(question));

      const presentedQuestions = (this.state.selectedTab === QuestionTabs.ANSWERED)? 
                                             answeredQuestions.sort(QuestionTabs.compareQuestionTimestamp) : 
                                             unansweredQuestions.sort(QuestionTabs.compareQuestionTimestamp);

      // event key to mark UI selection
      // name to mark js selection
      return (
         <>
            <Nav fill variant="tabs" activeKey={this.state.selectedTab}>
               <Nav.Item>
                  <Nav.Link eventKey={QuestionTabs.ANSWERED} name={QuestionTabs.ANSWERED} onClick={this.onTabSelect}>{QuestionTabs.ANSWERED}</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link eventKey={QuestionTabs.UNANSWERED} name={QuestionTabs.UNANSWERED} onClick={this.onTabSelect}>{QuestionTabs.UNANSWERED}</Nav.Link>
               </Nav.Item>
            </Nav>
            <CardColumns>
               {presentedQuestions.map((q) => (
               <QuestionCard key={q.id} question={q} author={this.props.users[q.author]} />
               ))}
            </CardColumns>
         </>
      );
   }

   static compareQuestionTimestamp(q1, q2) {
      return q2.timestamp - q1.timestamp;
   }

}

export default connect((state) => (state))(QuestionTabs);