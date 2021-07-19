import { Component } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import history from '../routes/history';
import LoginPage from '../routes/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {


  componentDidMount() {
    



  }

  componentDidUpdate(prevProps) {
    // If user logged in then push new page
    if (!prevProps.loggedInUser || !Object.keys(prevProps.loggedInUser).length) {
      if (this.props.loggedInUser && Object.keys(this.props.loggedInUser).length) {
        history.push("/");
      }
    }
  }

  render() {
    return (
      <Switch>
        <LoginPage users={this.props.users} />
      </Switch>
    );
  }
}

export default connect((state) => (state))(App);
