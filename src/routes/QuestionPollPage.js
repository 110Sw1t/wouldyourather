import { Component } from 'react';
import QuestionPollForm from '../components/QuestionPollForm';

export default class QuestionPollPage extends Component {

   style = {
      // display:'block',
      // margin:'auto',
      // height: '1px',
   }

   render() {
      return (
         <div style={this.style}>
            <QuestionPollForm />
         </div>
      );
   }
}