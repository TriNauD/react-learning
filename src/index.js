import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Welcome(props) {
    return (
        <div>
            <h1>Hello, {props.name}!</h1>
            <h2>Your id is {props.ID}</h2>
            <h2>Your age is {props.age}</h2>
        </div>
    );
}

// const user = {
//     ID: '0001',
//     studentAge: '17',
//     studentName: {
//         firstName: 'Imai',
//         lastName: 'Lisa',
//     },
// }

let element = <Welcome ID='114514' name='Lisa' age='17'/>

ReactDOM.render(
    element,
    document.getElementById('root')
);