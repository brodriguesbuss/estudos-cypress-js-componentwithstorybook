import React from 'react';
import ButtonIA from '../buttonIA/ButtonIA';
import './headerIA.css';


interface HeaderProps {
  title: string;
  onButtonClick: () => void;
  buttonLabel: string;
}

const HeaderIA: React.FC<HeaderProps> = ({ title, onButtonClick, buttonLabel }) => (
  <header>
    <h1>{title}</h1>
    <ButtonIA label={buttonLabel} onClick={onButtonClick} />
  </header>
);

export default HeaderIA;


