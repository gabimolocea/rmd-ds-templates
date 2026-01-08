import React, { useState } from 'react';
import { Icon, IconName } from '../Icon/Icon';
import qrImage from '../Icon/icons/🎨 Foundation/qr-image.png';
import './Sidebar.css';

export interface SidebarMenuItem {
  id: string;
  label: string;
  icon?: IconName;
  onClick?: () => void;
  badge?: number;
  children?: SidebarMenuItem[];
}

export interface SidebarProps {
  role?: 'guest' | 'user';
  variant?: 'desktop' | 'mobile';
  isOpen?: boolean;
  expandedItemId?: string | null;
  activeItemId?: string;
  onMenuItemClick?: (itemId: string) => void;
  onToggleExpand?: (itemId: string) => void;
  className?: string;
}

const DEFAULT_MENU_ITEMS: SidebarMenuItem[] = [
  { id: 'home', label: 'Home', icon: 'home-02' },
  { 
    id: 'cme', 
    label: 'CME/CE', 
    icon: 'graduation-hat-02',
    children: [
      {
        id: 'cme-series',
        label: 'CME/CE Series',
        children: [
          { id: 'ghfa', label: 'Global Heart Failure Academy' },
          { id: 'neuro', label: 'NeuroFrontiers CME' },
        ]
      },
      {
        id: 'cme-topics',
        label: 'CME/CE Topic Areas',
        children: [
          { id: 'allergy', label: 'Allergy, Asthma, and Immunology' },
          { id: 'cardiology', label: 'Cardiology' },
          { id: 'dermatology', label: 'Dermatology' },
          { id: 'emergency', label: 'Emergency Medicine' },
          { id: 'endocrinology', label: 'Endocrinology' },
          { id: 'gastro', label: 'Gastroenterology and Hepatology' },
          { id: 'general', label: 'General Medicine and Primary Care' },
          { id: 'infectious', label: 'Infectious Diseases' },
          { id: 'genetics', label: 'Genetics' },
          { id: 'nephrology', label: 'Nephrology' },
          { id: 'neurology', label: 'Neurology' },
          { id: 'nutrition', label: 'Nutrition' },
          { id: 'oncology', label: 'Oncology and Hematology' },
          { id: 'ophthalmology', label: 'Ophthalmology' },
          { id: 'pathology', label: 'Pathology and Laboratory Medicine' },
          { id: 'pediatrics', label: 'Pediatrics' },
          { id: 'psychiatry', label: 'Psychiatry and Mental Health' },
          { id: 'pulmonary', label: 'Pulmonary Medicine' },
          { id: 'radiology', label: 'Radiology' },
          { id: 'rare', label: 'Rare and Orphan Diseases' },
          { id: 'rheumatology', label: 'Rheumatology' },
          { id: 'surgery', label: 'Surgery' },
          { id: 'technology', label: 'Technology' },
          { id: 'urology', label: 'Urology' },
          { id: 'womens', label: "Women's Health" },
        ]
      },
      {
        id: 'education-partners',
        label: 'Featured Education Partners',
        children: [
          { id: 'axis', label: 'AXIS Medical Education' },
          { id: 'medtelligence', label: 'Medtelligence' },
          { id: 'omnia', label: 'Omnia Education' },
          { id: 'pace', label: 'PACE-CME' },
          { id: 'prova', label: 'Prova Education' },
          { id: 'rmei', label: 'RMEI' },
          { id: 'totalcme', label: 'Total CME' },
        ]
      }
    ]
  },
  { id: 'specialty', label: 'Specialty', icon: 'stethoscope-1' },
  { id: 'industry', label: 'Industry Features', icon: 'lightbulb-02' },
  { id: 'news', label: 'News', icon: 'layout-alt-02' },
  { id: 'live', label: 'Live', icon: 'video-recorder' },
  { id: 'series', label: 'Series', icon: 'series-01' },
  { id: 'explore', label: 'Explore' },
  { id: 'clara', label: 'Clara', icon: 'stars-01' },
  { id: 'qchallenge', label: 'Q-Challenge', icon: 'trophy-01' },
  { id: 'doctors-lounge', label: "Doctor's Lounge", icon: 'coffee' },
  { id: 'playlists', label: 'Playlists', icon: 'list' },
  { id: 'jobs', label: 'Healthcare Jobs', icon: 'briefcase-01' },
];

