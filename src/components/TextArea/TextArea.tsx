import { useState, useRef, ChangeEvent, FocusEvent } from 'react';
import { Icon } from '../Icon';
import './TextArea.css';

export type ValidationState = 'none' | 'invalid' | 'valid';

export interface TextAreaProps {
  label?: string;
  helperText?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onFocus?: (e: FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  readonly?: boolean;
  showCharCount?: boolean;
  maxLength?: number;
  validation?: ValidationState;
  validationMessage?: string;
  rows?: number;
  className?: string;
}

export function TextArea({
  label,
  helperText,
  placeholder = 'Input text',
  value = '',
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  readonly = false,
  showCharCount = false,
  maxLength,
  validation = 'none',
  validationMessage,
  rows = 3,
  className = ''
}: TextAreaProps) {
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange && !readonly) {
      onChange(e.target.value);
    }
  };

  const handleFocus = (e: FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const containerClasses = `textarea-container ${className}`.trim();
  const fieldClasses = `textarea-field ${isFocused ? 'focused' : ''} ${disabled ? 'disabled' : ''} ${readonly ? 'readonly' : ''} ${validation !== 'none' ? `validation-${validation}` : ''}`.trim();

  return (
    <div className={containerClasses}>
      {label && (
        <div className="textarea-label-section">
          <div className="textarea-label">{label}</div>
          {helperText && <div className="textarea-helper-text">{helperText}</div>}
        </div>
      )}
      
      <div className={fieldClasses}>
        <textarea
          ref={textareaRef}
          className="textarea-input"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          readOnly={readonly}
          maxLength={maxLength}
          rows={rows}
        />
        <div className="textarea-drag-handles">
          <div className="drag-handle long"></div>
          <div className="drag-handle short"></div>
        </div>
      </div>

      <div className="textarea-footer">
        {validation !== 'none' && validationMessage && (
          <div className={`textarea-validation validation-${validation}`}>
            <div className="validation-icon">
              {validation === 'invalid' && <Icon name="alert-circle" size="xs" color="#d5351f" />}
              {validation === 'valid' && <Icon name="check-circle" size="xs" color="#009595" />}
            </div>
            <div className="validation-message">{validationMessage}</div>
          </div>
        )}
        
        {showCharCount && maxLength && (
          <div className="textarea-char-count">
            {value.length}/{maxLength}
          </div>
        )}
      </div>
    </div>
  );
}
