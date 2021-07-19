import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import RootReducer from './reducers/index.js'
import Middleware from './middleware/index.js'
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom';
import history from './routes/history';

const store = createStore(RootReducer, Middleware);

(function () {
  const redirectToLoginPageIfNotLoggedIn = () => {
    const { loggedInUser } = store.getState();
    let hasUserLoggedIn = loggedInUser && Object.keys(loggedInUser).length
    if(!hasUserLoggedIn) {
      history.push("/login");
    }
  }

  
  redirectToLoginPageIfNotLoggedIn();
  store.subscribe(() => {
    redirectToLoginPageIfNotLoggedIn();
  })
  history.listen((location) => {
    // To break infinite recursion if the user is not logged in history.push => history.eventListener => history.push
    if(location.pathname !== "/login") {
      redirectToLoginPageIfNotLoggedIn();
    }
  })
})()

ReactDOM.render(
// provider doesn't depend on routing
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
