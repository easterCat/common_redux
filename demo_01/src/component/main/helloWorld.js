/**
 * Created by easterCat on 2017/7/7.
 */

import React from 'react';

class HelloWorld extends React.Component {
    state = {
        switch: 0,
        name: this.props.name1
    };

    // clickHander = () => {
    //     const {name1, name2} = this.props;
    //     if (this.state.switch === 0) {
    //         this.setState({
    //             switch: 1,
    //             name: name2
    //         })
    //     } else {
    //         this.setState({
    //             switch: 0,
    //             name: name1
    //         })
    //     }
    //     console.log(123)
    // };


    clickHander = () => {
        const {name1, name2} = this.props;
        if (this.state.switch === 0) {
            this.setState({
                switch: 1,
                name: name2
            })
        } else {
            this.setState({
                switch: 0,
                name: name1
            })
        }
        console.log(123)
    }

    render() {
        return (
            <div onClick={this.clickHander}>hello world !{this.state.name}</div>
        )
    }
}
;

export default HelloWorld;
