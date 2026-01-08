import React from 'react';
import { Icon } from '../Icon';
import './Breadcrumbs.css';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  showHomeIcon?: boolean;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  showHomeIcon = true,
}) => {
  return (
    <nav className="rmd-breadcrumbs" aria-label="Breadcrumb">
      <ol className="rmd-breadcrumbs__list">
        {showHomeIcon && (
          <li className="rmd-breadcrumbs__item">
            <button className="rmd-breadcrumbs__home-button" aria-label="Home">
              <Icon name="home-01" size="md" />
            </button>
            {items.length > 0 && (
              <span className="rmd-breadcrumbs__separator">
                <Icon name="chevron-right" size="xs" />
              </span>
            )}
          </li>
        )}
        
        {items.map((item, index) => (
          <li key={index} className="rmd-breadcrumbs__item">
            {item.href ? (
              <a 
                href={item.href} 
                className="rmd-breadcrumbs__link"
                onClick={item.onClick}
              >
                {item.label}
              </a>
            ) : (
              <button 
                className="rmd-breadcrumbs__link"
                onClick={item.onClick}
              >
                {item.label}
              </button>
            )}
            {index < items.length - 1 && (
              <span className="rmd-breadcrumbs__separator">
                <Icon name="chevron-right" size="xs" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
