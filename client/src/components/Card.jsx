import React from 'react'

const Card = ({ text, className }) => {
  return (
    <div className={`${className} relative inline-flex items-center justify-center overflow-hidden rounded-br-lg w-25 h-10 group`}>
      <span className="absolute inset-0 bg-[var(--color-cream-light)] group-hover:bg-[var(--color-black-100)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0" />
      <h1 className="relative z-10 text-[var(--color-black-100)] group-hover:text-[var(--color-cream-light)] transition-colors duration-300">{text}</h1>
    </div>
  );
};


export default Card;