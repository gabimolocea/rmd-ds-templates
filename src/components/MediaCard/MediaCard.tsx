
import { Icon } from '../Icon';
import './MediaCard.css';

export interface MediaCardProps {
  imageUrl?: string;
  category: string;
  title: string;
  summary?: string;
  faculty?: string;
  author?: string;
  date?: string;
  credits?: string;
  hasVideo?: boolean;
  hasClosedCaption?: boolean;
  colorVariant?: 'blue' | 'orange' | 'green' | 'purple' | 'pink';
  onClick?: () => void;
  className?: string;
}

export function MediaCard({
  imageUrl,
  category,
  title,
  summary,
  faculty,
  author,
  date,
  credits,
  hasVideo = false,
  hasClosedCaption = false,
  colorVariant,
  onClick,
  className = ''
}: MediaCardProps) {
  const isTextOnly = !imageUrl;
  
  // Auto-assign color variant for text-only cards if not specified
  let assignedColor = colorVariant;
  if (isTextOnly && !colorVariant) {
    const colors: Array<'blue' | 'orange' | 'green' | 'purple' | 'pink'> = ['blue', 'orange', 'green', 'purple', 'pink'];
    const hash = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    assignedColor = colors[hash % colors.length];
  }
  
  const colorClass = isTextOnly && assignedColor ? `media-card-color-${assignedColor}` : '';
  const containerClasses = `media-card ${isTextOnly ? 'media-card-text-only' : ''} ${colorClass} ${className}`.trim();

  return (
    <div className={containerClasses} onClick={onClick}>
      {imageUrl && (
        <div className="media-card-image-container">
          <img 
            src={imageUrl} 
            alt={title}
            className="media-card-image"
          />
          
          {/* Media format badges */}
          <div className="media-card-badges">
            {hasVideo && (
              <div className="media-card-badge">
                <Icon name="play" size="md" color="white" />
              </div>
            )}
            {hasClosedCaption && (
              <div className="media-card-badge">
                <Icon name="closed-caption" size="md" color="white" />
              </div>
            )}
          </div>
        </div>
      )}

      <div className="media-card-body">
        <div className="media-card-content">
          <p className="media-card-category">{category}</p>
          <h3 className="media-card-title">{title}</h3>
          
          {/* Summary for text-only cards */}
          {summary && (
            <p className="media-card-summary">{summary}</p>
          )}
          
          {/* Author and date for text-only cards */}
          {(author || date) && (
            <div className="media-card-meta">
              {author && <span className="media-card-author">{author}</span>}
              {author && date && <span className="media-card-meta-separator">•</span>}
              {date && <span className="media-card-date">{date}</span>}
            </div>
          )}
          
          {/* Faculty names */}
          {faculty && (
            <p className="media-card-faculty">{faculty}</p>
          )}
        </div>

        {/* Footer with credits */}
        {credits && (
          <div className="media-card-footer">
            <Icon name="graduation-hat-01" size="md" color="#1c1c1c" />
            <p className="media-card-credits">{credits}</p>
          </div>
        )}
      </div>
    </div>
  );
}
