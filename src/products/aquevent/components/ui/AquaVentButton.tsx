import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

interface AquaVentButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'premium' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
};

const variantClasses = {
  primary: 'bg-aquevent-primary hover:bg-aquevent-primary/90 text-white shadow-lg hover:shadow-xl',
  secondary: 'border-2 border-aquevent-secondary text-aquevent-secondary hover:bg-aquevent-secondary/10',
  premium: 'bg-gradient-to-r from-aquevent-primary to-aquevent-secondary text-white shadow-lg hover:shadow-xl hover:opacity-90',
  ghost: 'text-aquevent-primary hover:bg-aquevent-primary/10',
};

const AquaVentButton = forwardRef<HTMLButtonElement, AquaVentButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aquevent-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
AquaVentButton.displayName = 'AquaVentButton';

export default AquaVentButton;
