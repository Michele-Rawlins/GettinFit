import React from 'react';


class MyFooter extends React.Component {
  render() {
    return (
      <nav style={{backgroundColor: '#9D576D', color: '#fff'}}
           className="navbar bottom">
          <i className="navbar-brand text-center mx-auto">@2020 GettinFit</i>
      </nav>
    );
  }
}

export default MyFooter;