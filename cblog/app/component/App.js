/**
 * Created by easterCat on 2017/10/13.
 */
import React from 'react';
import Home from './Home/Home';
import Register from './user/Register';
import Login from './user/Login';
import {Route} from 'react-router-dom'
import '../style/app.scss';
import 'antd/dist/antd.less';

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
        } else if (location.pathname === '/login') {
            history.replace('/login')
        }
    }

    render() {
        return (
            <div className="app">
                <Route path="/home" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
            </div>
        )
    }
}

export default App;