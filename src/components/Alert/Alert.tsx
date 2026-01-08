import React from 'react';
import { Button } from '../Button';
import { Icon, IconName } from '../Icon';
import './Alert.css';

export type AlertVariant = 'neutral' | 'information' | 'warning' | 'success' | 'error';
export type AlertStyle = 'outline' | 'filled';

export interface AlertProps {
  variant?: AlertVariant;
  alertStyle?: AlertStyle;
  title?: string;
  description?: string;
  hasIcon?: boolean;
  hasAction?: boolean;
  actionLabel?: string;
  isDismissible?: boolean;
  onAction?: () => void;
  onDismiss?: () => void;
}

const getAlertIcon = (variant: AlertVariant): IconName => {
  switch (variant) {
    case 'information':
      return 'info-circle';
    case 'warning':
      return 'alert-triangle';
    case 'success':
      return 'check-circle';
    case 'error':
    case 'neutral':
    default:
      return 'alert-circle';
  }
};

export const Alert: React.FC<AlertProps> = ({
  variant = 'neutral',
  alertStyle = 'outline',
  title = 'Tell the user how things change moving forward',
  description = 'Compliments, extends, or elaborates on the header. This should include end punctuation.',
  hasIcon = true,
  hasAction = true,
  actionLabel = 'Button',
  isDismissible = true,
  onAction,
  onDismiss,
}) => {
  const className = `rmd-alert rmd-alert--${variant} rmd-alert--${alertStyle}`;

  return (
    <div className={className}>
      <div className="rmd-alert__content">
        {hasIcon && (
          <div className="rmd-alert__icon-container">
            <Icon name={getAlertIcon(variant)} size="xs" />
          </div>
        )}
        
        <div className="rmd-alert__text-content">
          {title && <h3 className="rmd-alert__title">{title}</h3>}
          {description && <p className="rmd-alert__description">{description}</p>}
          
          {hasAction && (
            <div className="rmd-alert__actions">
              <Button
                label={actionLabel}
                size="small"
                variant="primary"
                color={variant === 'error' ? 'error' : 'primary'}
                onClick={onAction}
              />
            </div>
          )}
        </div>
      </div>
      
      {isDismissible && (
        <div className="rmd-alert__dismiss">
          <button 
            className="rmd-alert__dismiss-button"
            onClick={onDismiss}
            aria-label="Dismiss alert"
          >
            <Icon name="x" size="md" />
          </button>
        </div>
      )}
    </div>
  );
};
