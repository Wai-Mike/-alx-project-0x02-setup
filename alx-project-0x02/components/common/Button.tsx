import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  shape = 'rounded-md',
  children,
  onClick,
  className = '',
}) => {
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${sizeClasses[size]}
        ${shape}
        bg-blue-500 hover:bg-blue-600 text-white font-semibold
        transition-colors duration-200
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;

