import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', href, ...props }) => {
  const baseStyles = "px-8 py-3 rounded-full font-bold text-base tracking-wide shadow-lg transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-dark";
  
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary-hover focus:ring-primary",
    secondary: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = href!.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (href) {
    const isAnchorLink = href.startsWith('#');
    return (
      <a 
        href={href} 
        className={combinedClassName} 
        onClick={isAnchorLink ? handleScroll : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;