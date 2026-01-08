import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '../Icon';
import './DatePicker.css';

export interface DatePickerProps {
  label?: string;
  value?: Date | null;
  onChange?: (date: Date | null) => void;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  placeholder?: string;
  mode?: 'single' | 'range';
  rangeStart?: Date | null;
  rangeEnd?: Date | null;
  onRangeChange?: (start: Date | null, end: Date | null) => void;
  className?: string;
}

const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  value,
  onChange,
  // minDate,
  // maxDate,
  disabled = false,
  placeholder = 'mm/dd/yyyy',
  mode = 'single',
  rangeStart,
  rangeEnd,
  onRangeChange,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(value ? value.getMonth() : new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(value ? value.getFullYear() : new Date().getFullYear());
  const [inputValue, setInputValue] = useState('');
  const [tempRangeStart, setTempRangeStart] = useState<Date | null>(rangeStart || null);
  const [tempRangeEnd, setTempRangeEnd] = useState<Date | null>(rangeEnd || null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Format date for display
  const formatDate = (date: Date | null) => {
    if (!date) return '';
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  // Update input value when value changes
  useEffect(() => {
    if (mode === 'single') {
      setInputValue(formatDate(value || null));
    } else {
      if (rangeStart && rangeEnd) {
        setInputValue(`${formatDate(rangeStart)} - ${formatDate(rangeEnd)}`);
      } else if (rangeStart) {
        setInputValue(formatDate(rangeStart));
      } else {
        setInputValue('');
      }
    }
  }, [value, rangeStart, rangeEnd, mode]);

  // Get days in month
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get first day of month
  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days: (number | null)[] = [];

    // Previous month days
    const prevMonthDays = getDaysInMonth(currentMonth - 1, currentYear);
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push(-(prevMonthDays - i));
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    // Next month days
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push(-(i + 100));
    }

    return days;
  };

  // Check if date is today
  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  // Check if date is selected
  const isSelected = (day: number) => {
    if (!value || day < 0) return false;
    const selectedDate = value;
    return (
      day === selectedDate.getDate() &&
      currentMonth === selectedDate.getMonth() &&
      currentYear === selectedDate.getFullYear()
    );
  };

  // Check if date is in range
  const isInRange = (day: number) => {
    if (mode !== 'range' || !tempRangeStart || !tempRangeEnd || day < 0) return false;
    const date = new Date(currentYear, currentMonth, day);
    return date > tempRangeStart && date < tempRangeEnd;
  };

  // Check if date is range start
  const isRangeStart = (day: number) => {
    if (mode !== 'range' || !tempRangeStart || day < 0) return false;
    return (
      day === tempRangeStart.getDate() &&
      currentMonth === tempRangeStart.getMonth() &&
      currentYear === tempRangeStart.getFullYear()
    );
  };

  // Check if date is range end
  const isRangeEnd = (day: number) => {
    if (mode !== 'range' || !tempRangeEnd || day < 0) return false;
    return (
      day === tempRangeEnd.getDate() &&
      currentMonth === tempRangeEnd.getMonth() &&
      currentYear === tempRangeEnd.getFullYear()
    );
  };

  // Handle date selection
  const handleDateClick = (day: number) => {
    if (day < 0) return; // Skip days from other months
    
    const selectedDate = new Date(currentYear, currentMonth, day);
    
    if (mode === 'single') {
      onChange?.(selectedDate);
      setIsOpen(false);
    } else {
      // Range mode
      if (!tempRangeStart || (tempRangeStart && tempRangeEnd)) {
        // Start new range
        setTempRangeStart(selectedDate);
        setTempRangeEnd(null);
      } else {
        // Complete range
        if (selectedDate < tempRangeStart) {
          setTempRangeEnd(tempRangeStart);
          setTempRangeStart(selectedDate);
        } else {
          setTempRangeEnd(selectedDate);
        }
      }
    }
  };

  // Handle apply button (for range mode)
  const handleApply = () => {
    if (mode === 'range' && tempRangeStart && tempRangeEnd) {
      onRangeChange?.(tempRangeStart, tempRangeEnd);
      setIsOpen(false);
    }
  };

  // Handle cancel button (for range mode)
  const handleCancel = () => {
    setTempRangeStart(rangeStart || null);
    setTempRangeEnd(rangeEnd || null);
    setIsOpen(false);
  };

  // Navigate months
  const previousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const previousYear = () => {
    setCurrentYear(currentYear - 1);
  };

  const nextYear = () => {
    setCurrentYear(currentYear + 1);
  };

  // Jump to today
  const jumpToToday = () => {
    const today = new Date();
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
    if (mode === 'single') {
      onChange?.(today);
      setIsOpen(false);
    }
  };

  // Jump to selected date
  const jumpToSelected = () => {
    if (mode === 'single' && value) {
      setCurrentMonth(value.getMonth());
      setCurrentYear(value.getFullYear());
    } else if (mode === 'range' && tempRangeEnd) {
      setCurrentMonth(tempRangeEnd.getMonth());
      setCurrentYear(tempRangeEnd.getFullYear());
    }
  };

  // Clear selection
  const handleClear = () => {
    if (mode === 'single') {
      onChange?.(null);
      setInputValue('');
    } else {
      setTempRangeStart(null);
      setTempRangeEnd(null);
      onRangeChange?.(null, null);
      setInputValue('');
    }
  };

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        if (mode === 'range') {
          // Reset temp values if not applied
          setTempRangeStart(rangeStart || null);
          setTempRangeEnd(rangeEnd || null);
        }
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, mode, rangeStart, rangeEnd]);

  const calendarDays = generateCalendarDays();
  const today = new Date();

  return (
    <div ref={containerRef} className={`datepicker-container ${className}`}>
      {label && <label className="datepicker-label">{label}</label>}
      
      <div className="datepicker-input-wrapper">
        <div className="datepicker-icon">
          <Icon name="calendar" size="sm" />
        </div>
        
        <input
          ref={inputRef}
          type="text"
          className="datepicker-input"
          placeholder={placeholder}
          value={inputValue}
          onClick={() => !disabled && setIsOpen(true)}
          readOnly
          disabled={disabled}
        />
        
        {isOpen && inputValue && (
          <button
            className="datepicker-clear"
            onClick={handleClear}
            type="button"
          >
            <Icon name="x-close" size="xs" />
          </button>
        )}
      </div>

      {isOpen && (
        <div className="datepicker-dropdown">
          {/* Header with quick links */}
          <div className="datepicker-header">
            <div className="datepicker-quick-links">
              <div className="datepicker-quick-link">
                <span className="datepicker-quick-label">Today</span>
                <button className="datepicker-link-button" onClick={jumpToToday}>
                  {formatDate(today)}
                </button>
              </div>
              
              {mode === 'single' && value && (
                <div className="datepicker-quick-link">
                  <span className="datepicker-quick-label">Selected</span>
                  <button className="datepicker-link-button" onClick={jumpToSelected}>
                    {formatDate(value)}
                  </button>
                </div>
              )}
              
              {mode === 'range' && tempRangeEnd && (
                <div className="datepicker-quick-link">
                  <span className="datepicker-quick-label">Selected</span>
                  <button className="datepicker-link-button" onClick={jumpToSelected}>
                    {formatDate(tempRangeEnd)}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Month/Year navigation */}
          <div className="datepicker-nav">
            <div className="datepicker-nav-buttons">
              <button className="datepicker-nav-button" onClick={previousYear} type="button">
                <Icon name="chevrons-left" size="sm" />
              </button>
              <button className="datepicker-nav-button" onClick={previousMonth} type="button">
                <Icon name="chevron-left" size="sm" />
              </button>
            </div>
            
            <div className="datepicker-current-month">
              {MONTHS[currentMonth]} {currentYear}
            </div>
            
            <div className="datepicker-nav-buttons">
              <button className="datepicker-nav-button" onClick={nextMonth} type="button">
                <Icon name="chevron-right" size="sm" />
              </button>
              <button className="datepicker-nav-button" onClick={nextYear} type="button">
                <Icon name="chevrons-right" size="sm" />
              </button>
            </div>
          </div>

          {/* Calendar grid */}
          <div className="datepicker-calendar">
            {/* Day headers */}
            <div className="datepicker-weekdays">
              {DAYS.map((day) => (
                <div key={day} className="datepicker-weekday">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar days */}
            <div className="datepicker-days">
              {calendarDays.map((day, index) => {
                const isOtherMonth = day !== null && day < 0;
                const displayDay = isOtherMonth ? Math.abs(day) % 100 : day;
                const isTodayDate = !isOtherMonth && day !== null && isToday(day);
                const isSelectedDate = !isOtherMonth && day !== null && isSelected(day);
                const isInRangeDate = !isOtherMonth && day !== null && isInRange(day);
                const isRangeStartDate = !isOtherMonth && day !== null && isRangeStart(day);
                const isRangeEndDate = !isOtherMonth && day !== null && isRangeEnd(day);

                return (
                  <button
                    key={index}
                    className={`datepicker-day ${isOtherMonth ? 'datepicker-day--other-month' : ''} ${
                      isTodayDate ? 'datepicker-day--today' : ''
                    } ${isSelectedDate || isRangeStartDate || isRangeEndDate ? 'datepicker-day--selected' : ''} ${
                      isInRangeDate ? 'datepicker-day--in-range' : ''
                    } ${isRangeStartDate ? 'datepicker-day--range-start' : ''} ${
                      isRangeEndDate ? 'datepicker-day--range-end' : ''
                    }`}
                    onClick={() => day !== null && handleDateClick(Math.abs(day) % 100)}
                    disabled={isOtherMonth}
                    type="button"
                  >
                    <span className="datepicker-day-content">
                      {displayDay !== null ? displayDay : ''}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Footer buttons for range mode */}
          {mode === 'range' && (
            <div className="datepicker-footer">
              <button className="datepicker-button datepicker-button--cancel" onClick={handleCancel} type="button">
                Cancel
              </button>
              <button
                className="datepicker-button datepicker-button--apply"
                onClick={handleApply}
                disabled={!tempRangeStart || !tempRangeEnd}
                type="button"
              >
                Apply
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
