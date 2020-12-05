import React from 'react';
// import fbConnection from "../helpers/data/connection";
// import Login from '../components/pages/Login/Login';
import './App.scss';
// import 'firebase/auth';
// import firebase from 'firebase/app';



import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import MyNavbar from '../components/shared/MyNavbar/MyNavbar';
import Home from '../components/pages/Home/Home/Home';
import Jumbotron from '../components/pages/Home/JumbotronHome/JumbotronHome';

// import UserProfile from '../components/pages/UserProfile/UserProfile';
// import NewUser from '../components/pages/NewUser/NewUser';

// const PrivateRoute = ({ component: Component, authed, ...rest }) => {
//   const routeChecker = (props) => (authed === true
//     ? (<Component {...props} />)
//     : (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />));
//   return <Route {...rest} render={(props) => routeChecker(props)} />;
// };



class App extends React.Component {

  state={
    authed: false,
  }

  componentDidMount() {
    // this.removeListener = firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this.setState({ authed: true });
    //   } else {
    //     this.setState({ authed: false });
    //   }
      
    // });
  };
    
  

  componentWillUnmount() {

    // this.removeListener();
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
                {/* <Route path='/users/new' component={NewUser} authed={authed} />
                <PrivateRoute path='/users/:usersId' component={SingleUser} authed={authed} />
                <PrivateRoute path='/users' component={Users} authed={authed} />
                <PrivateRoute path='/userProfile' component={UserProfile} authed={authed} /> */}
                {/* <Route path="/login" component={Login} authed={authed}/> */}
                <Redirect from= "*" to="/home"/>
              </Switch>
              </div>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;