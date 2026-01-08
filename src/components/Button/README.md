# Button Component

Button component from the ReachMD Design System v1.0, extracted from Figma.

## Features

- **3 Sizes**: Small, Medium, Large
- **3 Variants**: Primary, Secondary, Tertiary
- **4 Colors**: Primary, Neutral, Guava, Error
- **States**: Rest, Hover, Pressed, Focus, Disabled, Loading
- **Icons**: Support for icons before and after the label
- **Accessibility**: Proper ARIA attributes and keyboard navigation

## Usage

```tsx
import { Button } from './components/Button';

// Basic usage
<Button label="Click me" />

// With variant and color
<Button label="Submit" variant="primary" color="primary" />

// Different sizes
<Button label="Small" size="small" />
<Button label="Medium" size="medium" />
<Button label="Large" size="large" />

// With states
<Button label="Disabled" disabled />
<Button label="Loading" loading />

// With icons
<Button 
  label="Next" 
  iconAfter={<ArrowIcon />}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | Required | Button text |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `variant` | `'primary' \| 'secondary' \| 'tertiary'` | `'primary'` | Visual style |
| `color` | `'primary' \| 'neutral' \| 'guava' \| 'error'` | `'primary'` | Color scheme |
| `disabled` | `boolean` | `false` | Disabled state |
| `loading` | `boolean` | `false` | Loading state |
| `iconBefore` | `ReactNode` | - | Icon before label |
| `iconAfter` | `ReactNode` | - | Icon after label |
| `onClick` | `() => void` | - | Click handler |
| `className` | `string` | `''` | Additional CSS classes |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |

## Design Tokens

The button uses design tokens from `src/tokens/index.ts`:

- Colors for all variants and states
- Typography (Inter font family)
- Spacing and padding
- Border radius (pill shape)

## Figma Reference

Source: [Button Component in Figma](https://www.figma.com/design/MNAYVbOITb0jSGEqNvgdtq/Design-System-ReachMD-v1.0?node-id=418-49456)
