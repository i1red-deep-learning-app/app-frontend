import React from 'react';
import './App.css';
import CreateFeedForwardNetwork from './components/CreateFeedForwardNetwork';
import LoginPanel from './components/LoginPanel';
import { useAuth0 } from '@auth0/auth0-react';
import AppBar from './components/AppBar';
import Loading from './components/Loading';
import MainMenu from './components/MainMenu';
import { Routes, Route, Navigate } from 'react-router-dom';


function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  const appRoutes = () => {
    if (isLoading) {
      return <Routes></Routes>;
    }

    if (!isAuthenticated) {
      return (
        <Routes>
          <Route path='/login' element={<LoginPanel />} />
          <Route path='*' element={<Navigate to={'/login'} />} />
        </Routes>
      );
    }

    return (
      <Routes>
        <Route path="/feed-forward-network/create" element={<CreateFeedForwardNetwork />} />
        <Route path="/" element={<MainMenu />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    );
  }

  return (
    <div className='app'>
      {isAuthenticated && <AppBar />}
      <div className='app-content'>
        {isLoading && <Loading />}
        {appRoutes()}
      </div>
    </div>
  );
}

export default App;
