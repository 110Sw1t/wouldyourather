import { Component } from 'react';

import { withRouter } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class QuestionCard extends Component {

   // Styles

   cardStyle = {
      margin: "auto",
      width: '15rem',
   }

   // Event listeners

   onViewPoll = () => {
      const questionId = this.props.question.id;
      this.props.history.push("/questions/"+questionId);
   }

   // Life cycle

   render() {
      const question = this.props.question;
      const author = this.props.author;
      return (
         <Card style={this.cardStyle}>
            <Card.Img variant="top" src={author.avatarURL} alt="Avatar" />
            <Card.Body>
               <Card.Title>{author.name + " asks, would you rather"}</Card.Title>
               <ul>
                  <li>{question.optionOne.text}</li>
                  Or ... <br />
                  <li>{question.optionTwo.text}</li>
               </ul>
               <Button variant="primary" style={{ margin: "auto" }} onClick={this.onViewPoll}>View Poll</Button>
            </Card.Body>
         </Card>
      );
   }
}

export default withRouter(QuestionCard);