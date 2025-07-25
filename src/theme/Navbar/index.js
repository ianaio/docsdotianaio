import React, { useState, useRef, useEffect } from 'react';
import OriginalNavbar from '@theme-original/Navbar';
import { useThemeConfig } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function CustomNavbar(props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const brandRef = useRef(null);
  const { navbar } = useThemeConfig();
  const { logo, title } = navbar;
  const logoSrc = useBaseUrl(logo.src);

  const dropdownItems = [
    { label: 'IanaIO', href: 'https://www.iana.io' },
    { label: 'Security', href: 'https://security.iana.io' },
  ];

  // Ensure DOM is ready for measurements
  useEffect(() => {
    if (brandRef.current) {
      brandRef.current.getBoundingClientRect(); // Force layout recalculation
    }
  }, []);

  return (
    <>
      <OriginalNavbar {...props} />
      <div
        className={styles.navbar__brand_wrapper}
        ref={brandRef}
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
    </>
  );
}

export default CustomNavbar;
