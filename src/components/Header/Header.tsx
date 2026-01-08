import { useState, useEffect, useRef } from 'react';
import { Icon } from '../Icon';
import { AccountDropdown } from '../AccountDropdown';
import './Header.css';

export type HeaderRole = 'guest' | 'user';

export interface HeaderProps {
  role?: HeaderRole;
  onMenuClick?: () => void;
  onSearchClick?: () => void;
  onSearchSubmit?: (query: string) => void;
  onLoginClick?: () => void;
  onRegisterClick?: () => void;
  onNotificationsClick?: () => void;
  onAvatarClick?: () => void;
  userName?: string;
  userAvatar?: string;
  searchPlaceholder?: string;
  className?: string;
}

export function Header({
  role = 'guest',
  onMenuClick,
  onSearchClick,
  // onSearchSubmit,
  onLoginClick,
  onRegisterClick,
  onNotificationsClick,
  onAvatarClick,
  userName,
  userAvatar,
  searchPlaceholder = 'Search',
  className = ''
}: HeaderProps) {
  const containerClasses = `header ${className}`.trim();
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowAccountDropdown(false);
      }
    };

    if (showAccountDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showAccountDropdown]);

  const handleAvatarClick = () => {
    setShowAccountDropdown(!showAccountDropdown);
    onAvatarClick?.();
  };

  const handleDropdownItemClick = (callback?: () => void) => {
    setShowAccountDropdown(false);
    callback?.();
  };

  return (
    <header className={containerClasses}>
      {/* Left Section - Hamburger, Logo, Tagline */}
      <div className="header-left">
        <div className="header-logo-section">
          <button 
            className="icon-button" 
            onClick={onMenuClick}
            aria-label="Menu"
          >
            <Icon name="menu-01" size="md" color="#6c6c72" />
          </button>
          
          <div className="logo-container">
            <img 
              src="https://cdn.reachmd.com/uploads/branding/rmd/rmd_header-logo_isfiuosqzD.svg" 
              alt="ReachMD"
              height="24"
            />
          </div>
          
          <div className="tagline">
            Be part of the knowledge.™
          </div>
        </div>
      </div>

      {/* Center Section - Search Bar */}
      <div className="header-center">
        <div className="search-input-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder={searchPlaceholder}
            onFocus={onSearchClick}
          />
          <button 
            className="search-button"
            onClick={onSearchClick}
            aria-label="Search"
          >
            <Icon name="search-md" size="md" color="#6c6c72" />
          </button>
        </div>
      </div>

      {/* Right Section - Login/Register or Notifications/Avatar */}
      <div className="header-right">
        {role === 'guest' && (
          <div className="auth-buttons">
            <button 
              className="login-button"
              onClick={onLoginClick}
            >
              Log In
            </button>
            <button 
              className="register-button"
              onClick={onRegisterClick}
            >
              Register
            </button>
          </div>
        )}

        {role === 'user' && (
          <div className="user-section">
            <button 
              className="icon-button" 
              onClick={onNotificationsClick}
              aria-label="Notifications"
            >
              <Icon name="inbox-01" size="md" color="#6c6c72" />
            </button>
            
            <button 
              className="avatar-button" 
              onClick={handleAvatarClick}
              aria-label="User menu"
              aria-expanded={showAccountDropdown}
            >
              <div className="avatar">
                {userAvatar ? (
                  <img src={userAvatar} alt={userName || 'User'} />
                ) : (
                  <div className="avatar-placeholder">
                    {userName ? userName.charAt(0).toUpperCase() : 'U'}
                  </div>
                )}
              </div>
              <div className="avatar-dropdown-icon">
                <Icon name="chevron-down" size="xs" color="#6c6c72" />
              </div>
            </button>

            {showAccountDropdown && (
              <div className="account-dropdown-container" ref={dropdownRef}>
                <AccountDropdown
                  userName={userName}
                  userAvatar={userAvatar}
                  onCreditsClick={() => handleDropdownItemClick()}
                  onHistoryClick={() => handleDropdownItemClick()}
                  onSavedClick={() => handleDropdownItemClick()}
                  onSubscriptionsClick={() => handleDropdownItemClick()}
                  onSettingsClick={() => handleDropdownItemClick()}
                  onLogoutClick={() => handleDropdownItemClick()}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
