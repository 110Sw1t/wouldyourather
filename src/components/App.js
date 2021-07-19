import { Component } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import LoginPage from '../routes/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  render() {
    return (
      <Switch>
        <LoginPage users={this.props.users} />
      </Switch>
    );
  }
}

export default connect((state) => (state))(App);
