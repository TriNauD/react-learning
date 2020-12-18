import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let num = 0;

function numIncrease() {
    const element = (
        <div>
            <h2>The num is {num++}</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(numIncrease, 1000);