import React from 'react';
import { Button } from './Button';

/**
 * Button component examples from ReachMD Design System
 */
export default function ButtonExamples() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Inter, sans-serif' }}>
      <h1>Button Component - ReachMD Design System</h1>
      
      <section style={{ marginTop: '40px' }}>
        <h2>Primary Buttons</h2>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '16px' }}>
          <Button label="Primary" variant="primary" color="primary" />
          <Button label="Guava" variant="primary" color="guava" />
          <Button label="Error" variant="primary" color="error" />
          <Button label="Neutral" variant="primary" color="neutral" />
        </div>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2>Secondary Buttons</h2>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '16px' }}>
          <Button label="Primary" variant="secondary" color="primary" />
          <Button label="Guava" variant="secondary" color="guava" />
          <Button label="Error" variant="secondary" color="error" />
          <Button label="Neutral" variant="secondary" color="neutral" />
        </div>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2>Tertiary Buttons</h2>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '16px' }}>
          <Button label="Primary" variant="tertiary" color="primary" />
          <Button label="Guava" variant="tertiary" color="guava" />
          <Button label="Error" variant="tertiary" color="error" />
          <Button label="Neutral" variant="tertiary" color="neutral" />
        </div>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2>Sizes</h2>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginTop: '16px' }}>
          <Button label="Large Button" size="large" variant="primary" color="primary" />
          <Button label="Medium Button" size="medium" variant="primary" color="primary" />
          <Button label="Small Button" size="small" variant="primary" color="primary" />
        </div>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2>States</h2>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '16px' }}>
          <Button label="Normal" variant="primary" color="primary" />
          <Button label="Disabled" variant="primary" color="primary" disabled />
          <Button label="Loading" variant="primary" color="primary" loading />
        </div>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2>With Icons</h2>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '16px' }}>
          <Button 
            label="Icon Before" 
            variant="primary" 
            color="primary"
            iconBefore={<span>★</span>}
          />
          <Button 
            label="Icon After" 
            variant="primary" 
            color="primary"
            iconAfter={<span>→</span>}
          />
          <Button 
            label="Both Icons" 
            variant="primary" 
            color="primary"
            iconBefore={<span>★</span>}
            iconAfter={<span>→</span>}
          />
        </div>
      </section>
    </div>
  );
}
