import React, {Component} from 'react';
import HelloWorld from './main/helloWorld';
import News from './main/News';
import Nostate from './main/Nostate'
import Havestate from './main/Havestate'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <HelloWorld name1="lilisi" name2="elisi"/>
                <News/>
                <Nostate name="tudou"/>
                <Havestate/>
            </div>
        );
    }
}

export default App;
