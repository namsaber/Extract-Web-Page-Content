import React from 'react'

interface ButtonProps {
    onClick: () => void;
    disabled?: boolean;
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled = false, children, className = "" }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
        px-6 py-3 bg-blue-600 text-white font-medium rounded-lg
        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-200 transform hover:scale-105
        ${className}
      `}
        >
            {children}
        </button>
    )
}

export default Button
