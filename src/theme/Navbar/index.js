// src/theme/Navbar/index.js
import React, { useState, useRef } from 'react';
import Navbar from '@theme-original/Navbar';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './styles.module.css';

export default function NavbarWrapper(props) {
  const { colorMode, setColorMode } = useColorMode();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  let timeoutId = null;

  // Dropdown items
  const dropdownItems = [
    { label: 'IanaIO', href: 'https://www.iana.io' },
    { label: 'Security', href: 'https://security.iana.io' },
  ];

  // Handle mouse enter/leave for dropdown
  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };
  const handleDropdownMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  };
  const handleDropdownMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  // Toggle theme
  const toggleTheme = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="navbar-wrapper">
      <Navbar {...props} />
      <div className="navbar__items navbar__items--right">
        <div
          className="navbar__item"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="navbar__link">Explore</span>
          {isDropdownOpen && (
            <div
              className={styles.dropdown}
              ref={dropdownRef}
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              {dropdownItems.map((item, index) => (
                <a
                  key={index}
                  className={styles.dropdownItem}
                  href={item.href}
                  onClick={() => setIsDropdownOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          title={`Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`}
        >
          {colorMode === 'dark' ? '🌞' : '🌙'}
        </button>
      </div>
    </div>
  );
}
