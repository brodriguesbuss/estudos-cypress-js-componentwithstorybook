import React from 'react';
import './buttonSquare.css'

interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
      backgroundColor?: string;
    }

const ButtonSquare: React.FC<ButtonProps> = (props) => {
  const { backgroundColor, className, children, ...rest } = props;
  return (
    <button
      className={`
              py-2
              px-6
              rounded-sm
              self-start      
              duration-20
              bg-cy-${backgroundColor}
              border-solid border-2 border-transparent
              hover:border-gray-700 hover:bg-cy-blue
              disabled:opacity-50   
              disabled:cursor-not-allowed
              ${className}
            `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonSquare;
