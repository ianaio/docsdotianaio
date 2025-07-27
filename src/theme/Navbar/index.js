// src/theme/Navbar/index.js
import React from 'react';
import Navbar from '@theme-original/Navbar';

export default function NavbarWrapper(props) {
  console.log('NavbarWrapper component rendered'); // Debug: Confirm component loads
  return <Navbar {...props} />;
}
