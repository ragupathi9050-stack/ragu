import React from 'react';

// FIX: Refactored the Button to be a polymorphic component.
// This allows it to accept an 'as' prop to render as a different element
// (e.g., a react-router-dom Link) while preserving its styles. This change
// resolves all TypeScript errors related to the 'as' prop.
type ButtonOwnProps<E extends React.ElementType> = {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  as?: E;
  className?: string;
};

type ButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ButtonOwnProps>;

const defaultElement = 'button';

const Button = <E extends React.ElementType = typeof defaultElement>({
  variant = 'primary',
  size = 'md',
  children,
  className,
  as,
  ...props
}: ButtonProps<E>) => {
  const Component = as || defaultElement;

  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-brand-primary text-white hover:bg-brand-secondary focus:ring-brand-primary',
    secondary: 'bg-brand-accent text-white hover:bg-brand-light focus:ring-brand-accent',
    outline: 'bg-transparent border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white focus:ring-brand-primary',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <Component
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
