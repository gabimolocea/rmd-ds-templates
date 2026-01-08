import React from 'react';
import './Radio.css';

export type RadioColor = 'default' | 'danger' | 'green';

export interface RadioProps {
  label: string;
  description?: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  color?: RadioColor;
  onChange?: (value: string) => void;
  name?: string;
  className?: string;
}

export const Radio: React.FC<RadioProps> = ({
  label,
  description,
  value,
  checked = false,
  disabled = false,
  color = 'default',
  onChange,
  name,
  className = '',
}) => {
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!disabled && (e.key === ' ' || e.key === 'Enter')) {
      e.preventDefault();
      if (onChange) {
        onChange(value);
      }
    }
  };

  return (
    <div
      className={`rmd-radio ${className}`}
      role="radio"
      aria-checked={checked}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      data-color={color}
      data-disabled={disabled}
      data-checked={checked}
    >
      <div className="rmd-radio__button">
        <div className="rmd-radio__outer-circle" />
        {checked && <div className="rmd-radio__inner-circle" />}
      </div>
      <div className="rmd-radio__content">
        <div className="rmd-radio__label">{label}</div>
        {description && <div className="rmd-radio__description">{description}</div>}
      </div>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => {}}
        className="rmd-radio__hidden-input"
        tabIndex={-1}
      />
    </div>
  );
};

export interface RadioGroupProps {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  value,
  onChange,
  children,
  className = '',
}) => {
  const handleChange = (newValue: string) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={`rmd-radio-group ${className}`} role="radiogroup">
      {React.Children.map(children, (child) => {
        if (React.isValidElement<RadioProps>(child) && child.type === Radio) {
          return React.cloneElement(child, {
            name,
            checked: child.props.value === value,
            onChange: handleChange,
          });
        }
        return child;
      })}
    </div>
  );
};
