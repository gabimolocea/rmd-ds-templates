import React from 'react';
import { Icon } from '../Icon';
import './Checkbox.css';

export type CheckboxSize = 'small' | 'regular';
export type CheckboxColor = 'default' | 'green' | 'red';

export interface CheckboxProps {
  label: string;
  description?: string;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  size?: CheckboxSize;
  color?: CheckboxColor;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  description,
  checked = false,
  indeterminate = false,
  disabled = false,
  size = 'regular',
  color = 'default',
  onChange,
  className = '',
}) => {
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!disabled && (e.key === ' ' || e.key === 'Enter')) {
      e.preventDefault();
      if (onChange) {
        onChange(!checked);
      }
    }
  };

  const getIcon = () => {
    if (indeterminate) {
      return <Icon name="minus" size="xs" color="white" />;
    }
    if (checked) {
      if (color === 'red') {
        return <Icon name="x" size="xs" color="white" />;
      }
      return <Icon name="check" size="xs" color="white" />;
    }
    return null;
  };

  const isSelected = checked || indeterminate;

  return (
    <div
      className={`rmd-checkbox ${className}`}
      role="checkbox"
      aria-checked={indeterminate ? 'mixed' : checked}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      data-size={size}
      data-color={color}
      data-disabled={disabled}
      data-selected={isSelected}
    >
      <div className="rmd-checkbox__box-wrapper">
        <div className={`rmd-checkbox__box ${isSelected ? 'selected' : ''}`}>
          {getIcon()}
        </div>
      </div>
      <div className="rmd-checkbox__content">
        <div className="rmd-checkbox__label">{label}</div>
        {description && <div className="rmd-checkbox__description">{description}</div>}
      </div>
    </div>
  );
};
