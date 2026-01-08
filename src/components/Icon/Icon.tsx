import React, { useEffect, useState } from 'react';
import { loadIcon } from './iconLoader';
import './Icon.css';

// Common icon names from the design system
export type IconName =
  | 'activity'
  | 'activity-heart'
  | 'alert-circle'
  | 'alert-triangle'
  | 'anchor'
  | 'archive'
  | 'asterisk-01'
  | 'asterisk-02'
  | 'at-sign'
  | 'bookmark'
  | 'bookmark-add'
  | 'bookmark-check'
  | 'bookmark-minus'
  | 'bookmark-x'
  | 'building-01'
  | 'building-02'
  | 'building-03'
  | 'building-04'
  | 'building-05'
  | 'building-06'
  | 'building-07'
  | 'building-08'
  | 'calendar'
  | 'check'
  | 'check-circle'
  | 'check-circle-broken'
  | 'check-done-01'
  | 'check-done-02'
  | 'check-heart'
  | 'check-square'
  | 'check-square-broken'
  | 'check-verified-01'
  | 'check-verified-02'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'chevrons-left'
  | 'chevrons-right'
  | 'cloud-blank-01'
  | 'cloud-blank-02'
  | 'coffee'
  | 'copy-01'
  | 'copy-02'
  | 'copy-03'
  | 'copy-04'
  | 'copy-05'
  | 'copy-06'
  | 'copy-07'
  | 'divide-01'
  | 'divide-02'
  | 'divide-03'
  | 'dots-grid-01'
  | 'dots-grid-02'
  | 'dots-grid-03'
  | 'dots-horizontal'
  | 'dots-vertical'
  | 'download-01'
  | 'download-02'
  | 'download-03'
  | 'download-04'
  | 'download-cloud-01'
  | 'download-cloud-02'
  | 'edit-01'
  | 'edit-02'
  | 'edit-03'
  | 'edit-05'
  | 'equal'
  | 'equal-not'
  | 'eye'
  | 'eye-off'
  | 'filter-funnel-02'
  | 'filter-lines'
  | 'google-chrome'
  | 'hash-01'
  | 'hash-02'
  | 'heart'
  | 'heart-rounded'
  | 'hearts'
  | 'help-circle'
  | 'help-hexagon'
  | 'help-square'
  | 'home-01'
  | 'home-02'
  | 'home-03'
  | 'home-04'
  | 'home-05'
  | 'home-line'
  | 'home-smile'
  | 'inbox-01'
  | 'info-circle'
  | 'info-hexagon'
  | 'info-octagon'
  | 'info-square'
  | 'life-buoy-01'
  | 'link-01'
  | 'link-02'
  | 'link-03'
  | 'link-04'
  | 'link-05'
  | 'link-broken-01'
  | 'link-broken-02'
  | 'link-external-01'
  | 'link-external-02'
  | 'loading-01'
  | 'loading-02'
  | 'loading-03'
  | 'log-in-01'
  | 'log-in-02'
  | 'log-in-03'
  | 'log-in-04'
  | 'log-out-01'
  | 'log-out-02'
  | 'log-out-03'
  | 'log-out-04'
  | 'medical-circle'
  | 'medical-cross'
  | 'medical-square'
  | 'menu-01'
  | 'menu-02'
  | 'menu-03'
  | 'menu-04'
  | 'menu-05'
  | 'minus'
  | 'minus-circle'
  | 'minus-square'
  | 'percent-01'
  | 'percent-02'
  | 'percent-03'
  | 'pin-01'
  | 'placeholder'
  | 'play-circle'
  | 'playlist-01'
  | 'playlist-02'
  | 'playlist-add'
  | 'plus'
  | 'plus-circle'
  | 'plus-heavy'
  | 'plus-square'
  | 'save-01'
  | 'save-02'
  | 'save-03'
  | 'search-lg'
  | 'search-md'
  | 'search-refraction'
  | 'search-sm'
  | 'settings-01'
  | 'settings-02'
  | 'settings-03'
  | 'settings-04'
  | 'share-01'
  | 'share-02'
  | 'share-03'
  | 'share-04'
  | 'share-05'
  | 'share-06'
  | 'share-07'
  | 'slash-circle-01'
  | 'slash-circle-02'
  | 'slash-divider'
  | 'slash-octagon'
  | 'speedometer-01'
  | 'speedometer-02'
  | 'speedometer-03'
  | 'speedometer-04'
  | 'stethoscope'
  | 'target-01'
  | 'target-02'
  | 'target-03'
  | 'target-04'
  | 'target-05'
  | 'toggle-01-left'
  | 'toggle-01-right'
  | 'toggle-02-left'
  | 'toggle-02-right'
  | 'toggle-03-left'
  | 'toggle-03-right'
  | 'tool-01'
  | 'tool-02'
  | 'translate-01'
  | 'translate-02'
  | 'trash-01'
  | 'trash-02'
  | 'trash-03'
  | 'trash-04'
  | 'upload-01'
  | 'upload-02'
  | 'upload-03'
  | 'upload-04'
  | 'upload-cloud-01'
  | 'upload-cloud-02'
  | 'user-01'
  | 'x'
  | 'x-circle'
  | 'x-close'
  | 'graduation-hat-01'
  | 'lightbulb-02'
  | 'file-04'
  | 'video-recorder'
  | 'layers-three-01'
  | 'stars-01'
  | 'trophy-01'
  | 'list'
  | 'briefcase-01'
  | 'megaphone-01'
  | 'x-square'
  | 'zap'
  | 'zap-circle'
  | 'zap-fast'
  | 'zap-off'
  | 'zap-square'
  | 'zzz-01'
  | 'pause'
  | 'play'
  | 'playlist-add'
  | 'share-06'
  | 'volume-x'
  | 'closed-caption'
  | 'closed-caption-on'
  | 'closed-caption-off'
  | 'rotate-ccw'
  | 'rotate-cw'
  | 'type-01';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconProps {
  name: IconName;
  size?: IconSize;
  color?: string;
  className?: string;
  'aria-label'?: string;
}

