/**
 * Created by easterCat on 2017/7/14.
 */
import React from 'react';
import '../style/Havestate.css';

class HaveState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDrap: false,
            inputText: '今天是个好日子',
            listArray: ['1', '2', '3', '4']
        }
        ;
        this.controlShowDrap = this.controlShowDrap.bind(this);
        this.changeInputText = (e) => {
            this.setState({
                inputText: e.target.value
            })
        }
        console.log(213);
    }

    controlShowDrap() {
        this.setState({
            showDrap: !this.state.showDrap
        })
    }

    render() {
        return (
            <div>
                <input type="text" placeholder={this.state.inputText} onChange={this.changeInputText}/>
                <div className="dropdown">
                    <span className="dropdown-span" onClick={this.controlShowDrap}>{this.state.inputText}</span>
                    <ul className="dropdown-list">
                        {
                            this.state.showDrap ? this.state.listArray.map((item, index) => {
                                return <li className="dropdown-item"><span className="dropdown-item-span">
                                    {item}
                                </span></li>
                            }) : null
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default HaveState;