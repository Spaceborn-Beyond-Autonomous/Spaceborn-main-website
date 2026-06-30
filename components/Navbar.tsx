'use client';

import { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

type DropdownKey = 'platforms' | 'simulation' | 'systems' | 'company';

type NavItem = {
  label: string;
  href: string;
};

const DROPDOWN_NAV: Record<DropdownKey, { label: string; items: NavItem[] }> = {
  platforms: {
    label: 'PLATFORMS',
    items: [
      { label: 'ANSA', href: '#' },
      { label: 'Certainty', href: '/platforms/certainty' },
      { label: 'Mission Studio', href: '#' },
      { label: 'Fleet Manager', href: '/platforms/fleet-manager' },
      { label: 'Downloads (Coming Soon...)', href: '#' },
    ],
  },
  simulation: {
    label: 'SIMULATION',
    items: [
      { label: 'Reality Engine', href: '#' },
      { label: 'Digital Twins', href: '#' },
      { label: 'LiDAR Simulator', href: '/simulation/lidar-simulator' },
      { label: 'Swarm Simulator', href: '/simulation/swarm-simulator' },
      { label: 'GPS Denied Navigation', href: '#' },
      { label: 'Telemetry', href: '#' },
    ],
  },
  systems: {
    label: 'SYSTEMS',
    items: [
      { label: 'Flight Controllers', href: '#' },
      { label: 'ESC Systems', href: '/systems/esc-systems' },
      { label: 'Sensor Modules', href: '#' },
      { label: 'Edge Compute', href: '#' },
      { label: 'Embedded SDK', href: '/systems/embedded-sdk' },
    ],
  },
  company: {
    label: 'COMPANY',
    items: [
      { label: 'About', href: '/company/about' },
      { label: 'Leadership', href: '/company/leadership' },
      { label: 'Careers', href: '/company/careers' },
      { label: 'Newsroom', href: '/company/newsroom' },
      { label: 'Partners', href: '/company/partners' },
      { label: 'Investors', href: '/company/investors' },
      { label: 'Aerospace', href: '/industries/aerospace' },
      { label: 'Energy & Utilities', href: '/industries/energy-utilities' },
      { label: 'Enterprise', href: '/industries/enterprise' },
      { label: 'Government & Public Safety', href: '/industries/government-public-safety' },
      { label: 'Contact', href: '/company/contact' },
    ],
  },
};

const CLOSE_DELAY_MS = 150;

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const openPanel = useCallback(
    (key: DropdownKey) => {
      clearCloseTimer();
      setOpenDropdown(key);
    },
    [clearCloseTimer]
  );

  const scheduleClose = useCallback(() => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, CLOSE_DELAY_MS);
  }, [clearCloseTimer]);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <Link href="/" className="logo" aria-label="Spaceborn home">
          <img
            src="https://res.cloudinary.com/dq9x4mk1y/image/upload/v1782734333/spaceborn_assets/spaceborn-transparent-logo.png"
            alt="Spaceborn Logo"
          />
        </Link>

        <ul className="nav-links desktop-only">
          {(Object.keys(DROPDOWN_NAV) as DropdownKey[]).map((key) => {
            const isOpen = openDropdown === key;

            return (
              <li
                key={key}
                className={`nav-dropdown-trigger${isOpen ? ' is-active' : ''}`}
                onMouseEnter={() => openPanel(key)}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  className="nav-dropdown-btn"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                >
                  {DROPDOWN_NAV[key].label}
                </button>

                <div
                  className={`nav-dropdown-panel${isOpen ? ' is-open' : ''}`}
                  onMouseEnter={clearCloseTimer}
                  aria-hidden={!isOpen}
                >
                  <div className="nav-dropdown-inner">
                    <ul className="nav-dropdown-list">
                      {DROPDOWN_NAV[key].items.map((item, index) => (
                        <li
                          key={item.label}
                          className="nav-dropdown-item"
                          style={{
                            transitionDelay: isOpen ? `${index * 30}ms` : '0ms',
                          }}
                        >
                          {item.href.startsWith('/') ? (
                            <Link href={item.href}>{item.label}</Link>
                          ) : (
                            <a href={item.href}>{item.label}</a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
          <li>
            <Link href="/#thoth">THOTH</Link>
          </li>
          <li>
            <a href="https://khonsu.in" target="_blank" rel="noopener noreferrer">
              KHONSU
            </a>
          </li>
        </ul>

        <Link href="/#releases" className="btn font-mono desktop-only">
          UPCOMING RELEASES →
        </Link>
        <MobileMenu />
      </nav>
    </header>
  );
}
