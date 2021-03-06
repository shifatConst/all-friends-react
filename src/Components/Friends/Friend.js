import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} = props.friend;
    const history = useHistory();
    const handleButton = (friendId) => {
        history.push(`/friend/${friendId}`)
    }

    // console.log(props.friend);
    const friendStyle = {
        border: '1px solid green',
        margin: '20px',
        padding: '20px',
        borderRadius: '10px'
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p><Link to={`/friend/${id}`}>Show details of id: {id}</Link></p>
            <button onClick={() => handleButton(id)}>Show more</button>
        </div>
    );
};

export default Friend;