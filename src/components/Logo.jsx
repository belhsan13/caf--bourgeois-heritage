import React from 'react';

export default function Logo({ className }) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 120" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main Badge Shape */}
        <rect x="15" y="10" width="70" height="100" rx="35" stroke="#2A1407" strokeWidth="1.5" />
        
        {/* Coffee Cup Symbol */}
        <g transform="translate(30, 20) scale(0.4)" fill="#2A1407">
          <path d="M80 30c-5.5 0-10 4.5-10 10v20c0 5.5 4.5 10 10 10h10c5.5 0 10-4.5 10-10V40c0-5.5-4.5-10-10-10H80zm0 30V40h10v20H80z" />
          <path d="M10 20v60c0 11 9 20 20 20h40c11 0 20-9 20-20V20H10zm70 60c0 5.5-4.5 10-10 10H30c-5.5 0-10-4.5-10-10V30h60v50z" />
          <path d="M35 5c0-2.8 2.2-5 5-5s5 2.2 5 5v10h-10V5zM55 5c0-2.8 2.2-5 5-5s5 2.2 5 5v10h-10V5z" />
        </g>

        {/* Text Labels */}
        <text 
          x="50" 
          y="75" 
          textAnchor="middle" 
          fill="#2A1407" 
          style={{ fontFamily: 'serif', fontWeight: '900', fontSize: '18px' }}
        >
          Café
        </text>
        <text 
          x="50" 
          y="95" 
          textAnchor="middle" 
          fill="#2A1407" 
          style={{ fontFamily: 'serif', fontWeight: '900', fontSize: '20px' }}
        >
          Bourgeois
        </text>
        
        {/* Three beans at bottom */}
        <circle cx="42" cy="104" r="2" fill="#E59500" />
        <circle cx="50" cy="104" r="2" fill="#E59500" />
        <circle cx="58" cy="104" r="2" fill="#E59500" />
      </svg>
    </div>
  );
}