import { Component } from 'react';

import NotFoundBackground from '../assets/backgrounds/notfound.jpg';

export default class NotFoundPage extends Component {

   // Style

   style = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
   }

   render() {
      return (
         <div style={this.style}>
            <img src={NotFoundBackground} alt="Page not Found" />
         </div>
      );
   }
}