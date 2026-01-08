import React from 'react';
import { Icon } from '../Icon';
import './AccountDropdown.css';
import './AccountDropdown.css';

export interface AccountDropdownProps {
  userName?: string;
  userAvatar?: string;
  onCreditsClick?: () => void;
  onHistoryClick?: () => void;
  onSavedClick?: () => void;
  onSubscriptionsClick?: () => void;
  onSettingsClick?: () => void;
  onLogoutClick?: () => void;
  className?: string;
}

export function AccountDropdown({
  userName = 'John D. Doe, MD, MHS, FACC, FAHA, FASE',
  userAvatar,
  onCreditsClick,
  onHistoryClick,
  onSavedClick,
  onSubscriptionsClick,
  onSettingsClick,
  onLogoutClick,
  className = ''
}: AccountDropdownProps) {
  const containerClasses = `account-dropdown ${className}`.trim();

  return (
    <div className={containerClasses}>
      {/* Header Section */}
      <div className="account-dropdown-header">
        <div className="account-dropdown-user">
          <div className="account-dropdown-avatar">
            {userAvatar ? (
              <img src={userAvatar} alt={userName} />
            ) : (
              <div className="account-dropdown-avatar-placeholder">
                {userName ? userName.charAt(0).toUpperCase() : 'U'}
              </div>
            )}
          </div>
          <p className="account-dropdown-username">{userName}</p>
        </div>
      </div>

      {/* Body Section */}
      <div className="account-dropdown-body">
        <button className="account-dropdown-item" onClick={onCreditsClick}>
          <Icon name="graduation-hat-02" size="md" color="#6c6c72" />
          <span>Credits</span>
        </button>
        
        <button className="account-dropdown-item" onClick={onHistoryClick}>
          <Icon name="clock-rewind" size="md" color="#6c6c72" />
          <span>History</span>
        </button>
        
        <button className="account-dropdown-item" onClick={onSavedClick}>
          <Icon name="bookmark" size="md" color="#6c6c72" />
          <span>Saved</span>
        </button>
        
        <button className="account-dropdown-item" onClick={onSubscriptionsClick}>
          <Icon name="star-01" size="md" color="#6c6c72" />
          <span>Subscriptions</span>
        </button>
        
        <button className="account-dropdown-item" onClick={onSettingsClick}>
          <Icon name="settings-01" size="md" color="#6c6c72" />
          <span>Settings</span>
        </button>
      </div>

      {/* Footer Section */}
      <div className="account-dropdown-footer">
        <button className="account-dropdown-item" onClick={onLogoutClick}>
          <Icon name="log-out-01" size="md" color="#6c6c72" />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
}
