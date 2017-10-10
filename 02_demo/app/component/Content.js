/**
 * Created by easterCat on 2017/10/10.
 */
import React from 'react';

class Content extends React.Component {
    render() {
        let arr = [];
        for (let i = 0; i < 20; i++) {
            arr[i] = i;
        }
        return (
            <div className="content">
                <table>
                    <thead>
                    <tr className="head">
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>电话</th>
                        <th>邮箱</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        arr.map((item, index) => {
                            return <tr key={index} className="body">
                                <td>豆豆</td>
                                <td>32</td>
                                <td>123456789</td>
                                <td>123456789@163.com</td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Content;