import React, { useState } from 'react';
import { Icon } from '../Icon';
import './RadioPlayer.css';

export interface RadioPlayerProps {
  isPlaying?: boolean;
  currentTitle?: string;
  currentTime?: number;
  duration?: number;
  showClosedCaptions?: boolean;
  closedCaptionText?: string;
  onPlayPause?: () => void;
  onRewind?: () => void;
  onForward?: () => void;
  onSave?: () => void;
  onShare?: () => void;
  onClosedCaptionsToggle?: () => void;
  onSpeedChange?: () => void;
  onVolumeToggle?: () => void;
  className?: string;
}

export const RadioPlayer: React.FC<RadioPlayerProps> = ({
  isPlaying = false,
  currentTitle = 'When More Isn\'t Better: Questioning the Efficacy of Common Cardiovascular Treatments',
  currentTime = 169,
  duration = 1679,
  showClosedCaptions = false,
  closedCaptionText = 'directly, or indirectly, involved in the care of patients with MM',
  onPlayPause,
  onRewind,
  onForward,
  onSave,
  onShare,
  onClosedCaptionsToggle,
  onSpeedChange,
  onVolumeToggle,
  className = '',
}) => {
  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className={`radio-player ${className}`}>
      {/* Progress Bar */}
      <div className="radio-player-progress">
        <div className="radio-player-progress-track">
          <div 
            className="radio-player-progress-fill" 
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Main Radio Controls */}
      <div className="radio-player-main">
        {/* Left Column */}
        <div className="radio-player-left">
          <button 
            className="radio-player-play-button"
            onClick={onPlayPause}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            <Icon name={isPlaying ? 'pause' : 'play-01'} size="md" color="white" />
          </button>
          <div className="radio-player-info">
            <div className="radio-player-station">
              <span className="radio-player-station-name">ReachMD Radio</span>
              <div className="radio-player-live-badge">
                <span>LIVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="radio-player-middle">
          <p className="radio-player-title">{currentTitle}</p>
        </div>

        {/* Right Column */}
        <div className="radio-player-right">
          <button 
            className="radio-player-icon-button"
            onClick={onSave}
            aria-label="Add to playlist"
          >
            <Icon name="playlist-add" size="md" color="#6c6c72" />
          </button>
          <button 
            className="radio-player-icon-button"
            onClick={onShare}
            aria-label="Share"
          >
            <Icon name="share-06" size="md" color="#6c6c72" />
          </button>
          <button 
            className="radio-player-icon-button"
            onClick={onVolumeToggle}
            aria-label="Volume"
          >
            <Icon name="volume-x" size="md" color="#6c6c72" />
          </button>
          <button 
            className="radio-player-icon-button"
            onClick={onClosedCaptionsToggle}
            aria-label="Toggle closed captions"
          >
            <Icon name={showClosedCaptions ? "closed-caption-on" : "closed-caption-off"} size="md" color="#6c6c72" />
          </button>
          <button 
            className="radio-player-icon-button"
            onClick={onSpeedChange}
            aria-label="Calendar"
          >
            <Icon name="calendar" size="md" color="#6c6c72" />
          </button>
        </div>
      </div>

      {/* Closed Captions */}
      {showClosedCaptions && (
        <div className="radio-player-captions">
          <div className="radio-player-captions-spacer-left" />
          <div className="radio-player-captions-text">
            <p>{closedCaptionText}</p>
          </div>
          <div className="radio-player-captions-spacer-right" />
        </div>
      )}
    </div>
  );
};

export default RadioPlayer;
