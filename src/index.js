import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//传入Date() 返回一个div
function Clock(props) {
    return (
        <div>
            <h1>This is a clock</h1>
            <h2>It is {props.date.toLocaleString()}</h2>
        </div>
    );
}

//被调用的时候重新render一个新组件 给Clock传参数Date()
function tick() {
    ReactDOM.render(
        <Clock date={new Date()}/>,
        document.getElementById('root')
    );
}

//每1000ms回调一下tick()
setInterval(tick, 1000);