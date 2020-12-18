import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function formatName(user) {
    return (
        user.props.firstName + ' ' + user.props.lastName
    );
}

function greetingUser(user) {
    if (user.props.firstName != null && user.props.lastName != null) {
        return <h1>Hello, {formatName(user)}!</h1>;
    } else {
        return <h1>Hello, stranger!</h1>;
    }
}

const user = {
    id: 'student1',
    props: {
        firstName: 'Imai',
        lastName: 'Lisa',
    }
}

const element = (
    greetingUser(user)
);

ReactDOM.render(
    element,
    document.getElementById("root")
);