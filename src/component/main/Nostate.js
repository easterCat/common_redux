/**
 * Created by easterCat on 2017/7/11.
 */


import React from "react";

//创建方式一
// function NoState (props) {
//     return (
//         <div>this is NoState Component</div>
//     )
// }

//创建方式二
const NoState = (props) => {
    const {name} = props;

    // function clickHander() {
    //     console.log(props.name);
    //     console.log(name);
    // }

    const clickHander = () => {
        console.log(props.name);
        console.log(name);
    }

    return (
        <div onClick={clickHander}>this is {name}'s Nostate Component</div>
    )
}

export default NoState