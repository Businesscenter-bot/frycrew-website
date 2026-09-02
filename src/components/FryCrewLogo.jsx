import React from 'react';

export default function FryCrewLogo({ className = "w-28 h-28", showClaim = true, lightBg = false }) {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md transition-transform duration-300 hover:scale-[1.02]"
      >
        <defs>
          {/* Path for curved claim text */}
          <path id="claimPath" d="M 68 220 A 105 105 0 0 0 252 220" />
          <linearGradient id="fryGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FED867" />
            <stop offset="100%" stopColor="#FEC72E" />
          </linearGradient>
          <linearGradient id="truckBody" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2D3A28" />
            <stop offset="100%" stopColor="#1C2419" />
          </linearGradient>
        </defs>

        {/* Fries Fan radiating at top */}
        <g id="fries-fan">
          {/* Center fry */}
          <path d="M 152 40 L 168 40 L 165 110 L 155 110 Z" fill="#FEC72E" stroke="#A67C2D" strokeWidth="2" strokeLinejoin="round" />
          <path d="M 157 40 L 160 40 L 159 108 L 156 108 Z" fill="#FED867" />
          {/* Left 1 */}
          <path d="M 134 46 L 148 43 L 151 110 L 138 110 Z" fill="#FEC72E" stroke="#A67C2D" strokeWidth="2" strokeLinejoin="round" />
          {/* Left 2 */}
          <path d="M 118 56 L 131 51 L 140 110 L 128 110 Z" fill="#FEC72E" stroke="#A67C2D" strokeWidth="2" strokeLinejoin="round" />
          {/* Left 3 (outer) */}
          <path d="M 104 74 L 116 67 L 128 112 L 118 112 Z" fill="#FEC72E" stroke="#A67C2D" strokeWidth="2" strokeLinejoin="round" />
          {/* Left 4 (extra long) */}
          <path d="M 94 96 L 105 88 L 120 115 L 110 115 Z" fill="#FEC72E" stroke="#A67C2D" strokeWidth="2" strokeLinejoin="round" />
          {/* Right 1 */}
          <path d="M 172 43 L 186 46 L 182 110 L 169 110 Z" fill="#FEC72E" stroke="#A67C2D" strokeWidth="2" strokeLinejoin="round" />
          {/* Right 2 */}
          <path d="M 189 51 L 202 56 L 192 110 L 180 110 Z" fill="#FEC72E" stroke="#A67C2D" strokeWidth="2" strokeLinejoin="round" />
          {/* Right 3 (outer) */}
          <path d="M 204 67 L 216 74 L 202 112 L 192 112 Z" fill="#FEC72E" stroke="#A67C2D" strokeWidth="2" strokeLinejoin="round" />
          {/* Right 4 (extra long) */}
          <path d="M 215 88 L 226 96 L 210 115 L 200 115 Z" fill="#FEC72E" stroke="#A67C2D" strokeWidth="2" strokeLinejoin="round" />
        </g>

        {/* Main Outer Cream Badge */}
        <circle cx="160" cy="160" r="142" fill="#F5F2E9" stroke="#222B1E" strokeWidth="7" />
        {/* Inner subtle Green Dashed ring / Accent line */}
        <circle cx="160" cy="160" r="132" fill="none" stroke="#A67C2D" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="160" cy="160" r="128" fill="none" stroke="#222B1E" strokeWidth="1" />

        {/* EST. 2026 */}
        <text x="108" y="112" fill="#222B1E" fontSize="13" fontWeight="800" fontFamily="'Montserrat', sans-serif" textAnchor="middle" letterSpacing="1.5">EST.</text>
        <circle cx="123" cy="108" r="1.5" fill="#222B1E" />
        <text x="212" y="112" fill="#222B1E" fontSize="13" fontWeight="800" fontFamily="'Montserrat', sans-serif" textAnchor="middle" letterSpacing="1.5">2026</text>

        {/* Brand Name: FRYCREW */}
        <g id="brand-text">
          <text
            x="160"
            y="152"
            fill="#222B1E"
            fontSize="44"
            fontWeight="900"
            fontFamily="'Bebas Neue', sans-serif"
            textAnchor="middle"
            letterSpacing="3"
            style={{ transformOrigin: 'center' }}
          >
            FRYCREW
          </text>
        </g>

        {/* LONG FRIES Badge / Ribbon */}
        <g id="longfries-ribbon">
          <rect x="106" y="160" width="108" height="20" rx="10" fill="#222B1E" />
          <rect x="108" y="162" width="104" height="16" rx="8" fill="none" stroke="#FEC72E" strokeWidth="0.75" />
          <text
            x="160"
            y="174.5"
            fill="#F5F2E9"
            fontSize="11.5"
            fontWeight="800"
            fontFamily="'Montserrat', sans-serif"
            textAnchor="middle"
            letterSpacing="2.5"
          >
            LONG FRIES
          </text>
        </g>

        {/* Retro Food Truck Illustration */}
        <g id="foodtruck" transform="translate(132, 190)">
          {/* Speed lines on left */}
          <line x1="-16" y1="12" x2="-4" y2="12" stroke="#A67C2D" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="-20" y1="18" x2="-6" y2="18" stroke="#A67C2D" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="-14" y1="24" x2="-2" y2="24" stroke="#A67C2D" strokeWidth="2.5" strokeLinecap="round" />

          {/* Truck Body */}
          <path d="M 6 4 L 38 4 C 44 4 48 8 50 14 L 54 26 C 55 28 54 30 52 30 L 4 30 C 2 30 0 28 0 26 L 0 10 C 0 6 3 4 6 4 Z" fill="#222B1E" />
          {/* Cream roof cap */}
          <path d="M 6 4 C 6 2 8 0 12 0 L 32 0 C 36 0 38 2 38 4 Z" fill="#FEC72E" />
          {/* Service window hatch */}
          <rect x="8" y="9" width="18" height="12" rx="2" fill="#F5F2E9" stroke="#FEC72E" strokeWidth="1" />
          <line x1="8" y1="7" x2="26" y2="5" stroke="#FEC72E" strokeWidth="1.5" />
          {/* Cab window */}
          <path d="M 32 9 L 45 9 C 47 9 48 11 49 14 L 50 20 L 32 20 Z" fill="#F5F2E9" />
          {/* Wheels */}
          <circle cx="13" cy="30" r="5.5" fill="#181E15" stroke="#FEC72E" strokeWidth="1.5" />
          <circle cx="13" cy="30" r="2" fill="#F5F2E9" />
          <circle cx="43" cy="30" r="5.5" fill="#181E15" stroke="#FEC72E" strokeWidth="1.5" />
          <circle cx="43" cy="30" r="2" fill="#F5F2E9" />
          {/* Headlight */}
          <circle cx="53" cy="24" r="2" fill="#FEC72E" />
        </g>

        {/* Curved Claim: EXTREM LANG. EXTREM LECKER. */}
        {showClaim && (
          <g id="claim-text">
            <text fill="#A67C2D" fontSize="11" fontWeight="800" fontFamily="'Montserrat', sans-serif" letterSpacing="2.2">
              <textPath href="#claimPath" startOffset="50%" textAnchor="middle">
                EXTREM LANG. EXTREM LECKER.
              </textPath>
            </text>
            {/* Center Star at bottom */}
            <polygon points="160,268 163,275 170,275 164,279 166,286 160,282 154,286 156,279 150,275 157,275" fill="#FEC72E" stroke="#A67C2D" strokeWidth="0.5" />
          </g>
        )}
      </svg>
    </div>
  );
}
