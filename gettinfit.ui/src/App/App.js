import React from 'react';
import fbConnection from "../helpers/data/connection";
import Login from '../components/pages/Login/Login';
import './App.scss';
import 'firebase/auth';
import firebase from 'firebase/app';



import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import MyNavbar from '../components/shared/MyNavbar/MyNavbar';
import Home from '../components/pages/Home/Home/Home';
import Jumbotron from '../components/pages/Home/JumbotronHome/JumbotronHome';
import NewUser from '../components/pages/NewUser/NewUser';
import Users from '../components/pages/Users/Users';
import SingleUser from '../components/shared/SingleUser/SingleUser';
import Meal from '../components/pages/Meal/Meal';
import UserProfile from '../components/pages/UserProfile/UserProfile';
import EditUser from '../components/pages/EditUser/EditUser';
import Workout from '../components/pages/Workout/Workout';
import MyFooter from '../components/shared/MyFooter/MyFooter';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

// const PrivateRoute = ({ component: Component, authed, ...rest }) => {
//   const routeChecker = (props) => (authed === true
//     ? (<Component {...props} />)
//     : (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />));
//   return <Route {...rest} render={(props) => routeChecker(props)} />;
// };

const PrivateRoute = ({ component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: {from: props.location}}}
          />
        )
      }
    />
  );
};


class App extends React.Component {

  state={
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
      
    });
  };
    
  

  componentWillUnmount() {

    this.removeListener();
  };

  
  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Jumbotron></Jumbotron>
            <MyNavbar authed={authed} />
            
            <div className="container">
              <div className="row">
              <Switch>
              <Route path='/home' component={Home} authed={authed} />
              <Route path='/users/new' component={NewUser} authed={authed} />
              <Route path='/users/edit' component={EditUser} authed={authed} />
              <Route path='/users/:usersId' component={SingleUser} authed={authed} />
              <PrivateRoute path='/workout' component={Workout} authed={authed} />
              <Route path='/users' component={Users} authed={authed} />
              <PrivateRoute path='/meals' component={Meal} authed={authed} />
              <PrivateRoute path='/userProfile' component={UserProfile} authed={authed} /> 
              <Route path='/login' component={Login} authed={authed}/>
                <Redirect from="*" to='/home'/>
              </Switch>
              </div>
            </div>
            <MyFooter/>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;

