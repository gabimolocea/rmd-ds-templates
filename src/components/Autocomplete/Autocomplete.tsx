import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '../Icon';
import './Autocomplete.css';

export interface AutocompleteOption {
  value: string;
  label: string;
}

export interface AutocompleteProps {
  label?: string;
  placeholder?: string;
  icon?: boolean;
  loading?: boolean;
  disabled?: boolean;
  options?: AutocompleteOption[];
  value?: string;
  onChange?: (value: string) => void;
  onSelect?: (option: AutocompleteOption | null) => void;
  className?: string;
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  label,
  placeholder = 'Search...',
  icon = false,
  loading = false,
  disabled = false,
  options = [],
  value = '',
  onChange,
  onSelect,
  className = '',
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter options based on input value
  const filteredOptions = inputValue.trim() === ''
    ? options
    : options.filter(option =>
        option.label.toLowerCase().includes(inputValue.toLowerCase())
      );

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setIsOpen(true);
    setHighlightedIndex(-1);
    onChange?.(newValue);
  };

  // Handle option selection
  const handleOptionSelect = (option: AutocompleteOption) => {
    setInputValue(option.label);
    setIsOpen(false);
    setHighlightedIndex(-1);
    onSelect?.(option);
    onChange?.(option.value);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen && e.key !== 'Escape') {
      setIsOpen(true);
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(prev =>
          prev < filteredOptions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev => (prev > 0 ? prev - 1 : -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
          handleOptionSelect(filteredOptions[highlightedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setHighlightedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Scroll highlighted option into view
  useEffect(() => {
    if (highlightedIndex >= 0 && dropdownRef.current) {
      const highlightedElement = dropdownRef.current.querySelector(
        `[data-index="${highlightedIndex}"]`
      );
      highlightedElement?.scrollIntoView({ block: 'nearest' });
    }
  }, [highlightedIndex]);

  // Sync external value changes
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <div className={`autocomplete-container ${className}`}>
      {label && (
        <label className="autocomplete-label">
          {label}
        </label>
      )}
      <div className={`autocomplete-input-wrapper ${isOpen ? 'autocomplete-input-wrapper--open' : ''}`}>
        <div className="autocomplete-input-container">
          {icon && (
            <div className="autocomplete-icon">
              <Icon name="search-md" size="sm" />
            </div>
          )}
          <input
            ref={inputRef}
            type="text"
            className="autocomplete-input"
            placeholder={placeholder}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsOpen(true)}
            disabled={disabled || loading}
            aria-autocomplete="list"
            aria-controls="autocomplete-listbox"
            aria-expanded={isOpen}
            aria-activedescendant={
              highlightedIndex >= 0 ? `option-${highlightedIndex}` : undefined
            }
          />
          {loading && (
            <div className="autocomplete-loading">
              <Icon name="loading-01" size="sm" className="autocomplete-spinner" />
            </div>
          )}
        </div>
        {isOpen && filteredOptions.length > 0 && (
          <div
            ref={dropdownRef}
            className="autocomplete-dropdown"
            id="autocomplete-listbox"
            role="listbox"
          >
            {filteredOptions.map((option, index) => (
              <div
                key={option.value}
                id={`option-${index}`}
                data-index={index}
                className={`autocomplete-option ${
                  highlightedIndex === index ? 'autocomplete-option--highlighted' : ''
                }`}
                role="option"
                aria-selected={highlightedIndex === index}
                onClick={() => handleOptionSelect(option)}
                onMouseEnter={() => setHighlightedIndex(index)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
