import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  backgroundColor?: string;
  
}

const ButtonIA: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button type="button" onClick={onClick} 
  style= {{backgroundColor : 'blue'}} >
    {label}
  </button>
);

export default ButtonIA;