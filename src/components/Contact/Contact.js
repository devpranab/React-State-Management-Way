import React from 'react';

const Contact = props => {
    const count = props.count;
    return (
        <div>
            <h1>Contact Page: {count}</h1>
        </div>
    );
};

export default Contact;