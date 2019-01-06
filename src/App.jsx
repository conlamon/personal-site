import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Footer from './Components/Footer';
// import Resume from './Componenets/Resume';
// import Contact from './Components/Contact';
// import Portfolio from './Components/Portfolio';
import resumeData from './data/resumeData.json';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            resumeData: resumeData,
        }
    }


  render() {
    return (
      <div className="App">
          <Header    data={this.state.resumeData.main}/>
          <About     data={this.state.resumeData.main}/>
          <Footer    data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
