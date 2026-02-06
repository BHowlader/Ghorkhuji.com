import React from 'react';

const LogoIcon = ({ className, style }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={className}
            style={style}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {/* House Icon */}
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />

            {/* Search Icon Overlay - positioned at bottom right */}
            <circle cx="18" cy="18" r="4" fill="white" stroke="currentColor" strokeWidth="2" />
            <circle cx="18" cy="18" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M20.8 20.8L23 23" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
};

export default LogoIcon;
