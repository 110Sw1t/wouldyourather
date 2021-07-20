import { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import LoginPage from '../routes/LoginPage';
import AddQuestionPage from '../routes/AddQuestionPage';
import LeaderboardPage from '../routes/LeaderboardPage';
import HomePage from '../routes/HomePage';
import QuestionPollPage from '../routes/QuestionPollPage';
import NotFoundPage from '../routes/NotFoundPage';

import { handleInitData } from "../actions/shared";

import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {

  // Lifecycle

  componentDidMount() {
    this.props.dispatch(handleInitData());
  }

  render() {
    const { loggedInUser } = this.props;
    const isUserLoggedIn = loggedInUser && Object.keys(loggedInUser).length;
    const loginPage = <LoginPage />
    const otherPages = (
      <Switch>  
        <Route exact path="/add">
          <AddQuestionPage />
        </Route>
        <Route exact path="/leaderboard">
          <LeaderboardPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/questions/:question_id">
          <QuestionPollPage />
        </Route>
        <Route>
          <NotFoundPage />
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
