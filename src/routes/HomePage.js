import { Component } from 'react';

import QuestionTabs from '../components/QuestionTabs';


/**
 * @description Home page 
 * @constructor
 */
 export default class HomePage extends Component {

   // Styles

   style = {
      margin: "auto",
      height: '100vh',
      width: "15rem",
   }


   render() {

      return (
         <div style={this.style}>
            <QuestionTabs />
         </div>
      );
   }
}