// Icon SVG paths mapped by name
const iconPaths: Record<IconName, React.ReactNode> = {
  // Navigation icons
  'chevron-down': (
    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  'chevron-left': (
    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  'chevron-right': (
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  'chevron-up': (
    <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),

  // Double Chevron icons
  'chevrons-left': (
    <>
      <path d="M11 17L6 12L11 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 17L13 12L18 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  'chevrons-right': (
    <>
      <path d="M13 7L18 12L13 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 7L11 12L6 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),

  // Basic icons
  'check': (
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  'check-circle': (
    <>
      <path d="M22 11.08V12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C14.92 2 17.54 3.28 19.38 5.28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  'x': (
    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  'x-close': (
    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  'x-circle': (
    <>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M15 9L9 15M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  'plus': (
    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  'plus-circle': (
    <>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  'minus': (
    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  'minus-circle': (
    <>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),

  // Menu icons
  'menu-01': (
    <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  'menu-02': (
    <path d="M3 12H21M3 6H21M3 18H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  'menu-03': (
    <path d="M3 12H21M3 6H21M9 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  'dots-horizontal': (
    <>
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <circle cx="6" cy="12" r="1.5" fill="currentColor" />
      <circle cx="18" cy="12" r="1.5" fill="currentColor" />
    </>
  ),
  'dots-vertical': (
    <>
      <circle cx="12" cy="6" r="1.5" fill="currentColor" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <circle cx="12" cy="18" r="1.5" fill="currentColor" />
    </>
  ),

  // Search icon
  'search-md': (
    <>
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
      <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  'search-lg': (
    <>
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
      <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  'search-sm': (
    <>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M20 20L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),

  // User icon
  'user-01': (
    <>
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M6 21C6 17.134 8.686 14 12 14C15.314 14 18 17.134 18 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),

  // Inbox icon
  'inbox-01': (
    <>
      <path d="M22 12H16L14 15H10L8 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.45 5.11L2 12V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V12L18.55 5.11C18.21 4.43 17.53 4 16.79 4H7.21C6.47 4 5.79 4.43 5.45 5.11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),

  // Home icons
  'home-01': (
    <>
      <path d="M3 9.5L12 3L21 9.5V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  'home-02': (
    <>
      <path d="M9 22V12H15V22M3 9L12 2L21 9V20C21 21.1 20.1 22 19 22H5C3.9 22 3 21.1 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),

  // Heart icons
  'heart': (
    <path d="M20.84 4.61C20.3292 4.09914 19.7228 3.69356 19.0554 3.41687C18.3879 3.14018 17.6725 2.99805 16.95 2.99805C16.2275 2.99805 15.5121 3.14018 14.8446 3.41687C14.1772 3.69356 13.5708 4.09914 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04096 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.3509 11.8792 21.7564 11.2728 22.0331 10.6054C22.3098 9.93789 22.452 9.22248 22.452 8.5C22.452 7.77752 22.3098 7.06211 22.0331 6.39461C21.7564 5.72711 21.3509 5.12075 20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),

  // Info icons
  'info-circle': (
    <>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  'alert-circle': (
    <>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),

  // Alert icons for Alert component
  'alert-triangle': (
    <>
      <path d="M10.29 3.86L1.82 18C1.64537 18.3024 1.55296 18.6453 1.55199 18.9945C1.55101 19.3437 1.64149 19.6871 1.81442 19.9905C1.98735 20.2939 2.23672 20.5467 2.53771 20.7239C2.83869 20.901 3.18082 20.9962 3.53 21H20.47C20.8192 20.9962 21.1613 20.901 21.4623 20.7239C21.7633 20.5467 22.0127 20.2939 22.1856 19.9905C22.3585 19.6871 22.449 19.3437 22.448 18.9945C22.447 18.6453 22.3546 18.3024 22.18 18L13.71 3.86C13.5317 3.56611 13.2807 3.32312 12.9812 3.15448C12.6817 2.98585 12.3438 2.89725 12 2.89725C11.6562 2.89725 11.3183 2.98585 11.0188 3.15448C10.7193 3.32312 10.4683 3.56611 10.29 3.86Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 9V13M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),

  // Calendar icon for DatePicker
  'calendar': (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M3 10H21M8 2V6M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),

  // Settings icons
  'settings-01': (
    <>
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),

  // Download/Upload icons
  'download-01': (
    <>
      <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 10L12 15L17 10M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  'upload-01': (
    <>
      <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 8L12 3L7 8M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),

  // Share icons
  'share-01': (
    <>
      <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="2" />
      <path d="M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49" stroke="currentColor" strokeWidth="2" />
    </>
  ),

  // Trash icons
  'trash-01': (
    <>
      <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 6V20C19 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6M7 6V4C7 3.46957 7.21071 2.96086 7.58579 2.58579C7.96086 2.21071 8.46957 2 9 2H15C15.5304 2 16.0391 2.21071 16.4142 2.58579C16.7893 2.96086 17 3.46957 17 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),

  // Edit icons
  'edit-01': (
    <>
      <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),

  // Eye icons
  'eye': (
    <>
      <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  'eye-off': (
    <>
      <path d="M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 3.96914 7.65663 6.06 6.06M9.9 4.24C10.5883 4.0789 11.2931 3.99836 12 4C19 4 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19M14.12 14.12C13.8454 14.4147 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.5719 9.14351 13.1984C8.99262 12.8248 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2218 9.18488 10.8538C9.34884 10.4859 9.58525 10.1546 9.88 9.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1 1L23 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),

  // Placeholder entries for remaining icons - these would need proper SVG paths
  'activity': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'activity-heart': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'anchor': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'archive': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'asterisk-01': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'asterisk-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'at-sign': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'bookmark': (
    <>
      <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  'bookmark-add': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'bookmark-check': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'bookmark-minus': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'bookmark-x': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'building-01': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'building-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'building-03': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'building-04': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'building-05': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'building-06': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'building-07': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'building-08': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'check-circle-broken': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'check-done-01': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'check-done-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'check-heart': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'check-square': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'check-square-broken': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'check-verified-01': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'check-verified-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'cloud-blank-01': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'cloud-blank-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'coffee': (
    <>
      <path d="M18 8H19C19.5304 8 20.0391 8.21071 20.4142 8.58579C20.7893 8.96086 21 9.46957 21 10C21 10.5304 20.7893 11.0391 20.4142 11.4142C20.0391 11.7893 19.5304 12 19 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 8H17V15C17 15.7956 16.6839 16.5587 16.1213 17.1213C15.5587 17.6839 14.7956 18 14 18H8C7.20435 18 6.44129 17.6839 5.87868 17.1213C5.31607 16.5587 5 15.7956 5 15V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 21H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 5L9 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 5L14 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  'copy-01': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'copy-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'copy-03': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'copy-04': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'copy-05': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'copy-06': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'copy-07': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'divide-01': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'divide-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'divide-03': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'dots-grid-01': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'dots-grid-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'dots-grid-03': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'download-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'download-03': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'download-04': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'download-cloud-01': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'download-cloud-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'edit-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'edit-03': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'edit-05': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'equal': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'equal-not': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'filter-funnel-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'filter-lines': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'google-chrome': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'hash-01': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'hash-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'heart-rounded': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'hearts': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'help-circle': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'help-hexagon': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'help-square': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'home-03': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'home-04': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'home-05': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'home-line': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'home-smile': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'info-hexagon': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'info-octagon': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'info-square': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'life-buoy-01': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'link-01': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'link-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'link-03': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'link-04': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'link-05': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'link-broken-01': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'link-broken-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'link-external-01': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'link-external-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'loading-01': (
    <path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.07 4.93L16.24 7.76M7.76 16.24L4.93 19.07M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  'loading-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'loading-03': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'log-in-01': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'log-in-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'log-in-03': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'log-in-04': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'log-out-01': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'log-out-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'log-out-03': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'log-out-04': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'medical-circle': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'medical-cross': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'medical-square': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'menu-04': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'menu-05': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'minus-square': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'percent-01': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'percent-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'percent-03': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'pin-01': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'placeholder': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'play-circle': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'playlist-01': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'playlist-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'plus-heavy': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'plus-square': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'save-01': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'save-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'save-03': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'search-refraction': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'settings-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'settings-03': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'settings-04': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'share-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'share-03': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'share-04': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'share-05': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'share-07': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'slash-circle-01': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'slash-circle-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'slash-divider': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'slash-octagon': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'speedometer-01': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'speedometer-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'speedometer-03': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'speedometer-04': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'stethoscope': (
    <>
      <path d="M5 13C5 14.0609 5.42143 15.0783 6.17157 15.8284C6.92172 16.5786 7.93913 17 9 17C10.0609 17 11.0783 16.5786 11.8284 15.8284C12.5786 15.0783 13 14.0609 13 13V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 6C13 4.93913 12.5786 3.92172 11.8284 3.17157C11.0783 2.42143 10.0609 2 9 2C7.93913 2 6.92172 2.42143 6.17157 3.17157C5.42143 3.92172 5 4.93913 5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 3H13.5C14.5609 3 15.5783 3.42143 16.3284 4.17157C17.0786 4.92172 17.5 5.93913 17.5 7C17.5 8.06087 17.0786 9.07828 16.3284 9.82843C15.5783 10.5786 14.5609 11 13.5 11H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="18.5" cy="7" r="1.5" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  'target-01': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'target-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'target-03': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'target-04': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'target-05': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'toggle-01-left': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'toggle-01-right': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'toggle-02-left': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'toggle-02-right': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'toggle-03-left': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'toggle-03-right': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'tool-01': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'tool-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'translate-01': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'translate-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'trash-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'trash-03': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'trash-04': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'upload-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'upload-03': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'upload-04': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'upload-cloud-01': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'upload-cloud-02': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'x-square': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'zap': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'graduation-hat-01': (
    <>
      <path d="M12 7.5L3 11.5L12 15.5L21 11.5L12 7.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 13.5V17.5C6 18.0304 6.21071 18.5391 6.58579 18.9142C6.96086 19.2893 7.46957 19.5 8 19.5H16C16.5304 19.5 17.0391 19.2893 17.4142 18.9142C17.7893 18.5391 18 18.0304 18 17.5V13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  'lightbulb-02': (
    <>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25ZM4.36957 4.36957C4.66247 4.07668 5.13734 4.07668 5.43023 4.36957L6.03033 4.96967C6.32322 5.26256 6.32322 5.73744 6.03033 6.03033C5.73744 6.32322 5.26256 6.32322 4.96967 6.03033L4.36957 5.43023C4.07668 5.13734 4.07668 4.66247 4.36957 4.36957ZM19.6306 4.36964C19.9235 4.66257 19.9234 5.13744 19.6305 5.4303L19.0303 6.0304C18.7373 6.32325 18.2625 6.32319 17.9696 6.03026C17.6767 5.73733 17.6768 5.26246 17.9697 4.9696L18.57 4.36951C18.8629 4.07665 19.3378 4.07671 19.6306 4.36964ZM12 6.75C9.1005 6.75 6.75 9.1005 6.75 12C6.75 14.8995 9.1005 17.25 12 17.25C14.8995 17.25 17.25 14.8995 17.25 12C17.25 9.1005 14.8995 6.75 12 6.75ZM5.25 12C5.25 8.27208 8.27208 5.25 12 5.25C15.7279 5.25 18.75 8.27208 18.75 12C18.75 14.7485 17.1072 17.1134 14.75 18.1663V20C14.75 21.5188 13.5188 22.75 12 22.75C10.4812 22.75 9.25 21.5188 9.25 20V18.1663C6.89277 17.1134 5.25 14.7485 5.25 12ZM10.75 18.6345V20C10.75 20.6904 11.3096 21.25 12 21.25C12.6904 21.25 13.25 20.6904 13.25 20V18.6345C12.8449 18.7103 12.4271 18.75 12 18.75C11.5729 18.75 11.1551 18.7103 10.75 18.6345ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3C3.41421 11.25 3.75 11.5858 3.75 12C3.75 12.4142 3.41421 12.75 3 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM20.25 12C20.25 11.5858 20.5858 11.25 21 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21C20.5858 12.75 20.25 12.4142 20.25 12Z" fill="currentColor" />
    </>
  ),
  'file-04': (
    <>
      <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 2V9H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  'video-recorder': (
    <>
      <path d="M17 10.5V7.5C17 6.96957 16.7893 6.46086 16.4142 6.08579C16.0391 5.71071 15.5304 5.5 15 5.5H5C4.46957 5.5 3.96086 5.71071 3.58579 6.08579C3.21071 6.46086 3 6.96957 3 7.5V16.5C3 17.0304 3.21071 17.5391 3.58579 17.9142C3.96086 18.2893 4.46957 18.5 5 18.5H15C15.5304 18.5 16.0391 18.2893 16.4142 17.9142C16.7893 17.5391 17 17.0304 17 16.5V13.5L21 17.5V6.5L17 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  'layers-three-01': (
    <>
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  'stars-01': (
    <>
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  'trophy-01': (
    <>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.35902 1.24985C7.38763 1.24992 7.41611 1.25 7.44443 1.25H16.5555C16.5839 1.25 16.6124 1.24992 16.641 1.24985C16.9644 1.24899 17.3033 1.2481 17.5985 1.35554C18.0846 1.53246 18.4675 1.91537 18.6445 2.40146C18.7399 2.66363 18.7498 2.96029 18.7503 3.25L20.5217 3.25C20.736 3.24998 20.9329 3.24997 21.0982 3.26125C21.2758 3.27337 21.4712 3.30099 21.6697 3.38321C22.0985 3.56082 22.4392 3.9015 22.6168 4.3303C22.699 4.52881 22.7266 4.72415 22.7387 4.90179C22.75 5.06711 22.75 5.26396 22.75 5.47824V6C22.75 6.03917 22.75 6.07776 22.75 6.11578C22.7503 6.93375 22.7505 7.49191 22.6222 7.97057C22.2755 9.26467 21.2647 10.2755 19.9706 10.6222C19.5754 10.7281 19.126 10.7464 18.5211 10.7495C17.813 13.3955 15.5372 15.4007 12.75 15.7088V17.25H13.4444C15.8223 17.25 17.75 19.1777 17.75 21.5556C17.75 22.2152 17.2152 22.75 16.5555 22.75H7.44443C6.78476 22.75 6.24999 22.2152 6.24999 21.5556C6.24999 19.1777 8.17765 17.25 10.5555 17.25H11.25V15.7088C8.46276 15.4007 6.18701 13.3955 5.47891 10.7495C4.87393 10.7464 4.42458 10.7281 4.02942 10.6222C2.73532 10.2755 1.72452 9.26466 1.37777 7.97057C1.24951 7.49191 1.24969 6.93376 1.24996 6.11579C1.24998 6.07776 1.24999 6.03917 1.24999 6L1.24999 5.47824C1.24997 5.26397 1.24996 5.06712 1.26124 4.90179C1.27336 4.72415 1.30098 4.52881 1.3832 4.3303C1.56081 3.9015 1.90149 3.56082 2.33029 3.38321C2.5288 3.30099 2.72414 3.27337 2.90178 3.26125C3.06711 3.24997 3.26395 3.24998 3.47823 3.25C3.48546 3.25 3.49272 3.25 3.49999 3.25H5.2497C5.25014 2.96029 5.2601 2.66363 5.35553 2.40146C5.53245 1.91537 5.91536 1.53246 6.40145 1.35554C6.69664 1.2481 7.03554 1.24899 7.35902 1.24985ZM5.24999 4.75H3.49999C3.25676 4.75 3.11189 4.7504 3.00389 4.75777C2.93706 4.76233 2.90865 4.76843 2.9013 4.7703C2.84247 4.79558 2.79557 4.84247 2.77029 4.90131C2.76842 4.90866 2.76232 4.93707 2.75776 5.0039C2.75039 5.1119 2.74999 5.25677 2.74999 5.5V6C2.74999 6.97826 2.75643 7.32026 2.82666 7.58234C3.03471 8.3588 3.64119 8.96528 4.41765 9.17333C4.59812 9.22169 4.81648 9.2398 5.2544 9.24639C5.25147 9.16462 5.24999 9.08248 5.24999 9V4.75ZM6.74999 3.44444C6.74999 3.22842 6.75031 3.09978 6.75615 3.0036C6.75978 2.94371 6.76468 2.91812 6.76614 2.9116C6.7915 2.8445 6.84449 2.79151 6.91159 2.76615C6.91811 2.76469 6.9437 2.75979 7.00359 2.75616C7.09977 2.75032 7.22841 2.75 7.44443 2.75H16.5555C16.7716 2.75 16.9002 2.75032 16.9964 2.75616C17.0563 2.75979 17.0819 2.76469 17.0884 2.76615C17.1555 2.79151 17.2085 2.84449 17.2338 2.9116C17.2353 2.91811 17.2402 2.9437 17.2438 3.0036C17.2497 3.09978 17.25 3.22842 17.25 3.44444V9C17.25 11.8995 14.8995 14.25 12 14.25C9.10049 14.25 6.74999 11.8995 6.74999 9V3.44444ZM18.75 4.75V9C18.75 9.08248 18.7485 9.16462 18.7456 9.24639C19.1835 9.2398 19.4019 9.22169 19.5823 9.17333C20.3588 8.96528 20.9653 8.3588 21.1733 7.58234C21.2435 7.32026 21.25 6.97826 21.25 6V5.5C21.25 5.25677 21.2496 5.1119 21.2422 5.0039C21.2377 4.93705 21.2316 4.90865 21.2297 4.9013C21.2044 4.84247 21.1575 4.79558 21.0987 4.7703C21.0913 4.76843 21.0629 4.76233 20.9961 4.75777C20.8881 4.7504 20.7432 4.75 20.5 4.75H18.75ZM10.5555 18.75C9.10933 18.75 7.91869 19.8443 7.76644 21.25H16.2335C16.0813 19.8443 14.8906 18.75 13.4444 18.75H10.5555Z" fill="currentColor" />
    </>
  ),
  'list': (
    <>
      <line x1="8" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="3" y1="6" x2="3.01" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="3" y1="12" x2="3.01" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="3" y1="18" x2="3.01" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  'briefcase-01': (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 7V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  'megaphone-01': (
    <>
      <path d="M3 11C3 12.5913 3.63214 14.1174 4.75736 15.2426C5.88258 16.3679 7.4087 17 9 17H11.5L10 21L14 19V17H15C16.5913 17 18.1174 16.3679 19.2426 15.2426C20.3679 14.1174 21 12.5913 21 11V9C21 7.4087 20.3679 5.88258 19.2426 4.75736C18.1174 3.63214 16.5913 3 15 3H9C7.4087 3 5.88258 3.63214 4.75736 4.75736C3.63214 5.88258 3 7.4087 3 9V11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  'pause': (
    <>
      <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" />
      <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" />
    </>
  ),
  'play': (
    <>
      <path d="M5 3L19 12L5 21V3Z" fill="currentColor" />
    </>
  ),
  'playlist-add': (
    <>
      <path d="M2 10H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 7V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 7H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 17H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  'share-06': (
    <>
      <path d="M21 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  'volume-x': (
    <>
      <path d="M15 9L21 15M21 9L15 15M11 5L6 9H2V15H6L11 19V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  'closed-caption': (
    <>
      <path d="M19 4H5C3.34315 4 2 5.34315 2 7V17C2 18.6569 3.34315 20 5 20H19C20.6569 20 22 18.6569 22 17V7C22 5.34315 20.6569 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5 10C10.1022 9.66565 9.56087 9.5 9 9.5C8.60218 9.5 8.21064 9.57902 7.85195 9.73109C7.49327 9.88315 7.17661 10.1049 6.92388 10.3786C6.67116 10.6522 6.48844 10.9705 6.38788 11.3123C6.28733 11.6541 6.27116 12.0117 6.34029 12.3591C6.40941 12.7065 6.56184 13.0355 6.78585 13.3227C7.00987 13.6099 7.30033 13.8483 7.63568 14.0212C7.97103 14.1941 8.34304 14.2976 8.72588 14.3244C9.10872 14.3512 9.49343 14.3007 9.85355 14.1767M19.5 10C19.1022 9.66565 18.5609 9.5 18 9.5C17.6022 9.5 17.2106 9.57902 16.852 9.73109C16.4933 9.88315 16.1766 10.1049 15.9239 10.3786C15.6712 10.6522 15.4884 10.9705 15.3879 11.3123C15.2873 11.6541 15.2712 12.0117 15.3403 12.3591C15.4094 12.7065 15.5618 13.0355 15.7859 13.3227C16.0099 13.6099 16.3003 13.8483 16.6357 14.0212C16.971 14.1941 17.343 14.2976 17.7259 14.3244C18.1087 14.3512 18.4934 14.3007 18.8536 14.1767" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  'closed-caption-on': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'closed-caption-off': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'rotate-ccw': (
    <>
      <path d="M1 4V10H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.51 15C4.15839 16.8404 5.38734 18.4202 7.01166 19.5014C8.63598 20.5826 10.5677 21.1066 12.5157 20.9945C14.4637 20.8824 16.3226 20.1402 17.8121 18.8798C19.3017 17.6193 20.3413 15.9089 20.7742 14.0064C21.2072 12.1038 21.0101 10.1123 20.2126 8.33214C19.4152 6.55197 18.0605 5.08033 16.3528 4.13598C14.6451 3.19162 12.6769 2.82537 10.7447 3.09455C8.81245 3.36373 7.02091 4.25467 5.64 5.64L1 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  'rotate-cw': (
    <>
      <path d="M23 4V10H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20.49 15C19.8416 16.8404 18.6127 18.4202 16.9883 19.5014C15.364 20.5826 13.4323 21.1066 11.4843 20.9945C9.53633 20.8824 7.67736 20.1402 6.18785 18.8798C4.69834 17.6193 3.65872 15.9089 3.22578 14.0064C2.79284 12.1038 2.98989 10.1123 3.78737 8.33214C4.58485 6.55197 5.93953 5.08033 7.64721 4.13598C9.35488 3.19162 11.3231 2.82537 13.2553 3.09455C15.1876 3.36373 16.9791 4.25467 18.36 5.64L23 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  'type-01': (
    <>
      <path d="M4 7V4H20V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 20H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  'zap-circle': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'zap-fast': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'zap-off': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'zap-square': <circle cx="12" cy="12" r="1" fill="currentColor" />,
  'zzz-01': <circle cx="12" cy="12" r="1" fill="currentColor" />,
};

// Size map (in pixels)
const sizeMap: Record<IconSize, number> = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 48,
};

/**
 * Icon component from ReachMD Design System v1.0
 * 
 * A comprehensive icon library with consistent sizing and styling.
 * 
 * @example
 * <Icon name="check-circle" size="md" />
 * <Icon name="user-01" size="lg" color="#009595" />
 */
export const Icon: React.FC<IconProps> = ({
  name,
  size = 'md',
  color,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const iconSize = sizeMap[size];

  useEffect(() => {
    let cancelled = false;

    async function loadSvg() {
      setIsLoading(true);
      
      // Try to load from files first
      const loadedSvg = await loadIcon(name);
      
      if (!cancelled) {
        if (loadedSvg) {
          setSvgContent(loadedSvg);
        } else {
          // Fallback to inline icons if file not found
          const iconPath = iconPaths[name];
          if (iconPath) {
            // Convert ReactNode to SVG string for consistency
            setSvgContent(null); // Will use fallback rendering
          } else {
            console.warn(`Icon "${name}" not found in files or inline paths`);
            setSvgContent(null);
          }
        }
        setIsLoading(false);
      }
    }

    loadSvg();

    return () => {
      cancelled = true;
    };
  }, [name]);

  const iconClasses = [
    'rmd-icon',
    `rmd-icon--${size}`,
    className,
  ].filter(Boolean).join(' ');

  // Show loading placeholder
  if (isLoading) {
    return (
      <svg
        className={iconClasses}
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={color ? { color } : undefined}
        aria-label={ariaLabel || name}
        role="img"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      </svg>
    );
  }

  // If we have loaded SVG content, render it
  if (svgContent) {
    // Extract the inner content of the SVG (everything between <svg> tags)
    const innerContent = svgContent.replace(/<svg[^>]*>|<\/svg>/g, '');
    
    return (
      <svg
        className={iconClasses}
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={color ? { color } : undefined}
        aria-label={ariaLabel || name}
        role="img"
        dangerouslySetInnerHTML={{ __html: innerContent }}
      />
    );
  }

  // Fallback to inline icons
  const iconPath = iconPaths[name];
  
  if (!iconPath) {
    return null;
  }

  return (
    <svg
      className={iconClasses}
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={color ? { color } : undefined}
      aria-label={ariaLabel || name}
      role="img"
    >
      {iconPath}
    </svg>
  );
};

export default Icon;
