import React, { useState, useRef, useEffect } from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import NavbarItem from '@theme/NavbarItem';
import styles from './styles.module.css';

function CustomNavbar() {
  const { navbar } = useThemeConfig();
  const { logo, title, items } = navbar;
  const logoSrc = useBaseUrl(logo.src);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navbarRef = useRef(null);

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

  return (
    <nav className="navbar navbar--fixed-top" ref={navbarRef}>
      <div className="navbar__inner">
        <div
          className="navbar__brand"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <Link className="navbar__logo" href={logo.href}>
            <img
              src={logoSrc}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
            />
          </Link>
          {title && (
            <Link className="navbar__title text--truncate" href={logo.href}>
              {title}
            </Link>
          )}
          {isDropdownOpen && (
            <div className={styles.dropdown}>
              {dropdownItems.map((item, index) => (
                <Link
                  key={index}
                  className={styles.dropdownItem}
                  href={item.href}
                >
                  {item.label}
                </Link>
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
