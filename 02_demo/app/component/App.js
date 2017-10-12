/**
 * Created by easterCat on 2017/10/9.
 */
import React from 'react';
import Header from './Header';
import Content from './Content';
import Sidebar from './Sidebar';
import '../style/app.scss';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <Sidebar/>
                <Content/>
            </div>
        )
    }
}
export default App;