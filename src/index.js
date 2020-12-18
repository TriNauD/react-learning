import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function tick() {
    const element = (
        <div>
            <h2>It is {new Date().toLocaleString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);