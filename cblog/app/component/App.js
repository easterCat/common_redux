/**
 * Created by easterCat on 2017/10/13.
 */
import React from 'react';
import {connect} from 'react-redux';
import Home from './Home/Home';
import Register from './user/Register';
import Login from './user/Login';
import ChangeUser from './user/ChangeUser';
import {Route} from 'react-router-dom'

class App extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const {
            location,
            history,
            user
        } = this.props;

        if (user) {
            if (location.pathname === '/home' || location.pathname === '/') {
                history.replace('/home')
            }
        } else {
            if (location.pathname !== '/register') {
                history.replace('/login')
            }
        }

    }

    render() {
        return (
            <div className="app">
                <Route path="/home" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/changeuser" component={ChangeUser}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.get('session').get('user'),

    }
}

export default connect(mapStateToProps)(App)