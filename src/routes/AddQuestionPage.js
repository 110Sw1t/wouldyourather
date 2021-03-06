import { Component } from 'react';
import AddQuestionForm from '../components/AddQuestionForm';

/**
 * @description Add question page 
 * @constructor
 */
export default class AddQuestionPage extends Component {

   style = {
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
   }

   render() {

      return (
         <div style={this.style}>
            <AddQuestionForm />
         </div>
      );
   }
}
