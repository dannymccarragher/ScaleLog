import logo from '../assets/weight.svg';
import React from 'react';
export const Header = ({ children }) => {
  return (
    <div style={{
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  backgroundColor: '#ffffff',
  padding: '10px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  zIndex: 1000,
  fontFamily: 'sans-serif'
}}>
  {/* Wrap logo and title */}
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    <img src={logo} alt="Weight Icon" style={{ width: '40px', height: '40px' }} />
    <h2 style={{ margin: 0 }}>ScaleLog</h2>
  </div>

  {/* Centered nav buttons */}
  <div style={{
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    gap: '20px'
  }}>
    {React.Children.map(children, child =>
      React.cloneElement(child, {
        style: {
          padding: '8px 16px',
          border: 'none',
          backgroundColor: 'transparent',
          fontSize: '16px',
          fontWeight: '500',
          color: '#333',
          cursor: 'pointer',
          borderRadius: '4px',
          transition: 'background-color 0.2s ease',
          ...child.props.style,
        },
        onMouseEnter: e => e.currentTarget.style.backgroundColor = '#a4dae4',
        onMouseLeave: e => e.currentTarget.style.backgroundColor = 'transparent'
      })
    )}
  </div>
</div>

  );
};
