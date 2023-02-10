import React from 'react';
import ButtonSquare from '../buttonSquare/ButtonSquare';
import './welcome.css'

interface WelcomeProps {
  username: string;
  onLogout: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({username, onLogout}) => {
  return (
    <div className="max-w-screen-sm p-12 mx-auto bg-gray-50 rounded-md shadow-lg">
      <h1 className="text-2xl">Welcome {username}!</h1>
      <ButtonSquare backgroundColor='pink' className='mt-2' onClick={onLogout}>Log Out</ButtonSquare>
    </div>
  );
};

export default Welcome;