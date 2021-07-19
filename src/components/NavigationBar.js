import { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

// Use package/x instead of {x} from package to reduce amount of code packaged to user
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';


import { logoutUser } from '../actions/session';

class NavigationBar extends Component {


   // Styles

   avatarStyle = {
      height: "8vh"
   }


   // Event listeners

   onLogout = () => {
      this.props.dispatch(logoutUser())
   }

   // Lifecycle

   render() {
      return (
         <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{ height: "35%" }}>
            <Container>

               <Link className="navbar-brand" to="/">
                  Would You Rather ?
               </Link>

               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                     <Link className="nav-link" to="/">Home</Link>
                     <Link className="nav-link" to="/add">New Question</Link>
                     <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                  </Nav>
                  {
                     this.props.loggedInUser && Object.keys(this.props.loggedInUser).length &&
                     (
                        <Nav>
                           <Button variant="success" size="sm">
                              {this.props.loggedInUser.name}
                              <Badge bg="secondary"><img style={this.avatarStyle} src={this.props.loggedInUser.avatarURL} alt="Avatar" /></Badge>
                           </Button>
                           <Button variant="secondary" size="sm" onClick={this.onLogout}>
                              Logout
                           </Button>
                        </Nav>
                     )
                  }

               </Navbar.Collapse>
            </Container>
         </Navbar>
      );
   }
}

export default connect((state) => ({ loggedInUser: state.loggedInUser }))(withRouter(NavigationBar));
