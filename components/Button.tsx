// components/Button.tsx
import React from 'react'

interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <button
            className="bg-netflix-red text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
    onClick={onClick}
        >
        {children}
        </button>
)
}

export default Button