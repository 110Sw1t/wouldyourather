import { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class QuestionCard extends Component {

   // Styles

   cardStyle = {
      margin: "auto",
      width: '15rem',
   }

   render() {
      const question = this.props.question;
      const author = this.props.author;
      return (
         <Card style={this.cardStyle}>
            <Card.Img variant="top" src={author.avatarURL} alt="Avatar"/>
            <Card.Body>
               <Card.Title>{author.name + " asks, would you rather"}</Card.Title>
               <Card.Text>
                  <ul>
                     <li>{question.optionOne.text}</li>
                     Or ... <br />
                     <li>{question.optionTwo.text}</li>                    
                  </ul>
               </Card.Text>
               <Button variant="primary" style={{margin:"auto"}}>View Poll</Button>
            </Card.Body>
         </Card>
      );
   }
}