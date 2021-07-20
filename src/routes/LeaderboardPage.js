import { Component } from 'react';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';

/**
 * @description Leaderboard page 
 * @constructor
 */
class LeaderboardPage extends Component {


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
                     <th>Answered</th>
                     <th>Asked</th>
                  </tr>
               </thead>
               <tbody>
                  {sortedUsers.map((user, index) => (
                  <tr key={user.id}>
                     <td>{index + 1}</td>
                     <td><img src={user.avatarURL} alt="Avatar" style={this.avatarStyle}/></td>
                     <td>{user.name}</td>
                     <td>{Object.keys(user.answers).length}</td>
                     <td>{user.questions.length}</td>
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