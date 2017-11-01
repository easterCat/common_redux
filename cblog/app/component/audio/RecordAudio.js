/**
 * Created by easterCat on 2017/10/13.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Icon} from 'antd';


class RecordAudio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlay: false,
            openMuted: false,
            volume: 100,
            allTime: 0,
            currentTime: 0
        };

        this.millisecondToDate = (time) => {
            const second = Math.floor(time % 60);
            let minite = Math.floor(time / 60);
            return `${minite}:${second >= 10 ? second : `0${second}`}`
        };

        this.controlAudio = (type, e) => {
            const audio = ReactDOM.findDOMNode(this.refs['audio']);
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
                    break;
                case 'changeCurrentTime':
                    this.setState({
                        currentTime: e.target.value
                    });
                    audio.currentTime = e.target.value;
                    if (e.target.value === audio.duration) {
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
                //    是否静音
                case 'muted':
                    audio.muted = !audio.muted;
                    //为true，则是静音模式
                    if (audio.muted) {
                        this.setState({
                            openMuted: true,
                            volume: 0
                        });
                    } else {
                        this.setState({
                            openMuted: false,
                            volume: 100
                        });
                    }
                    break;
                //    调节音量
                case 'changeVolume':
                    /**
                     * muted=true开启静音模式,muted=false开启声音
                     * @type {number}
                     */
                    audio.volume = e.target.value / 100;
                    this.setState({
                        volume: e.target.value,
                    });
                    //如果声音为0，开起静音
                    if (e.target.value <= 0) {
                        audio.muted = true;
                        this.setState({
                            openMuted: true
                        })
                    } else if (e.target.value >= 0) {
                        audio.muted = false;
                        this.setState({
                            openMuted: false
                        })
                    }
                    break
            }
        }
    }

    componentDidMount() {

    }

    render() {
        const {src} = this.props;

        return (
            <div className="audioBox">
                <audio ref="audio"
                       src={src}
                       preload={true}
                       onCanPlay={() => this.controlAudio('allTime')}
                       onTimeUpdate={(e) => this.controlAudio('getCurrentTime')}
                >
                    音乐播放器
                </audio>
                <i className={this.state.isPlay ? 'pause' : 'play'}
                   onClick={() => this.controlAudio(this.state.isPlay ? 'pause' : 'play')}
                >
                    {
                        this.state.isPlay ? <Icon className="pause-btn" type="pause"/> :
                            <Icon className="play-btn" type="caret-right"/>
                    }
                </i>

                <span className="current">
                    {
                        this.millisecondToDate(this.state.currentTime) + '/' + this.millisecondToDate(this.state.allTime)
                    }
                </span>

                <input type="range"
                       className="time"
                       min="0"
                       step="0.01"
                       max={this.state.allTime}
                       value={this.state.currentTime}
                       onChange={(e) => this.controlAudio('changeCurrentTime', e)}
                />

                <i className={this.state.openMuted ? 'mute' : 'nomute'}
                   onClick={() => this.controlAudio('muted')}
                >
                    {
                        this.state.openMuted ? <Icon className="nomute-btn" type="check"/> :
                            <Icon className="mute-btn" type="close"/>
                    }
                </i>
                <input type="range"
                       className="volume"
                       min="0"
                       step="1"
                       max="100"
                       onChange={(e) => this.controlAudio('changeVolume', e)}
                       value={this.state.openMuted ? 0 : this.state.volume}
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
