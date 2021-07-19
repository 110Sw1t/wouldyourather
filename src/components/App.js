import { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import LoginPage from '../routes/LoginPage';
import AddQuestionPage from '../routes/AddQuestionPage';

import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {

  render() {
    const { loggedInUser } = this.props;
    const isUserLoggedIn = loggedInUser && Object.keys(loggedInUser).length;
    const loginPage = <LoginPage />
    const otherPages = (
      <Switch>  
        <Route exact path="/add">
          <AddQuestionPage />
        </Route>
      </Switch>
    )
    return (
      <>
        <NavigationBar />
        {(isUserLoggedIn)? (
          otherPages
        ) : (
          loginPage
        )}
      </>
    );
  }
}

export default connect((state) => (state))(App);
