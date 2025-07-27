// src/theme/Navbar/index.js
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

function NavbarWrapper() {
  console.log('NavbarWrapper component rendered');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    console.log('NavbarWrapper mounted', Date.now());
    return () => console.log('NavbarWrapper unmounted', Date.now());
  }, []);

  const handlePointerEnter = (e) => {
    console.log(`Pointer enter on ${e.target.className}`);
    setIsDropdownVisible(true);
    console.log('Dropdown state changed: true');
  };

  const handlePointerLeave = (e) => {
    console.log(`Pointer leave on ${e.target.className}`);
    setIsDropdownVisible(false);
    console.log('Dropdown state changed: false');
  };

  return (
    <div
      className={styles.navbarBrandWrapper}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <a
        href="/getting-started"
        className="navbar__brand"
        onClick={() => console.log('Logo clicked')}
        data-debug="logo-link"
      >
        <img
          src="/img/logo.svg"
          alt="IanaIO Logo"
          className={styles.logoImage}
          onClick={() => console.log('Logo image clicked')}
        />
        <b className="navbar__title">IanaIO</b>
      </a>
      <div
        className={`${styles.dropdown} ${
          isDropdownVisible ? styles.dropdownVisible : ''
        }`}
      >
        <a href="https://www.iana.io" onClick={() => console.log('Clicked IanaIO')}>
          IanaIO
        </a>
        <a href="https://security.iana.io" onClick={() => console.log('Clicked Security')}>
          Security
        </a>
      </div>
    </div>
  );
}

export default React.memo(NavbarWrapper);
