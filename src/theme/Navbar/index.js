import React, { useState, useRef, useEffect } from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useHistory } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import NavbarItem from '@theme/NavbarItem';
import styles from './styles.module.css';

function CustomNavbar() {
  const { navbar } = useThemeConfig();
  const { logo, title, items } = navbar;
  const logoSrc = useBaseUrl(logo.src);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileOpen, setMobileOpen] = useState(false);
  const navbarRef = useRef(null);
  const dropdownRef = useRef(null);
  const history = useHistory();
  let timeoutId = null;

  const dropdownItems = [
    { label: 'IanaIO', href: 'https://www.iana.io' },
    { label: 'Security', href: 'https://security.iana.io' },
  ];

  // Ensure navbar is ready for Docusaurus measurements
  useEffect(() => {
    if (navbarRef.current) {
      navbarRef.current.getBoundingClientRect(); // Force layout recalculation
    }
  }, []);

  // Force re-render after hydration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDropdownOpen((prev) => prev); // Trigger re-render
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Handle mouse enter/leave with timeout
  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // Delay to allow moving to dropdown
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

  // Handle tap for mobile
  const handleMobileToggle = () => {
    setMobileOpen((prev) => !prev);
    setIsDropdownOpen((prev) => !prev);
  };

  // Handle logo click for client-side routing
  const handleLogoClick = () => {
    if (history.location.pathname !== '/') {
      history.push('/');
    }
  };

  return (
    <nav className="navbar navbar--fixed-top" ref={navbarRef}>
      <div className="navbar__inner">
        <div
          className="navbar__brand"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleMobileToggle}
        >
          <div
            className="navbar__logo"
            onClick={handleLogoClick}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={logoSrc}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
            />
          </div>
          {title && (
            <div
              className="navbar__title text--truncate"
              onClick={handleLogoClick}
              style={{ cursor: 'pointer' }}
            >
              {title}
            </div>
          )}
          {(isDropdownOpen || isMobileOpen) && (
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
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setMobileOpen(false);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="navbar__items">
          {items
            .filter((item) => item.position !== 'right')
            .map((item, index) => (
              <NavbarItem {...item} key={index} />
            ))}
        </div>
        <div className="navbar__items navbar__items--right">
          {items
            .filter((item) => item.position === 'right')
            .map((item, index) => (
              <NavbarItem {...item} key={index} />
            ))}
        </div>
      </div>
    </nav>
  );
}

export default CustomNavbar;
