import { Component } from 'react';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';

import { handleRetreiveUsers } from '../actions/users';

/**
 * @description Leaderboard page 
 * @constructor
 */
class LeaderboardPage extends Component {

   // Lifecycle

   componentDidMount() {
      this.props.dispatch(handleRetreiveUsers());
   }

   // Styles

   style = {
      margin: "auto",
      width: "60%",
      height: '100vh',
   }

   avatarStyle = {
      height: "8vh"
   }

   render() {

      const usersAsArray = Object.keys(this.props.users).map((userId) => this.props.users[userId]);
      
      const sortedUsers = usersAsArray.sort(LeaderboardPage.compareScore);

      return (
         <div style={this.style}>
            <Table striped borderless hover>
               <thead>
                  <tr>
                     <th>#</th>
                     <th>Ava</th>
                     <th>Name</th>
                     <th>Score</th>
                  </tr>
               </thead>
               <tbody>
                  {sortedUsers.map((user, index) => (
                  <tr>
                     <td>{index + 1}</td>
                     <td><img src={user.avatarURL} alt="Avatar" style={this.avatarStyle}/></td>
                     <td>{user.name}</td>
                     <td>{user.questions.length + Object.keys(user.answers).length}</td>
                  </tr>
                  ))}                  
               </tbody>
            </Table>
         </div>
      );
   }

   static compareScore(user1, user2) {
      let user1Score = user1.questions.length + Object.keys(user1.answers).length;
      let user2Score = user2.questions.length + Object.keys(user2.answers).length;
      return user2Score - user1Score;
   }
   
}

export default connect((state) => ({ users: state.users }))(LeaderboardPage);