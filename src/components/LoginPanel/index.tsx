import React from 'react';
import './index.css';
import LoginButton from '../LoginButton';

function LoginPanel() {
  return (
    <div className='login-panel'>
      <h1 className='app-title'>Deep<br/>Learning<br/>App</h1>
      <LoginButton />
    </div>
  );
}

export default LoginPanel;
