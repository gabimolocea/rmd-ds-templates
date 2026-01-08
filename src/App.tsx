import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from './components/Button';
import { Badge } from './components/Badge';
import { Alert } from './components/Alert';
import { Breadcrumbs } from './components/Breadcrumbs';
import { Checkbox } from './components/Checkbox';
import { Radio, RadioGroup } from './components/Radio';
import { Autocomplete } from './components/Autocomplete';
import { DatePicker } from './components/DatePicker';
import { TextArea } from './components/TextArea';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { RadioPlayer } from './components/RadioPlayer';
import type { ButtonSize, ButtonVariant, ButtonColor } from './components/Button';
import type { BadgeVariant, BadgeStyle } from './components/Badge';
import type { AlertVariant, AlertStyle } from './components/Alert';
import type { BreadcrumbItem } from './components/Breadcrumbs';
import type { CheckboxSize, CheckboxColor } from './components/Checkbox';
import type { RadioColor } from './components/Radio';
import type { AutocompleteOption } from './components/Autocomplete';
import type { ValidationState } from './components/TextArea';
import type { HeaderRole } from './components/Header';
import './App.css';

type DemoComponent = 'button' | 'badge' | 'alert' | 'breadcrumbs' | 'checkbox' | 'radio' | 'autocomplete' | 'datepicker' | 'textarea' | 'header' | 'sidebar' | 'template-default';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeComponent, setActiveComponent] = useState<DemoComponent>('button');
  
  // Sync URL with active component
  useEffect(() => {
    const path = location.pathname.slice(1) || 'button';
    if (path !== activeComponent) {
      setActiveComponent(path as DemoComponent);
    }
  }, [location.pathname]);

  // Update URL when component changes
  useEffect(() => {
    const currentPath = location.pathname.slice(1);
    if (currentPath !== activeComponent) {
      navigate(`/${activeComponent}`, { replace: true });
    }
  }, [activeComponent]);
  
  // Template states
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [templateUserName, setTemplateUserName] = useState('Dr. Sarah Johnson');
  const [isTemplateFullScreen, setIsTemplateFullScreen] = useState(false);
  const [showClosedCaptions, setShowClosedCaptions] = useState(false);
  const [isRadioPlaying, setIsRadioPlaying] = useState(false);
  
  // Button states
  const [label, setLabel] = useState('Button');
  const [size, setSize] = useState<ButtonSize>('medium');
  const [variant, setVariant] = useState<ButtonVariant>('primary');
  const [color, setColor] = useState<ButtonColor>('primary');
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(false);
  const [iconBefore, setIconBefore] = useState(false);
  const [iconAfter, setIconAfter] = useState(false);
  
  // Badge states
  const [badgeLabel, setBadgeLabel] = useState('BADGE NAME');
  const [badgeVariant, setBadgeVariant] = useState<BadgeVariant>('neutral');
  const [badgeStyle, setBadgeStyle] = useState<BadgeStyle>('outline');
  const [showBadgeIcon, setShowBadgeIcon] = useState(true);
  
  // Alert states
  const [alertTitle, setAlertTitle] = useState('Tell the user how things change moving forward');
  const [alertDescription, setAlertDescription] = useState('Compliments, extends, or elaborates on the header. This should include end punctuation.');
  const [alertVariant, setAlertVariant] = useState<AlertVariant>('neutral');
  const [alertStyle, setAlertStyle] = useState<AlertStyle>('outline');
  const [hasAlertIcon, setHasAlertIcon] = useState(true);
  const [hasAlertAction, setHasAlertAction] = useState(true);
  const [isAlertDismissible, setIsAlertDismissible] = useState(true);
  const [actionLabel, setActionLabel] = useState('Button');
  
  // Breadcrumbs states
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbItem[]>([
    { label: 'Link', href: '#' },
    { label: 'Link', href: '#' },
    { label: 'Link', href: '#' },
  ]);
  const [showHomeIcon, setShowHomeIcon] = useState(true);
  
  // Checkbox states
  const [checkboxLabel, setCheckboxLabel] = useState('Checkbox text');
  const [checkboxDescription, setCheckboxDescription] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [checkboxIndeterminate, setCheckboxIndeterminate] = useState(false);
  const [checkboxDisabled, setCheckboxDisabled] = useState(false);
  const [checkboxSize, setCheckboxSize] = useState<CheckboxSize>('regular');
  const [checkboxColor, setCheckboxColor] = useState<CheckboxColor>('default');
  
  // Radio states
  const [radioValue, setRadioValue] = useState('option1');
  const [radioLabel, setRadioLabel] = useState('Radio text');
  const [radioDescription, setRadioDescription] = useState('');
  const [radioDisabled, setRadioDisabled] = useState(false);
  const [radioColor, setRadioColor] = useState<RadioColor>('default');
  
  // Autocomplete states
  const [autocompleteValue, setAutocompleteValue] = useState('');
  const [autocompleteLabel, setAutocompleteLabel] = useState('Search');
  const [autocompletePlaceholder, setAutocompletePlaceholder] = useState('Type to search...');
  const [autocompleteIcon, setAutocompleteIcon] = useState(false);
  const [autocompleteLoading, setAutocompleteLoading] = useState(false);
  const [autocompleteDisabled, setAutocompleteDisabled] = useState(false);
  
  const autocompleteOptions: AutocompleteOption[] = [
    { value: '1', label: 'JavaScript' },
    { value: '2', label: 'TypeScript' },
    { value: '3', label: 'Python' },
    { value: '4', label: 'Java' },
    { value: '5', label: 'C++' },
    { value: '6', label: 'Ruby' },
    { value: '7', label: 'Go' },
    { value: '8', label: 'Rust' },
    { value: '9', label: 'Swift' },
    { value: '10', label: 'Kotlin' },
  ];
  
  // DatePicker states
  const [dateValue, setDateValue] = useState<Date | null>(new Date());
  const [dateLabel, setDateLabel] = useState('Select a date');
  const [datePlaceholder, setDatePlaceholder] = useState('mm/dd/yyyy');
  const [dateMode, setDateMode] = useState<'single' | 'range'>('single');
  const [rangeStart, setRangeStart] = useState<Date | null>(null);
  const [rangeEnd, setRangeEnd] = useState<Date | null>(null);

  // TextArea states
  const [textareaValue, setTextareaValue] = useState('');
  const [textareaLabel, setTextareaLabel] = useState('Label');
  const [textareaHelperText, setTextareaHelperText] = useState('This is where helper text goes.');
  const [textareaPlaceholder, setTextareaPlaceholder] = useState('Input text');
  const [hasTextareaLabel, setHasTextareaLabel] = useState(true);
  const [hasHelperText, setHasHelperText] = useState(true);
  const [textareaReadonly, setTextareaReadonly] = useState(false);
  const [showTextareaCharCount, setShowTextareaCharCount] = useState(false);
  const [textareaMaxLength, setTextareaMaxLength] = useState(200);
  const [textareaValidation, setTextareaValidation] = useState<ValidationState>('none');
  const [textareaValidationMessage, setTextareaValidationMessage] = useState('This is validation message text.');

  // Header states
  const [headerRole, setHeaderRole] = useState<HeaderRole>('guest');
  const [userName, setUserName] = useState('John Doe');

  const StarIcon = () => <span style={{ fontSize: '20px' }}>★</span>;
  const ArrowIcon = () => <span style={{ fontSize: '20px' }}>→</span>;

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">ReachMD Design System</h1>
        <p className="app-subtitle">Interactive Component Library</p>
      </header>

      <div className="app-layout">
        {/* Sidebar Navigation */}
        <aside className="sidebar">
          <h3 className="sidebar-title">Components</h3>
          <nav className="component-nav">
            <button 
              className={activeComponent === 'button' ? 'active' : ''}
              onClick={() => setActiveComponent('button')}
            >
              Button
            </button>
            <button 
              className={activeComponent === 'badge' ? 'active' : ''}
              onClick={() => setActiveComponent('badge')}
            >
              Badge
            </button>
            <button 
              className={activeComponent === 'alert' ? 'active' : ''}
              onClick={() => setActiveComponent('alert')}
            >
              Alert
            </button>
            <button 
              className={activeComponent === 'breadcrumbs' ? 'active' : ''}
              onClick={() => setActiveComponent('breadcrumbs')}
            >
              Breadcrumbs
            </button>
            <button 
              className={activeComponent === 'checkbox' ? 'active' : ''}
              onClick={() => setActiveComponent('checkbox')}
            >
              Checkbox
            </button>
            <button 
              className={activeComponent === 'radio' ? 'active' : ''}
              onClick={() => setActiveComponent('radio')}
            >
              Radio
            </button>
            <button 
              className={activeComponent === 'autocomplete' ? 'active' : ''}
              onClick={() => setActiveComponent('autocomplete')}
            >
              Autocomplete
            </button>
            <button 
              className={activeComponent === 'datepicker' ? 'active' : ''}
              onClick={() => setActiveComponent('datepicker')}
            >
              Date Picker
            </button>
            <button 
              className={activeComponent === 'textarea' ? 'active' : ''}
              onClick={() => setActiveComponent('textarea')}
            >
              Text Area
            </button>
            <button 
              className={activeComponent === 'header' ? 'active' : ''}
              onClick={() => setActiveComponent('header')}
            >
              Header
            </button>
            <button 
              className={activeComponent === 'sidebar' ? 'active' : ''}
              onClick={() => setActiveComponent('sidebar')}
            >
              Sidebar
            </button>
          </nav>

          <div className="nav-section-divider"></div>
          
          <div className="nav-section-title">Templates</div>
          <nav className="component-nav">
            <button 
              className={activeComponent === 'template-default' ? 'active' : ''}
              onClick={() => setActiveComponent('template-default')}
            >
              Default Template
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {activeComponent === 'button' && (
        <div className="demo-container">
          <div className="controls-panel">
          <h2 className="panel-title">Component Properties</h2>
          
          <div className="control-group">
            <label>Label</label>
            <input
              type="text"
              className="text-input"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="Button label"
            />
          </div>

          <div className="control-group">
            <label>Size</label>
            <div className="button-group">
              <button
                className={size === 'small' ? 'active' : ''}
                onClick={() => setSize('small')}
              >
                Small
              </button>
              <button
                className={size === 'medium' ? 'active' : ''}
                onClick={() => setSize('medium')}
              >
                Medium
              </button>
              <button
                className={size === 'large' ? 'active' : ''}
                onClick={() => setSize('large')}
              >
                Large
              </button>
            </div>
          </div>

          <div className="control-group">
            <label>Variant</label>
            <div className="button-group">
              <button
                className={variant === 'primary' ? 'active' : ''}
                onClick={() => setVariant('primary')}
              >
                Primary
              </button>
              <button
                className={variant === 'secondary' ? 'active' : ''}
                onClick={() => setVariant('secondary')}
              >
                Secondary
              </button>
              <button
                className={variant === 'tertiary' ? 'active' : ''}
                onClick={() => setVariant('tertiary')}
              >
                Tertiary
              </button>
            </div>
          </div>

          <div className="control-group">
            <label>Color</label>
            <div className="button-group">
              <button
                className={color === 'primary' ? 'active' : ''}
                onClick={() => setColor('primary')}
              >
                Primary
              </button>
              <button
                className={color === 'neutral' ? 'active' : ''}
                onClick={() => setColor('neutral')}
              >
                Neutral
              </button>
              <button
                className={color === 'guava' ? 'active' : ''}
                onClick={() => setColor('guava')}
              >
                Guava
              </button>
              <button
                className={color === 'error' ? 'active' : ''}
                onClick={() => setColor('error')}
              >
                Error
              </button>
            </div>
          </div>

          <div className="control-group">
            <label>State</label>
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={disabled}
                  onChange={(e) => setDisabled(e.target.checked)}
                />
                Disabled
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={loading}
                  onChange={(e) => setLoading(e.target.checked)}
                />
                Loading
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={focused}
                  onChange={(e) => setFocused(e.target.checked)}
                />
                Focused
              </label>
            </div>
          </div>

          <div className="control-group">
            <label>Icons</label>
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={iconBefore}
                  onChange={(e) => setIconBefore(e.target.checked)}
                />
                Icon Before
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={iconAfter}
                  onChange={(e) => setIconAfter(e.target.checked)}
                />
                Icon After
              </label>
            </div>
          </div>

          <div className="control-group">
            <label>Code</label>
            <pre className="code-block">
{`<Button
  label="${label}"
  size="${size}"
  variant="${variant}"
  color="${color}"${disabled ? '\n  disabled' : ''}${loading ? '\n  loading' : ''}${focused ? '\n  className="rmd-button--focused"' : ''}${iconBefore ? '\n  iconBefore={<StarIcon />}' : ''}${iconAfter ? '\n  iconAfter={<ArrowIcon />}' : ''}
/>`}
            </pre>
          </div>
        </div>

        <div className="preview-panel">
          <h2 className="panel-title">Preview</h2>
          <div className="button-preview">
            <Button
              label={label}
              size={size}
              variant={variant}
              color={color}
              disabled={disabled}
              loading={loading}
              iconBefore={iconBefore ? <StarIcon /> : undefined}
              iconAfter={iconAfter ? <ArrowIcon /> : undefined}
              onClick={() => alert('Button clicked!')}
              className={focused ? 'rmd-button--focused' : ''}
            />
          </div>

          <div className="all-variants-section">
            <h3>All Combinations</h3>
            
            <div className="variant-showcase">
              <h4>Primary Variant</h4>
              <div className="button-row">
                <Button label="Primary" variant="primary" color="primary" size={size} />
                <Button label="Neutral" variant="primary" color="neutral" size={size} />
                <Button label="Guava" variant="primary" color="guava" size={size} />
                <Button label="Error" variant="primary" color="error" size={size} />
              </div>
            </div>

            <div className="variant-showcase">
              <h4>Secondary Variant</h4>
              <div className="button-row">
                <Button label="Primary" variant="secondary" color="primary" size={size} />
                <Button label="Neutral" variant="secondary" color="neutral" size={size} />
                <Button label="Guava" variant="secondary" color="guava" size={size} />
                <Button label="Error" variant="secondary" color="error" size={size} />
              </div>
            </div>

            <div className="variant-showcase">
              <h4>Tertiary Variant</h4>
              <div className="button-row">
                <Button label="Primary" variant="tertiary" color="primary" size={size} />
                <Button label="Neutral" variant="tertiary" color="neutral" size={size} />
                <Button label="Guava" variant="tertiary" color="guava" size={size} />
                <Button label="Error" variant="tertiary" color="error" size={size} />
              </div>
            </div>

            <div className="variant-showcase">
              <h4>States</h4>
              <div className="button-row">
                <Button label="Normal" variant="primary" color="primary" size={size} />
                <Button label="Disabled" variant="primary" color="primary" size={size} disabled />
                <Button label="Loading" variant="primary" color="primary" size={size} loading />
              </div>
            </div>

            <div className="variant-showcase">
              <h4>With Icons</h4>
              <div className="button-row">
                <Button 
                  label="Icon Before" 
                  variant="primary" 
                  color="primary" 
                  size={size}
                  iconBefore={<StarIcon />}
                />
                <Button 
                  label="Icon After" 
                  variant="primary" 
                  color="primary" 
                  size={size}
                  iconAfter={<ArrowIcon />}
                />
                <Button 
                  label="Both" 
                  variant="primary" 
                  color="primary" 
                  size={size}
                  iconBefore={<StarIcon />}
                  iconAfter={<ArrowIcon />}
                />
              </div>
            </div>
          </div>
            </div>
          </div>
            )}

            {activeComponent === 'badge' && (
            <div className="demo-container">
          <div className="controls-panel">
            <h2>Component Properties</h2>
            
            <div className="control-group">
              <label>Label</label>
              <input
                type="text"
                className="text-input"
                value={badgeLabel}
                onChange={(e) => setBadgeLabel(e.target.value)}
                placeholder="Badge label"
              />
            </div>

            <div className="control-group">
              <label>Variant</label>
              <div className="button-group">
                <button
                  className={badgeVariant === 'neutral' ? 'active' : ''}
                  onClick={() => setBadgeVariant('neutral')}
                >
                  Neutral
                </button>
                <button
                  className={badgeVariant === 'information' ? 'active' : ''}
                  onClick={() => setBadgeVariant('information')}
                >
                  Information
                </button>
                <button
                  className={badgeVariant === 'warning' ? 'active' : ''}
                  onClick={() => setBadgeVariant('warning')}
                >
                  Warning
                </button>
                <button
                  className={badgeVariant === 'error' ? 'active' : ''}
                  onClick={() => setBadgeVariant('error')}
                >
                  Error
                </button>
                <button
                  className={badgeVariant === 'success' ? 'active' : ''}
                  onClick={() => setBadgeVariant('success')}
                >
                  Success
                </button>
              </div>
            </div>

            <div className="control-group">
              <label>Style</label>
              <div className="button-group">
                <button
                  className={badgeStyle === 'outline' ? 'active' : ''}
                  onClick={() => setBadgeStyle('outline')}
                >
                  Outline
                </button>
                <button
                  className={badgeStyle === 'filled' ? 'active' : ''}
                  onClick={() => setBadgeStyle('filled')}
                >
                  Filled
                </button>
              </div>
            </div>

            <div className="control-group">
              <label>Options</label>
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={showBadgeIcon}
                    onChange={(e) => setShowBadgeIcon(e.target.checked)}
                  />
                  Show Icon
                </label>
              </div>
            </div>

            <div className="control-group">
              <label>Code</label>
              <pre className="code-block">
{`<Badge
  label="${badgeLabel}"
  variant="${badgeVariant}"
  badgeStyle="${badgeStyle}"${!showBadgeIcon ? '\n  showIcon={false}' : ''}
/>`}
              </pre>
            </div>
          </div>

          <div className="preview-panel">
            <h2>Preview</h2>
            <div className="button-preview">
              <Badge
                label={badgeLabel}
                variant={badgeVariant}
                badgeStyle={badgeStyle}
                showIcon={showBadgeIcon}
              />
            </div>

            <div className="all-variants-section">
              <h3>All Variants</h3>
              
              <div className="variant-showcase">
                <h4>Outline Style</h4>
                <div className="button-row">
                  <Badge label="NEUTRAL" variant="neutral" badgeStyle="outline" />
                  <Badge label="INFORMATION" variant="information" badgeStyle="outline" />
                  <Badge label="WARNING" variant="warning" badgeStyle="outline" />
                  <Badge label="ERROR" variant="error" badgeStyle="outline" />
                  <Badge label="SUCCESS" variant="success" badgeStyle="outline" />
                </div>
              </div>

              <div className="variant-showcase">
                <h4>Filled Style</h4>
                <div className="button-row">
                  <Badge label="NEUTRAL" variant="neutral" badgeStyle="filled" />
                  <Badge label="INFORMATION" variant="information" badgeStyle="filled" />
                  <Badge label="WARNING" variant="warning" badgeStyle="filled" />
                  <Badge label="ERROR" variant="error" badgeStyle="filled" />
                  <Badge label="SUCCESS" variant="success" badgeStyle="filled" />
                </div>
              </div>

              <div className="variant-showcase">
                <h4>Without Icon</h4>
                <div className="button-row">
                  <Badge label="NEUTRAL" variant="neutral" badgeStyle="outline" showIcon={false} />
                  <Badge label="INFORMATION" variant="information" badgeStyle="outline" showIcon={false} />
                  <Badge label="WARNING" variant="warning" badgeStyle="outline" showIcon={false} />
                  <Badge label="ERROR" variant="error" badgeStyle="outline" showIcon={false} />
                  <Badge label="SUCCESS" variant="success" badgeStyle="outline" showIcon={false} />
                </div>
              </div>
            </div>
          </div>
          </div>
          )}

          {activeComponent === 'alert' && (
            <div className="demo-container">
              <div className="controls-panel">
                <h2>Component Properties</h2>
                
                <div className="control-group">
                  <label>Title</label>
                  <input
                    type="text"
                    className="text-input"
                    value={alertTitle}
                    onChange={(e) => setAlertTitle(e.target.value)}
                    placeholder="Alert title"
                  />
                </div>

                <div className="control-group">
                  <label>Description</label>
                  <textarea
                    className="text-input"
                    value={alertDescription}
                    onChange={(e) => setAlertDescription(e.target.value)}
                    placeholder="Alert description"
                    rows={3}
                  />
                </div>

                <div className="control-group">
                  <label>Action Label</label>
                  <input
                    type="text"
                    className="text-input"
                    value={actionLabel}
                    onChange={(e) => setActionLabel(e.target.value)}
                    placeholder="Button label"
                  />
                </div>

                <div className="control-group">
                  <label>Variant</label>
                  <div className="button-group">
                    <button
                      className={alertVariant === 'neutral' ? 'active' : ''}
                      onClick={() => setAlertVariant('neutral')}
                    >
                      Neutral
                    </button>
                    <button
                      className={alertVariant === 'information' ? 'active' : ''}
                      onClick={() => setAlertVariant('information')}
                    >
                      Information
                    </button>
                    <button
                      className={alertVariant === 'warning' ? 'active' : ''}
                      onClick={() => setAlertVariant('warning')}
                    >
                      Warning
                    </button>
                    <button
                      className={alertVariant === 'success' ? 'active' : ''}
                      onClick={() => setAlertVariant('success')}
                    >
                      Success
                    </button>
                    <button
                      className={alertVariant === 'error' ? 'active' : ''}
                      onClick={() => setAlertVariant('error')}
                    >
                      Error
                    </button>
                  </div>
                </div>

                <div className="control-group">
                  <label>Style</label>
                  <div className="button-group">
                    <button
                      className={alertStyle === 'outline' ? 'active' : ''}
                      onClick={() => setAlertStyle('outline')}
                    >
                      Outline
                    </button>
                    <button
                      className={alertStyle === 'filled' ? 'active' : ''}
                      onClick={() => setAlertStyle('filled')}
                    >
                      Filled
                    </button>
                  </div>
                </div>

                <div className="control-group">
                  <label>Options</label>
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={hasAlertIcon}
                        onChange={(e) => setHasAlertIcon(e.target.checked)}
                      />
                      Show Icon
                    </label>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={hasAlertAction}
                        onChange={(e) => setHasAlertAction(e.target.checked)}
                      />
                      Show Action Button
                    </label>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={isAlertDismissible}
                        onChange={(e) => setIsAlertDismissible(e.target.checked)}
                      />
                      Dismissible
                    </label>
                  </div>
                </div>

                <div className="control-group">
                  <label>Code</label>
                  <pre className="code-block">
{`<Alert
  variant="${alertVariant}"
  alertStyle="${alertStyle}"
  title="${alertTitle}"
  description="${alertDescription}"
  actionLabel="${actionLabel}"${!hasAlertIcon ? '\n  hasIcon={false}' : ''}${!hasAlertAction ? '\n  hasAction={false}' : ''}${!isAlertDismissible ? '\n  isDismissible={false}' : ''}
/>`}
                  </pre>
                </div>
              </div>

              <div className="preview-panel">
                <h2>Preview</h2>
                <div className="button-preview">
                  <Alert
                    variant={alertVariant}
                    alertStyle={alertStyle}
                    title={alertTitle}
                    description={alertDescription}
                    actionLabel={actionLabel}
                    hasIcon={hasAlertIcon}
                    hasAction={hasAlertAction}
                    isDismissible={isAlertDismissible}
                    onAction={() => alert('Action clicked!')}
                    onDismiss={() => alert('Alert dismissed!')}
                  />
                </div>

                <div className="all-variants-section">
                  <h3>All Variants</h3>
                  
                  <div className="variant-showcase">
                    <h4>Outline Style</h4>
                    <div className="alert-column">
                      <Alert variant="neutral" alertStyle="outline" />
                      <Alert variant="information" alertStyle="outline" />
                      <Alert variant="warning" alertStyle="outline" />
                      <Alert variant="success" alertStyle="outline" />
                      <Alert variant="error" alertStyle="outline" />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>Filled Style</h4>
                    <div className="alert-column">
                      <Alert variant="neutral" alertStyle="filled" />
                      <Alert variant="information" alertStyle="filled" />
                      <Alert variant="warning" alertStyle="filled" />
                      <Alert variant="success" alertStyle="filled" />
                      <Alert variant="error" alertStyle="filled" />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>Without Options</h4>
                    <div className="alert-column">
                      <Alert variant="information" alertStyle="outline" hasIcon={false} />
                      <Alert variant="warning" alertStyle="filled" hasAction={false} />
                      <Alert variant="success" alertStyle="outline" isDismissible={false} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeComponent === 'breadcrumbs' && (
            <div className="demo-container">
              <div className="controls-panel">
                <h2>Component Properties</h2>
                
                <div className="control-group">
                  <label>Number of Links</label>
                  <div className="button-group">
                    <button
                      className={breadcrumbItems.length === 1 ? 'active' : ''}
                      onClick={() => setBreadcrumbItems([{ label: 'Link', href: '#' }])}
                    >
                      1 Link
                    </button>
                    <button
                      className={breadcrumbItems.length === 2 ? 'active' : ''}
                      onClick={() => setBreadcrumbItems([
                        { label: 'Link', href: '#' },
                        { label: 'Link', href: '#' },
                      ])}
                    >
                      2 Links
                    </button>
                    <button
                      className={breadcrumbItems.length === 3 ? 'active' : ''}
                      onClick={() => setBreadcrumbItems([
                        { label: 'Link', href: '#' },
                        { label: 'Link', href: '#' },
                        { label: 'Link', href: '#' },
                      ])}
                    >
                      3 Links
                    </button>
                  </div>
                </div>

                <div className="control-group">
                  <label>Options</label>
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={showHomeIcon}
                        onChange={(e) => setShowHomeIcon(e.target.checked)}
                      />
                      Show Home Icon
                    </label>
                  </div>
                </div>

                <div className="control-group">
                  <label>Code</label>
                  <pre className="code-block">
{`<Breadcrumbs
  items={[${breadcrumbItems.map((_, i) => `\n    { label: 'Link', href: '#' }`).join(',')}
  ]}${!showHomeIcon ? '\n  showHomeIcon={false}' : ''}
/>`}
                  </pre>
                </div>
              </div>

              <div className="preview-panel">
                <h2>Preview</h2>
                <div className="button-preview">
                  <Breadcrumbs
                    items={breadcrumbItems}
                    showHomeIcon={showHomeIcon}
                  />
                </div>

                <div className="all-variants-section">
                  <h3>All Variants</h3>
                  
                  <div className="variant-showcase">
                    <h4>1 Link</h4>
                    <div className="breadcrumb-row">
                      <Breadcrumbs items={[{ label: 'Link', href: '#' }]} />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>2 Links</h4>
                    <div className="breadcrumb-row">
                      <Breadcrumbs items={[
                        { label: 'Link', href: '#' },
                        { label: 'Link', href: '#' },
                      ]} />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>3 Links</h4>
                    <div className="breadcrumb-row">
                      <Breadcrumbs items={[
                        { label: 'Link', href: '#' },
                        { label: 'Link', href: '#' },
                        { label: 'Link', href: '#' },
                      ]} />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>Without Home Icon</h4>
                    <div className="breadcrumb-row">
                      <Breadcrumbs 
                        items={[
                          { label: 'Link', href: '#' },
                          { label: 'Link', href: '#' },
                        ]} 
                        showHomeIcon={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeComponent === 'checkbox' && (
            <div className="demo-container">
              <div className="controls-panel">
                <h2>Component Properties</h2>
                
                <div className="control-group">
                  <label>Label</label>
                  <input
                    type="text"
                    className="text-input"
                    value={checkboxLabel}
                    onChange={(e) => setCheckboxLabel(e.target.value)}
                    placeholder="Checkbox label"
                  />
                </div>

                <div className="control-group">
                  <label>Description (optional)</label>
                  <input
                    type="text"
                    className="text-input"
                    value={checkboxDescription}
                    onChange={(e) => setCheckboxDescription(e.target.value)}
                    placeholder="Checkbox description"
                  />
                </div>

                <div className="control-group">
                  <label>Size</label>
                  <div className="button-group">
                    <button
                      className={checkboxSize === 'small' ? 'active' : ''}
                      onClick={() => setCheckboxSize('small')}
                    >
                      Small
                    </button>
                    <button
                      className={checkboxSize === 'regular' ? 'active' : ''}
                      onClick={() => setCheckboxSize('regular')}
                    >
                      Regular
                    </button>
                  </div>
                </div>

                <div className="control-group">
                  <label>Color</label>
                  <div className="button-group">
                    <button
                      className={checkboxColor === 'default' ? 'active' : ''}
                      onClick={() => setCheckboxColor('default')}
                    >
                      Default
                    </button>
                    <button
                      className={checkboxColor === 'green' ? 'active' : ''}
                      onClick={() => setCheckboxColor('green')}
                    >
                      Green
                    </button>
                    <button
                      className={checkboxColor === 'red' ? 'active' : ''}
                      onClick={() => setCheckboxColor('red')}
                    >
                      Red
                    </button>
                  </div>
                </div>

                <div className="control-group">
                  <label>State</label>
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={checkboxChecked}
                        onChange={(e) => {
                          setCheckboxChecked(e.target.checked);
                          if (e.target.checked) setCheckboxIndeterminate(false);
                        }}
                      />
                      Checked
                    </label>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={checkboxIndeterminate}
                        onChange={(e) => {
                          setCheckboxIndeterminate(e.target.checked);
                          if (e.target.checked) setCheckboxChecked(false);
                        }}
                      />
                      Indeterminate
                    </label>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={checkboxDisabled}
                        onChange={(e) => setCheckboxDisabled(e.target.checked)}
                      />
                      Disabled
                    </label>
                  </div>
                </div>

                <div className="control-group">
                  <label>Code</label>
                  <pre className="code-block">
{`<Checkbox
  label="${checkboxLabel}"${checkboxDescription ? `\n  description="${checkboxDescription}"` : ''}${checkboxChecked ? '\n  checked' : ''}${checkboxIndeterminate ? '\n  indeterminate' : ''}${checkboxDisabled ? '\n  disabled' : ''}${checkboxSize !== 'regular' ? `\n  size="${checkboxSize}"` : ''}${checkboxColor !== 'default' ? `\n  color="${checkboxColor}"` : ''}
  onChange={(checked) => console.log(checked)}
/>`}
                  </pre>
                </div>
              </div>

              <div className="preview-panel">
                <h2>Preview</h2>
                <div className="button-preview">
                  <Checkbox
                    label={checkboxLabel}
                    description={checkboxDescription || undefined}
                    checked={checkboxChecked}
                    indeterminate={checkboxIndeterminate}
                    disabled={checkboxDisabled}
                    size={checkboxSize}
                    color={checkboxColor}
                    onChange={(checked) => setCheckboxChecked(checked)}
                  />
                </div>

                <div className="all-variants-section">
                  <h3>All Variants</h3>
                  
                  <div className="variant-showcase">
                    <h4>Default Color - Unchecked</h4>
                    <div className="checkbox-column">
                      <Checkbox label="Rest" size="regular" color="default" />
                      <Checkbox label="Disabled" size="regular" color="default" disabled />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>Default Color - Checked</h4>
                    <div className="checkbox-column">
                      <Checkbox label="Rest" size="regular" color="default" checked />
                      <Checkbox label="Disabled" size="regular" color="default" checked disabled />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>Default Color - Indeterminate</h4>
                    <div className="checkbox-column">
                      <Checkbox label="Rest" size="regular" color="default" indeterminate />
                      <Checkbox label="Disabled" size="regular" color="default" indeterminate disabled />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>Green Color</h4>
                    <div className="checkbox-column">
                      <Checkbox label="Unchecked" size="regular" color="green" />
                      <Checkbox label="Checked" size="regular" color="green" checked />
                      <Checkbox label="Indeterminate" size="regular" color="green" indeterminate />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>Red Color</h4>
                    <div className="checkbox-column">
                      <Checkbox label="Unchecked" size="regular" color="red" />
                      <Checkbox label="Checked (X icon)" size="regular" color="red" checked />
                      <Checkbox label="Indeterminate" size="regular" color="red" indeterminate />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>Small Size</h4>
                    <div className="checkbox-column">
                      <Checkbox label="Unchecked" size="small" color="default" />
                      <Checkbox label="Checked" size="small" color="default" checked />
                      <Checkbox label="Disabled" size="small" color="default" disabled />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>With Description</h4>
                    <div className="checkbox-column">
                      <Checkbox 
                        label="Checkbox text" 
                        description="Checkbox description" 
                        size="regular" 
                        color="default" 
                      />
                      <Checkbox 
                        label="Checkbox text" 
                        description="Checkbox description" 
                        size="regular" 
                        color="default" 
                        checked 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeComponent === 'radio' && (
            <div className="demo-container">
              <div className="controls-panel">
                <h2>Component Properties</h2>
                
                <div className="control-group">
                  <label>Label</label>
                  <input
                    type="text"
                    className="text-input"
                    value={radioLabel}
                    onChange={(e) => setRadioLabel(e.target.value)}
                    placeholder="Radio label"
                  />
                </div>

                <div className="control-group">
                  <label>Description (optional)</label>
                  <input
                    type="text"
                    className="text-input"
                    value={radioDescription}
                    onChange={(e) => setRadioDescription(e.target.value)}
                    placeholder="Radio description"
                  />
                </div>

                <div className="control-group">
                  <label>Selected Value</label>
                  <div className="button-group">
                    <button
                      className={radioValue === 'option1' ? 'active' : ''}
                      onClick={() => setRadioValue('option1')}
                    >
                      Option 1
                    </button>
                    <button
                      className={radioValue === 'option2' ? 'active' : ''}
                      onClick={() => setRadioValue('option2')}
                    >
                      Option 2
                    </button>
                    <button
                      className={radioValue === 'option3' ? 'active' : ''}
                      onClick={() => setRadioValue('option3')}
                    >
                      Option 3
                    </button>
                  </div>
                </div>

                <div className="control-group">
                  <label>Color</label>
                  <div className="button-group">
                    <button
                      className={radioColor === 'default' ? 'active' : ''}
                      onClick={() => setRadioColor('default')}
                    >
                      Default
                    </button>
                    <button
                      className={radioColor === 'green' ? 'active' : ''}
                      onClick={() => setRadioColor('green')}
                    >
                      Green
                    </button>
                    <button
                      className={radioColor === 'danger' ? 'active' : ''}
                      onClick={() => setRadioColor('danger')}
                    >
                      Danger
                    </button>
                  </div>
                </div>

                <div className="control-group">
                  <label>State</label>
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={radioDisabled}
                        onChange={(e) => setRadioDisabled(e.target.checked)}
                      />
                      Disabled
                    </label>
                  </div>
                </div>

                <div className="control-group">
                  <label>Code</label>
                  <pre className="code-block">
{`<RadioGroup
  name="example"
  value={selectedValue}
  onChange={setSelectedValue}
>
  <Radio
    label="${radioLabel}"${radioDescription ? `\n    description="${radioDescription}"` : ''}
    value="option1"${radioDisabled ? '\n    disabled' : ''}${radioColor !== 'default' ? `\n    color="${radioColor}"` : ''}
  />
  <Radio
    label="${radioLabel}"${radioDescription ? `\n    description="${radioDescription}"` : ''}
    value="option2"${radioDisabled ? '\n    disabled' : ''}${radioColor !== 'default' ? `\n    color="${radioColor}"` : ''}
  />
</RadioGroup>`}
                  </pre>
                </div>
              </div>

              <div className="preview-panel">
                <h2>Preview</h2>
                <div className="button-preview">
                  <RadioGroup
                    name="demo-radio"
                    value={radioValue}
                    onChange={setRadioValue}
                  >
                    <Radio
                      label={radioLabel}
                      description={radioDescription || undefined}
                      value="option1"
                      disabled={radioDisabled}
                      color={radioColor}
                    />
                    <Radio
                      label={radioLabel}
                      description={radioDescription || undefined}
                      value="option2"
                      disabled={radioDisabled}
                      color={radioColor}
                    />
                    <Radio
                      label={radioLabel}
                      description={radioDescription || undefined}
                      value="option3"
                      disabled={radioDisabled}
                      color={radioColor}
                    />
                  </RadioGroup>
                </div>

                <div className="all-variants-section">
                  <h3>All Variants</h3>
                  
                  <div className="variant-showcase">
                    <h4>Default Color - Unchecked & Checked</h4>
                    <div className="radio-column">
                      <RadioGroup name="variant1" value="checked">
                        <Radio label="Unchecked" value="unchecked" color="default" />
                        <Radio label="Checked" value="checked" color="default" />
                      </RadioGroup>
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>Default Color - Disabled</h4>
                    <div className="radio-column">
                      <RadioGroup name="variant2" value="checked-disabled">
                        <Radio label="Unchecked Disabled" value="unchecked-disabled" color="default" disabled />
                        <Radio label="Checked Disabled" value="checked-disabled" color="default" disabled />
                      </RadioGroup>
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>Danger Color</h4>
                    <div className="radio-column">
                      <RadioGroup name="variant3" value="danger-checked">
                        <Radio label="Unchecked" value="danger-unchecked" color="danger" />
                        <Radio label="Checked" value="danger-checked" color="danger" />
                      </RadioGroup>
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>Green Color</h4>
                    <div className="radio-column">
                      <RadioGroup name="variant4" value="green-checked">
                        <Radio label="Unchecked" value="green-unchecked" color="green" />
                        <Radio label="Checked" value="green-checked" color="green" />
                      </RadioGroup>
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>With Description</h4>
                    <div className="radio-column">
                      <RadioGroup name="variant5" value="desc-checked">
                        <Radio 
                          label="Radio text" 
                          description="Radio description" 
                          value="desc-unchecked"
                          color="default" 
                        />
                        <Radio 
                          label="Radio text" 
                          description="Radio description" 
                          value="desc-checked"
                          color="default" 
                        />
                      </RadioGroup>
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>Multiple Options</h4>
                    <div className="radio-column">
                      <RadioGroup name="variant6" value="option2">
                        <Radio label="Option 1" value="option1" color="default" />
                        <Radio label="Option 2" value="option2" color="default" />
                        <Radio label="Option 3" value="option3" color="default" />
                        <Radio label="Option 4" value="option4" color="default" />
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeComponent === 'autocomplete' && (
            <div className="demo-container">
              <div className="controls-panel">
                <h2 className="panel-title">Autocomplete Controls</h2>
                
                <div className="control-group">
                  <label className="control-label">Label</label>
                  <input
                    type="text"
                    className="text-input"
                    value={autocompleteLabel}
                    onChange={(e) => setAutocompleteLabel(e.target.value)}
                  />
                </div>

                <div className="control-group">
                  <label className="control-label">Placeholder</label>
                  <input
                    type="text"
                    className="text-input"
                    value={autocompletePlaceholder}
                    onChange={(e) => setAutocompletePlaceholder(e.target.value)}
                  />
                </div>

                <div className="button-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={autocompleteIcon}
                      onChange={(e) => setAutocompleteIcon(e.target.checked)}
                    />
                    Show Icon
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={autocompleteLoading}
                      onChange={(e) => setAutocompleteLoading(e.target.checked)}
                    />
                    Loading
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={autocompleteDisabled}
                      onChange={(e) => setAutocompleteDisabled(e.target.checked)}
                    />
                    Disabled
                  </label>
                </div>
              </div>

              <div className="preview-panel">
                <h2 className="panel-title">Preview</h2>
                <div className="button-preview">
                  <Autocomplete
                    label={autocompleteLabel}
                    placeholder={autocompletePlaceholder}
                    icon={autocompleteIcon}
                    loading={autocompleteLoading}
                    disabled={autocompleteDisabled}
                    options={autocompleteOptions}
                    value={autocompleteValue}
                    onChange={setAutocompleteValue}
                    onSelect={(option) => {
                      console.log('Selected:', option);
                      setAutocompleteValue(option?.label || '');
                    }}
                  />
                </div>

                <div className="all-variants-section">
                  <h3>All Variants</h3>
                  
                  <div className="variant-showcase">
                    <h4>Default (No Icon, No Label)</h4>
                    <div className="button-row">
                      <Autocomplete
                        placeholder="Search..."
                        options={autocompleteOptions}
                      />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>With Label</h4>
                    <div className="button-row">
                      <Autocomplete
                        label="Search Language"
                        placeholder="Type to search..."
                        options={autocompleteOptions}
                      />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>With Icon</h4>
                    <div className="button-row">
                      <Autocomplete
                        label="Search Language"
                        placeholder="Search..."
                        icon={true}
                        options={autocompleteOptions}
                      />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>Loading State</h4>
                    <div className="button-row">
                      <Autocomplete
                        label="Search Language"
                        placeholder="Loading..."
                        loading={true}
                        options={autocompleteOptions}
                      />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>Disabled State</h4>
                    <div className="button-row">
                      <Autocomplete
                        label="Search Language"
                        placeholder="Disabled"
                        disabled={true}
                        options={autocompleteOptions}
                      />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>With Icon and Loading</h4>
                    <div className="button-row">
                      <Autocomplete
                        label="Search Language"
                        placeholder="Searching..."
                        icon={true}
                        loading={true}
                        options={autocompleteOptions}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeComponent === 'datepicker' && (
            <div className="demo-container">
              <div className="controls-panel">
                <h2 className="panel-title">DatePicker Controls</h2>
                
                <div className="control-group">
                  <label className="control-label">Label</label>
                  <input
                    type="text"
                    className="text-input"
                    value={dateLabel}
                    onChange={(e) => setDateLabel(e.target.value)}
                  />
                </div>

                <div className="control-group">
                  <label className="control-label">Placeholder</label>
                  <input
                    type="text"
                    className="text-input"
                    value={datePlaceholder}
                    onChange={(e) => setDatePlaceholder(e.target.value)}
                  />
                </div>

                <div className="control-group">
                  <label className="control-label">Mode</label>
                  <div className="button-group">
                    <label className="checkbox-label">
                      <input
                        type="radio"
                        checked={dateMode === 'single'}
                        onChange={() => setDateMode('single')}
                      />
                      Single Date
                    </label>
                    <label className="checkbox-label">
                      <input
                        type="radio"
                        checked={dateMode === 'range'}
                        onChange={() => setDateMode('range')}
                      />
                      Date Range
                    </label>
                  </div>
                </div>
              </div>

              <div className="preview-panel">
                <h2 className="panel-title">Preview</h2>
                <div className="button-preview">
                  <DatePicker
                    label={dateLabel}
                    placeholder={datePlaceholder}
                    mode={dateMode}
                    value={dateMode === 'single' ? dateValue : null}
                    onChange={setDateValue}
                    rangeStart={dateMode === 'range' ? rangeStart : null}
                    rangeEnd={dateMode === 'range' ? rangeEnd : null}
                    onRangeChange={(start, end) => {
                      setRangeStart(start);
                      setRangeEnd(end);
                    }}
                  />
                </div>

                <div className="all-variants-section">
                  <h3>All Variants</h3>
                  
                  <div className="variant-showcase">
                    <h4>Single Date Picker</h4>
                    <div className="button-row">
                      <DatePicker
                        label="Select a date"
                        placeholder="mm/dd/yyyy"
                        mode="single"
                      />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>With Pre-selected Date</h4>
                    <div className="button-row">
                      <DatePicker
                        label="Meeting date"
                        value={new Date(2025, 9, 10)}
                        mode="single"
                      />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>Date Range Picker</h4>
                    <div className="button-row">
                      <DatePicker
                        label="Select date range"
                        mode="range"
                        rangeStart={new Date(2024, 6, 10)}
                        rangeEnd={new Date(2025, 11, 21)}
                      />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>No Label</h4>
                    <div className="button-row">
                      <DatePicker
                        placeholder="Pick a date"
                        mode="single"
                      />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>Disabled</h4>
                    <div className="button-row">
                      <DatePicker
                        label="Select a date"
                        disabled={true}
                        mode="single"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeComponent === 'textarea' && (
            <div className="demo-container">
              <div className="controls-panel">
                <h2 className="panel-title">Component Properties</h2>
                
                <div className="control-group">
                  <label>
                    <input
                      type="checkbox"
                      checked={hasTextareaLabel}
                      onChange={(e) => setHasTextareaLabel(e.target.checked)}
                    />
                    Show Label
                  </label>
                </div>

                {hasTextareaLabel && (
                  <>
                    <div className="control-group">
                      <label>Label Text</label>
                      <input
                        type="text"
                        className="text-input"
                        value={textareaLabel}
                        onChange={(e) => setTextareaLabel(e.target.value)}
                      />
                    </div>

                    <div className="control-group">
                      <label>
                        <input
                          type="checkbox"
                          checked={hasHelperText}
                          onChange={(e) => setHasHelperText(e.target.checked)}
                        />
                        Show Helper Text
                      </label>
                    </div>

                    {hasHelperText && (
                      <div className="control-group">
                        <label>Helper Text</label>
                        <input
                          type="text"
                          className="text-input"
                          value={textareaHelperText}
                          onChange={(e) => setTextareaHelperText(e.target.value)}
                        />
                      </div>
                    )}
                  </>
                )}

                <div className="control-group">
                  <label>Placeholder</label>
                  <input
                    type="text"
                    className="text-input"
                    value={textareaPlaceholder}
                    onChange={(e) => setTextareaPlaceholder(e.target.value)}
                  />
                </div>

                <div className="control-group">
                  <label>
                    <input
                      type="checkbox"
                      checked={textareaReadonly}
                      onChange={(e) => setTextareaReadonly(e.target.checked)}
                    />
                    Read Only
                  </label>
                </div>

                <div className="control-group">
                  <label>
                    <input
                      type="checkbox"
                      checked={showTextareaCharCount}
                      onChange={(e) => setShowTextareaCharCount(e.target.checked)}
                    />
                    Show Character Count
                  </label>
                </div>

                {showTextareaCharCount && (
                  <div className="control-group">
                    <label>Max Length</label>
                    <input
                      type="number"
                      className="text-input"
                      value={textareaMaxLength}
                      onChange={(e) => setTextareaMaxLength(Number(e.target.value))}
                      min={1}
                    />
                  </div>
                )}

                <div className="control-group">
                  <label>Validation State</label>
                  <div className="button-group">
                    <button
                      className={textareaValidation === 'none' ? 'active' : ''}
                      onClick={() => setTextareaValidation('none')}
                    >
                      None
                    </button>
                    <button
                      className={textareaValidation === 'invalid' ? 'active' : ''}
                      onClick={() => setTextareaValidation('invalid')}
                    >
                      Invalid
                    </button>
                    <button
                      className={textareaValidation === 'valid' ? 'active' : ''}
                      onClick={() => setTextareaValidation('valid')}
                    >
                      Valid
                    </button>
                  </div>
                </div>

                {textareaValidation !== 'none' && (
                  <div className="control-group">
                    <label>Validation Message</label>
                    <input
                      type="text"
                      className="text-input"
                      value={textareaValidationMessage}
                      onChange={(e) => setTextareaValidationMessage(e.target.value)}
                    />
                  </div>
                )}
              </div>

              <div className="preview-panel">
                <h2 className="panel-title">Preview</h2>
                <div className="preview-content">
                  <TextArea
                    label={hasTextareaLabel ? textareaLabel : undefined}
                    helperText={hasTextareaLabel && hasHelperText ? textareaHelperText : undefined}
                    placeholder={textareaPlaceholder}
                    value={textareaValue}
                    onChange={setTextareaValue}
                    readonly={textareaReadonly}
                    showCharCount={showTextareaCharCount}
                    maxLength={textareaMaxLength}
                    validation={textareaValidation}
                    validationMessage={textareaValidation !== 'none' ? textareaValidationMessage : undefined}
                    rows={4}
                  />
                </div>

                <div className="variants-section">
                  <h3 className="section-title">All Variants</h3>

                  <div className="variant-showcase">
                    <h4>Basic Empty</h4>
                    <div className="button-row">
                      <TextArea placeholder="Input text" />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>With Label</h4>
                    <div className="button-row">
                      <TextArea
                        label="Label"
                        helperText="This is where helper text goes."
                        placeholder="Input text"
                      />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>Focused State</h4>
                    <div className="button-row">
                      <TextArea
                        label="Label"
                        placeholder="Input text"
                        value="This is some text content that shows the focused state..."
                      />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>With Character Counter</h4>
                    <div className="button-row">
                      <TextArea
                        label="Comment"
                        placeholder="Enter your comment"
                        value="This is a sample comment."
                        showCharCount={true}
                        maxLength={200}
                      />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>Invalid State</h4>
                    <div className="button-row">
                      <TextArea
                        label="Description"
                        placeholder="Input text"
                        value="Invalid input"
                        validation="invalid"
                        validationMessage="This is validation message text."
                      />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>Valid State</h4>
                    <div className="button-row">
                      <TextArea
                        label="Description"
                        placeholder="Input text"
                        value="Valid input that meets all requirements."
                        validation="valid"
                        validationMessage="Looks good!"
                      />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>Read Only</h4>
                    <div className="button-row">
                      <TextArea
                        label="Read Only Field"
                        value="This text cannot be edited."
                        readonly={true}
                      />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>Invalid with Character Count</h4>
                    <div className="button-row">
                      <TextArea
                        label="Feedback"
                        value="Short"
                        validation="invalid"
                        validationMessage="Feedback must be at least 10 characters."
                        showCharCount={true}
                        maxLength={500}
                      />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>Valid with Character Count</h4>
                    <div className="button-row">
                      <TextArea
                        label="Review"
                        value="This product exceeded my expectations in every way. Highly recommended!"
                        validation="valid"
                        validationMessage="Thank you for your review!"
                        showCharCount={true}
                        maxLength={500}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeComponent === 'header' && (
            <div className="demo-container">
              <div className="controls-panel">
                <h2 className="panel-title">Component Properties</h2>
                
                <div className="control-group">
                  <label>Role</label>
                  <div className="button-group">
                    <button
                      className={headerRole === 'guest' ? 'active' : ''}
                      onClick={() => setHeaderRole('guest')}
                    >
                      Guest
                    </button>
                    <button
                      className={headerRole === 'user' ? 'active' : ''}
                      onClick={() => setHeaderRole('user')}
                    >
                      User
                    </button>
                  </div>
                </div>

                {headerRole === 'user' && (
                  <div className="control-group">
                    <label>User Name</label>
                    <input
                      type="text"
                      className="text-input"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                )}

                <div className="control-group">
                  <p style={{ fontSize: '14px', color: '#525257', margin: '8px 0' }}>
                    Click handlers:
                  </p>
                  <ul style={{ fontSize: '14px', color: '#6c6c72', paddingLeft: '20px', margin: 0 }}>
                    <li>onMenuClick - Menu button</li>
                    <li>onSearchClick - Search button</li>
                    {headerRole === 'guest' && <li>onAccountClick - Account button</li>}
                    {headerRole === 'user' && (
                      <>
                        <li>onInboxClick - Inbox button</li>
                        <li>onAvatarClick - Avatar dropdown</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>

              <div className="preview-panel">
                <h2 className="panel-title">Preview</h2>
                <div className="preview-content">
                  <Header
                    role={headerRole}
                    userName={userName}
                    onMenuClick={() => console.log('Menu clicked')}
                    onSearchClick={() => console.log('Search clicked')}
                    onAvatarClick={() => console.log('Avatar clicked')}
                  />
                </div>

                <div className="variants-section">
                  <h3 className="section-title">All Variants</h3>

                  <div className="variant-showcase">
                    <h4>Guest Role</h4>
                    <div className="button-row">
                      <Header
                        role="guest"
                        onMenuClick={() => console.log('Menu clicked')}
                        onSearchClick={() => console.log('Search clicked')}
                      />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>User Role</h4>
                    <div className="button-row">
                      <Header
                        role="user"
                        userName="John Doe"
                        onMenuClick={() => console.log('Menu clicked')}
                        onSearchClick={() => console.log('Search clicked')}
                        onAvatarClick={() => console.log('Avatar clicked')}
                      />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>User with Avatar Image</h4>
                    <div className="button-row">
                      <Header
                        role="user"
                        userName="Jane Smith"
                        userAvatar="https://i.pravatar.cc/150?img=5"
                        onMenuClick={() => console.log('Menu clicked')}
                        onSearchClick={() => console.log('Search clicked')}
                        onAvatarClick={() => console.log('Avatar clicked')}
                      />
                    </div>
                  </div>

                  <div className="variant-showcase">
                    <h4>Interactive Example</h4>
                    <div className="button-row">
                      <Header
                        role={headerRole}
                        userName={userName}
                        onMenuClick={() => alert('Menu button clicked!')}
                        onSearchClick={() => alert('Search button clicked!')}
                        onAvatarClick={() => alert('Avatar dropdown clicked!')}
                      />
                    </div>
                    <p style={{ fontSize: '14px', color: '#525257', marginTop: '8px' }}>
                      Click any icon to see alert
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeComponent === 'sidebar' && (
            <div className="demo-container">
              <div className="controls-panel">
                <h2 className="panel-title">Sidebar Component</h2>
                <p style={{ fontSize: '14px', color: '#525257', marginBottom: '16px' }}>
                  A flexible navigation sidebar with desktop/mobile variants and role-based content.
                </p>
                
                <div className="preview-panel">
                  <div className="variant-showcase">
                    <h4>Desktop Sidebar - Guest</h4>
                    <div style={{ height: '600px', border: '1px solid #eaeaea', borderRadius: '8px', overflow: 'hidden' }}>
                      <Sidebar
                        role="guest"
                        variant="desktop"
                        onMenuItemClick={(itemId) => console.log('Clicked:', itemId)}
                      />
                    </div>
                  </div>

                  <div className="variant-showcase" style={{ marginTop: '32px' }}>
                    <h4>Desktop Sidebar - User</h4>
                    <div style={{ height: '600px', border: '1px solid #eaeaea', borderRadius: '8px', overflow: 'hidden' }}>
                      <Sidebar
                        role="user"
                        variant="desktop"
                        onMenuItemClick={(itemId) => console.log('Clicked:', itemId)}
                      />
                    </div>
                  </div>

                  <div className="variant-showcase" style={{ marginTop: '32px' }}>
                    <h4>Mobile Sidebar</h4>
                    <div style={{ height: '600px', maxWidth: '400px', border: '1px solid #eaeaea', borderRadius: '8px', overflow: 'hidden' }}>
                      <Sidebar
                        role="user"
                        variant="mobile"
                        isOpen={true}
                        onMenuItemClick={(itemId) => console.log('Clicked:', itemId)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeComponent === 'template-default' && (
            <div className="template-container">
              <div className="template-header-section">
                <h2 className="panel-title">Default Template</h2>
                <p style={{ fontSize: '14px', color: '#525257', marginBottom: '16px' }}>
                  A complete page template with Header and collapsible Sidebar navigation.
                </p>
                <Button
                  label="View Template"
                  variant="primary"
                  size="medium"
                  onClick={() => setIsTemplateFullScreen(true)}
                />
              </div>
              
              <div className="template-preview-container">
                <div className="template-preview-wrapper">
                  <div className="template-preview-frame">
                    <Header
                      role="user"
                      userName={templateUserName}
                      onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
                      onSearchClick={() => console.log('Search clicked')}
                      onAvatarClick={() => console.log('Avatar clicked')}
                    />
                    
                    <div className="template-body">
                      <Sidebar
                        role="user"
                        variant="desktop"
                        isOpen={isSidebarOpen}
                        onMenuItemClick={(itemId) => console.log('Clicked:', itemId)}
                      />
                      
                      <div className="template-main-content">
                        <div className="content-placeholder">
                          <h1>Main Content Area</h1>
                          <p>This is the main content area. Click the hamburger menu in the header to toggle the sidebar.</p>
                          <p style={{ marginTop: '16px' }}>Sidebar is currently: <strong>{isSidebarOpen ? 'Open' : 'Closed'}</strong></p>
                        </div>
                      </div>
                    </div>

                    <RadioPlayer
                      isPlaying={isRadioPlaying}
                      showClosedCaptions={showClosedCaptions}
                      onPlayPause={() => setIsRadioPlaying(!isRadioPlaying)}
                      onClosedCaptionsToggle={() => setShowClosedCaptions(!showClosedCaptions)}
                      onRewind={() => console.log('Rewind')}
                      onForward={() => console.log('Forward')}
                      onSave={() => console.log('Save')}
                      onShare={() => console.log('Share')}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {isTemplateFullScreen && (
            <div className="template-fullscreen-overlay">
              <div className="template-fullscreen-content">
                <Header
                  role="user"
                  userName={templateUserName}
                  onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  onSearchClick={() => console.log('Search clicked')}
                  onAvatarClick={() => console.log('Avatar clicked')}
                />
                
                <div className="template-body">
                  <Sidebar
                    role="user"
                    variant="desktop"
                    isOpen={isSidebarOpen}
                    onMenuItemClick={(itemId) => console.log('Clicked:', itemId)}
                  />
                  
                  <div className="template-main-content">
                    <div className="content-placeholder">
                      <h1>Main Content Area</h1>
                      <p>This is the main content area. Click the hamburger menu in the header to toggle the sidebar.</p>
                      <p style={{ marginTop: '16px' }}>Sidebar is currently: <strong>{isSidebarOpen ? 'Open' : 'Closed'}</strong></p>
                      <div style={{ marginTop: '32px' }}>
                        <h2 style={{ fontSize: '24px', marginBottom: '12px' }}>Sample Content Section</h2>
                        <p>This is a full-screen preview of the template. You can interact with all components.</p>
                        <p style={{ marginTop: '12px' }}>The radio player is fixed at the bottom of the screen.</p>
                        <p style={{ marginTop: '12px' }}>Click the CC button to toggle closed captions.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <RadioPlayer
                  isPlaying={isRadioPlaying}
                  showClosedCaptions={showClosedCaptions}
                  onPlayPause={() => setIsRadioPlaying(!isRadioPlaying)}
                  onClosedCaptionsToggle={() => setShowClosedCaptions(!showClosedCaptions)}
                  onRewind={() => console.log('Rewind')}
                  onForward={() => console.log('Forward')}
                  onSave={() => console.log('Save')}
                  onShare={() => console.log('Share')}
                />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
