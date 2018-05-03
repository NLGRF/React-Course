import React, { Component } from 'react';

class Header extends Component {
  constructor(){
    super();
    this.state={
      name:"Unlike",
      count:0
    }
  }
    render() {
      setTimeout(()=>{
        this.setState({name:"Like"});
      },2000);
      setInterval(()=>{
        this.setState({count:this.state.count+1});
      },100);
      return (
        <div>
          <h1>Robot Club</h1>
          <h2>{this.state.name}</h2>
          <h2>{this.state.count}</h2>
        </div>
      );
    }
}

export default Header;
