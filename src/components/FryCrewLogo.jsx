import React from 'react';

export default function FryCrewLogo({ 
  className = "w-28 h-28", 
  alt = "FryCrew Long Fries Masterlogo - Extrem lang. Extrem lecker.",
  priority = false 
}) {
  return (
    <div className={`relative inline-flex items-center justify-center rounded-full overflow-hidden shrink-0 select-none bg-[#F5F2E9] transition-transform duration-300 hover:scale-105 ${className}`}>
      <img
        src="/images/frycrew-masterlogo.jpg"
        alt={alt}
        className="w-full h-full object-cover transform scale-[1.03]"
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
}
