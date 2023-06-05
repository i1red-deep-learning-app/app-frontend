import React from 'react';
import './index.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
 

function AppBar() {
    const { user } = useAuth0();

    return (
        <div className='app-bar'>
            <div className='horizontal-block'>
                <Link to="/" className='app-small-title'>Deep<br/>Learning<br/>App</Link>
            </div>
            <p>{user?.name}</p>
        </div>
    )
};

export default AppBar;