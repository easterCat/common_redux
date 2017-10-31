/**
 * Created by easterCat on 2017/10/13.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';


class RecordAudio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlay: false,
            isMuted: false,
            volume: 100,
            allTime: 0,
            currentTime: 0
        };

        this.millisecondToDate = (time) => {
            const second = Math.floor(time % 60)
            let minite = Math.floor(time / 60)
            // let hour
            // if(minite > 60) {
            //   hour = minite / 60
            //   minite = minite % 60
            //   return `${Math.floor(hour)}:${Math.floor(minite)}:${Math.floor(second)}`
            // }
            return `${minite}:${second >= 10 ? second : `0${second}`}`
        };
        this.controlAudio = (type, value) => {
            const audio = ReactDOM.findDOMNode(this.refs['audio']);
            console.log(audio);
            switch (type) {
                case 'allTime':
                    this.setState({
                        allTime: audio.duration
                    });
                    break;
                case 'play':
                    audio.play();
                    this.setState({
                        isPlay: true
                    });
                    break;
                case 'pause':
                    audio.pause();
                    this.setState({
                        isPlay: false
                    });
                    break
                case 'muted':
                    this.setState({
                        isMuted: !audio.muted
                    });
                    audio.muted = !audio.muted;
                    break;
                case 'changeCurrentTime':
                    this.setState({
                        currentTime: value
                    });
                    audio.currentTime = value;
                    if (value === audio.duration) {
                        this.setState({
                            isPlay: false
                        })
                    }
                    break;
                case 'getCurrentTime':
                    this.setState({
                        currentTime: audio.currentTime
                    });
                    if (audio.currentTime === audio.duration) {
                        this.setState({
                            isPlay: false
                        })
                    }
                    break;
                case 'changeVolume':
                    audio.volume = value / 100;
                    this.setState({
                        volume: value,
                        isMuted: !value
                    });
                    break
            }
        }
    }


    componentDidMount() {

    }

    render() {
        const {id, src} = this.props;

        return (
            <div className="audioBox">
                <audio ref="audio"
                       src={src}
                       preload={true}
                       onCanPlay={() => this.controlAudio('allTime')}
                       onTimeUpdate={(e) => this.controlAudio('getCurrentTime')}
                >
                    您的浏览器不支持 audio 标签。
                </audio>
                <i className={this.state.isPlay ? 'pause' : 'play'}
                   onClick={() => this.controlAudio(this.state.isPlay ? 'pause' : 'play')}
                ></i>
                <span className="current">
                    {
                        this.millisecondToDate(this.state.currentTime) + '/' + this.millisecondToDate(this.state.allTime)
                    }
                </span>
                <input type="range"
                       className="time"
                       step="0.01"
                       max={this.state.allTime}
                       value={this.state.currentTime}
                       onChange={(value) => this.controlAudio('changeCurrentTime', value)}
                       style={{
                           width: 50,
                           height: 50
                       }}
                />
                <i className={this.state.isMuted ? 'mute' : 'nomute'}
                   onClick={() => this.controlAudio('muted')}
                   style={{
                       display: 'block',
                       width: 50,
                       height: 50,
                       background: 'red'
                   }}>播放</i>
                <input type="range"
                       className="volume"
                       onChange={(value) => this.controlAudio('changeVolume', value)}
                       value={this.state.isMuted ? 0 : this.state.volume}
                       style={{
                           width: 50,
                           height: 50
                       }}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapActionCreators = {};

export default connect(mapStateToProps, mapActionCreators)(RecordAudio);
