import React, {Component} from 'react';
import Header from './Header';
import Manu from './Manu';
import Footer from './Footer';

class App extends Component{
  render(){
    return(
      <div>
        <Header/>
        <Manu/>
        <Footer/>
      </div>
    )
  }
}
export default App;