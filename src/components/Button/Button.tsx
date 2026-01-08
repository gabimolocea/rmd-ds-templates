import React from 'react';
import './Button.css';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonColor = 'primary' | 'neutral' | 'guava' | 'error';
export type ButtonState = 'rest' | 'hover' | 'pressed' | 'focus' | 'disabled' | 'loading';

export interface ButtonProps {
  /**
   * Button text label
   */
  label: string;
  
  /**
   * Size of the button
   * @default 'medium'
   */
  size?: ButtonSize;
  
  /**
   * Visual style variant
   * @default 'primary'
   */
  variant?: ButtonVariant;
  
  /**
   * Color scheme
   * @default 'primary'
   */
  color?: ButtonColor;
  
  /**
   * Disabled state
   */
  disabled?: boolean;
  
  /**
   * Loading state
   */
  loading?: boolean;
  
  /**
   * Icon before the label
   */
  iconBefore?: React.ReactNode;
  
  /**
   * Icon after the label
   */
  iconAfter?: React.ReactNode;
  
  /**
   * Click handler
   */
  onClick?: () => void;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * HTML button type
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Button component from ReachMD Design System v1.0
 * 
 * Supports:
 * - 3 sizes: small, medium, large
 * - 3 variants: primary, secondary, tertiary
 * - 4 colors: primary, neutral, guava, error
 * - States: rest, hover, pressed, focus, disabled, loading
 */
export const Button: React.FC<ButtonProps> = ({
  label,
  size = 'medium',
  variant = 'primary',
  color = 'primary',
  disabled = false,
  loading = false,
  iconBefore,
  iconAfter,
  onClick,
  className = '',
  type = 'button',
}) => {
  const buttonClasses = [
    'rmd-button',
    `rmd-button--${size}`,
    `rmd-button--${variant}`,
    `rmd-button--${color}`,
    disabled && 'rmd-button--disabled',
    loading && 'rmd-button--loading',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading}
    >
      {loading ? (
        <span className="rmd-button__spinner" aria-label="Loading" />
      ) : (
        <>
          {iconBefore && <span className="rmd-button__icon-before">{iconBefore}</span>}
          <span className="rmd-button__label">{label}</span>
          {iconAfter && <span className="rmd-button__icon-after">{iconAfter}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
