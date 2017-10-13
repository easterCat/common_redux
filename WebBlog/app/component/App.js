/**
 * Created by easterCat on 2017/10/13.
 */
import React from 'react';
import Home from './Home';
import Login from './user/Login';
import {Route} from 'react-router-dom';

class App extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const {
            location,
            history
        } = this.props;
        if (location.pathname === '/home' || location.pathname === '/') {
            history.replace('/home')
        } else {
            history.replace('/login')
        }
    }

    render() {
        return (
            <div className="app">
                <Route path="/home" component={Home}/>
                <Route path="/login" component={Login}/>
            </div>
        )
    }
}

export default App;