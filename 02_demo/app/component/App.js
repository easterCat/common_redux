/**
 * Created by easterCat on 2017/10/9.
 */
import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}
export default App;