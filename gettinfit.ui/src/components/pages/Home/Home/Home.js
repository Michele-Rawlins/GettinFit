import React from 'react';
// import MyCarousel from '../../shared/MyCarousel/MyCarousel';

import './Home.scss';


class Home extends React.Component {
  state = {
    // MyCarousel: [],
  }

  render() {
   
    

    return (
     

   <div className="Home container">
      <h1 className ="title">Welcome to Gettin Fit</h1>
      {/* <MyCarousel /> */}
  <div className = "aboutUs">
    <h2 className = "aboutUs">About Us</h2>
  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
  </div>
  </div>
         
    );   
    }
  }
  
  export default Home;