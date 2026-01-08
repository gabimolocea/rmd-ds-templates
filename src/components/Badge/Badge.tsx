import React from 'react';
import './Badge.css';

export type BadgeVariant = 'neutral' | 'warning' | 'error' | 'success' | 'information';
export type BadgeStyle = 'outline' | 'filled';

export interface BadgeProps {
  /**
   * Badge text label
   */
  label: string;
  
  /**
   * Variant/color scheme
   * @default 'neutral'
   */
  variant?: BadgeVariant;
  
  /**
   * Style type
   * @default 'outline'
   */
  badgeStyle?: BadgeStyle;
  
  /**
   * Show icon
   * @default true
   */
  showIcon?: boolean;
  
  /**
   * Custom icon (defaults to info circle)
   */
  icon?: React.ReactNode;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M8 14.4C11.5346 14.4 14.4 11.5346 14.4 8C14.4 4.46538 11.5346 1.6 8 1.6C4.46538 1.6 1.6 4.46538 1.6 8C1.6 11.5346 4.46538 14.4 8 14.4ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 6.4C8.44183 6.4 8.8 6.75817 8.8 7.2V11.2C8.8 11.6418 8.44183 12 8 12C7.55817 12 7.2 11.6418 7.2 11.2V7.2C7.2 6.75817 7.55817 6.4 8 6.4ZM8 5.6C8.44183 5.6 8.8 5.24183 8.8 4.8C8.8 4.35817 8.44183 4 8 4C7.55817 4 7.2 4.35817 7.2 4.8C7.2 5.24183 7.55817 5.6 8 5.6Z" 
      fill="currentColor"
    />
  </svg>
);

/**
 * Badge component from ReachMD Design System v1.0
 * 
 * Supports:
 * - 5 variants: neutral, warning, error, success, information
 * - 2 styles: outline, filled
 * - Optional icon display
 */
export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'neutral',
  badgeStyle = 'outline',
  showIcon = true,
  icon,
  className = '',
}) => {
  const badgeClasses = [
    'rmd-badge',
    `rmd-badge--${variant}`,
    `rmd-badge--${badgeStyle}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={badgeClasses}>
      <div className="rmd-badge__content">
        {showIcon && (
          <span className="rmd-badge__icon">
            {icon || <InfoIcon />}
          </span>
        )}
        <span className="rmd-badge__label">{label}</span>
      </div>
    </div>
  );
};

export default Badge;
