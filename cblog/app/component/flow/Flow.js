/**
 * Created by easterCat on 2017/10/31.
 */

import React from 'react';
import goo from '../../plugins/codebase/GooFlow.js';
import '../../plugins/codebase/GooFlow.css';

class Flow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let demo;
        let property = {
            width: 1200,
            height: 600,
            toolBtns: ["start round", "end", "task", "node", "chat", "state", "plug", "join", "fork", "complex mix"],
            haveHead: true,
            headBtns: ["new", "open", "save", "undo", "redo", "reload"],//如果haveHead=true，则定义HEAD区的按钮
            haveTool: true,
            haveGroup: true,
            useOperStack: true
        };
        let remark = {
            cursor: "选择指针",
            direct: "转换连线",
            start: "开始结点",
            "end round": "结束结点",
            "task round": "任务结点",
            node: "自动结点",
            chat: "决策结点",
            state: "状态结点",
            plug: "附加插件",
            fork: "分支结点",
            "join": "联合结点",
            "complex mix": "复合结点",
            group: "组织划分框编辑开关"
        };

        demo = goo.createGooFlow($("#demo"), property);
        demo.setNodeRemarks(remark);
        console.log(demo);
        alert(123)
    }

    render() {
        return (
            <div >
                <div id="demo" ref={(flow) => this.flow = flow}>
                    hello world
                </div>
            </div>
        )
    }
}

export default Flow;