const GUEST_ONLY_ITEMS: SidebarMenuItem[] = [
  { id: 'newsletter', label: 'Newsletter', icon: 'megaphone-01' },
];

export const Sidebar: React.FC<SidebarProps> = ({
  role = 'user',
  variant = 'desktop',
  isOpen = true,
  expandedItemId = null,
  activeItemId,
  onMenuItemClick,
  onToggleExpand,
  className = '',
}) => {
  const [localExpandedId, setLocalExpandedId] = useState<string | null>(expandedItemId);

  const menuItems = role === 'guest' 
    ? [...DEFAULT_MENU_ITEMS, ...GUEST_ONLY_ITEMS]
    : DEFAULT_MENU_ITEMS;

  const handleItemClick = (item: SidebarMenuItem) => {
    if (item.children && item.children.length > 0) {
      // For top-level items with children, don't toggle, just let hover handle it
      if (!item.onClick) {
        return;
      }
    }
    onMenuItemClick?.(item.id);
    item.onClick?.();
  };

  const handleMouseEnter = (item: SidebarMenuItem, level: number) => {
    const hasChildren = item.children && item.children.length > 0;
    if (hasChildren && level === 0) {
      setLocalExpandedId(item.id);
      onToggleExpand?.(item.id);
    }
  };

  const handleMouseLeave = () => {
    setLocalExpandedId(null);
  };

  const renderMenuItem = (item: SidebarMenuItem, level: number = 0) => {
    const isExpanded = localExpandedId === item.id;
    const isActive = activeItemId === item.id;
    const hasChildren = item.children && item.children.length > 0;
    const isSection = level === 0 && !item.icon && item.label !== 'Explore';
    const isExplore = item.label === 'Explore';

    if (isExplore) {
      return (
        <div key={item.id} className={`sidebar-menu-item-wrapper level-${level}`}>
          <div className="sidebar-explore-label">
            {item.label}
          </div>
        </div>
      );
    }

    return (
      <div key={item.id} className={`sidebar-menu-item-wrapper level-${level}`}>
        <button
          className={`sidebar-menu-item ${isActive ? 'active' : ''} ${isSection ? 'section-header' : ''} ${level > 0 ? 'submenu-item' : ''}`}
          onClick={() => handleItemClick(item)}
          onMouseEnter={() => handleMouseEnter(item, level)}
          aria-expanded={hasChildren ? isExpanded : undefined}
        >
          <div className="sidebar-menu-item-content">
            {item.icon && (
              <Icon 
                name={item.icon} 
                size="md" 
                color="#6c6c72"
                className="sidebar-menu-icon"
              />
            )}
            <span className={`sidebar-menu-label ${isSection ? 'section-label' : ''}`}>
              {item.label}
            </span>
          </div>
          {hasChildren && level === 0 && (
            <Icon 
              name="chevron-right"
              size="md"
              color="#6c6c72"
              className="sidebar-expand-icon"
            />
          )}
        </button>
        
        {hasChildren && isExpanded && level === 0 && (
          <div className="sidebar-flyout">
            <div className="sidebar-flyout-content">
              {item.children!.map(child => renderMenuItem(child, level + 1))}
            </div>
          </div>
        )}

        {hasChildren && level > 0 && (
          <div className="sidebar-submenu">
            {item.children!.map(child => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  const isDesktop = variant === 'desktop';
  const isMobile = variant === 'mobile';

  return (
    <aside 
      className={`sidebar ${isDesktop ? 'sidebar--desktop' : 'sidebar--mobile'} ${isOpen ? 'sidebar--open' : 'sidebar--closed'} ${className}`}
      onMouseLeave={handleMouseLeave}
    >
      <nav className="sidebar-nav">
        {menuItems.map(item => renderMenuItem(item))}
        
        {isDesktop && (
          <div className="ios-app-promo">
            <img 
              src={qrImage} 
              alt="Download iOS App" 
              className="ios-qr-code"
            />
            <p className="ios-promo-text">
              Continue your experience in our iOS app!
            </p>
          </div>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
