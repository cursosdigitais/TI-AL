import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface ButtonProps {
  href: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ href, text }) => {
  return (
    <div className="flex justify-center w-full my-6">
      <a 
        href={href}
        className="btn-v2 flex flex-col items-center justify-center w-full md:w-auto bg-cta-blue hover:bg-transparent hover:text-cta-blue-hover border border-cta-blue text-white font-opensans text-xl font-medium py-4 px-8 rounded transition-all duration-200 shadow-md group"
      >
        <div className="flex items-center justify-center gap-2">
          <ShoppingCart className="w-6 h-6 fill-current group-hover:text-cta-blue-hover" />
          <span className="font-bold">{text}</span>
        </div>
      </a>
    </div>
  );
};

export default Button;