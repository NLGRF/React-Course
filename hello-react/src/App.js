import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
    render() {
      return (
        <div>
          <Header />
          <Content title="Course React" name="Non Robot" price="Free"/>
          <Footer />
        </div>
      );
    }
}

export default App;
