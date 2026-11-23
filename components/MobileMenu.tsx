"use client";

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Icon from './Icon';
import { DROPDOWN_NAV, DropdownKey } from './Navbar';
import { DEFAULT_LAUNCHES, sortLaunches, formatTimeLocal } from './UpcomingLaunches';

export default function MobileMenu({ isCareer }: { isCareer?: boolean }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({});
  const [launches, setLaunches] = useState<{ title: string; image: string; timeString: string }[]>([]);
  const [isLaunchesExpanded, setIsLaunchesExpanded] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) return;

    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, mounted]);

  useEffect(() => {
    if (!isOpen) return;

    async function loadLaunches() {
      let data = DEFAULT_LAUNCHES;
      const url = process.env.NEXT_PUBLIC_LAUNCHES_JSON_URL;
      
      if (url) {
        try {
          const fetchUrl = `${url}${url.includes('?') ? '&' : '?'}t=${Date.now()}`;
          const res = await fetch(fetchUrl, { cache: 'no-store' });
          if (res.ok) {
            const json = await res.json();
            if (Array.isArray(json) && json.length > 0) {
              data = json;
            }
          }
        } catch (error) {
          console.error("Failed to load launches JSON in MobileMenu:", error);
        }
      }

      const now = Date.now();
      const upcoming = data.filter(l => {
        const targetTime = l.targetUtc ? new Date(l.targetUtc).getTime() : new Date(l.date).getTime();
        return isNaN(targetTime) || targetTime >= now;
      });
      const past = data.filter(l => {
        const targetTime = l.targetUtc ? new Date(l.targetUtc).getTime() : new Date(l.date).getTime();
        return !isNaN(targetTime) && targetTime < now;
      });

      const sortedUpcoming = sortLaunches(upcoming, true);
      const sortedPast = sortLaunches(past, false);
      const sortedData = [...sortedUpcoming, ...sortedPast];

      const topTwo = sortedData.slice(0, 2).map(l => ({
        title: l.project,
        image: l.image || 'https://res.cloudinary.com/dq9x4mk1y/image/upload/w_400,h_400,c_fill/v1782859776/WhatsApp_Image_2026-06-30_at_19.48.56_g8owa7.jpg',
        timeString: formatTimeLocal(l.targetUtc)
      }));
      setLaunches(topTwo);
    }

    loadLaunches();
  }, [isOpen]);

  const toggleMenu = () => {
    if (isOpen) dialogRef.current?.close();
    setIsOpen(!isOpen);
    // Reset accordion states when opening/closing menu
    setOpenAccordions({});
    setIsLaunchesExpanded(false);
  };

  const toggleAccordion = (key: string) => {
    setOpenAccordions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleLaunches = () => {
    setIsLaunchesExpanded(!isLaunchesExpanded);
  };

  const overlayContent = (
    <dialog ref={dialogRef} id="mobile-menu" className="mobile-menu-overlay" aria-label="Navigation"
      onCancel={(event) => { event.preventDefault(); toggleMenu(); }}>
      <div className="mobile-menu-header">
        <Link href="/" className="logo" onClick={toggleMenu}>
          <img
            src="https://res.cloudinary.com/kpa1wv3h/image/upload/f_auto,q_auto:best,dpr_2.0/v1783382894/spaceborn_assets/spaceborn-transparent-logo.png"
            srcSet="https://res.cloudinary.com/kpa1wv3h/image/upload/f_auto,q_auto:best/v1783382894/spaceborn_assets/spaceborn-transparent-logo.png 1x, https://res.cloudinary.com/kpa1wv3h/image/upload/f_auto,q_auto:best,dpr_2.0/v1783382894/spaceborn_assets/spaceborn-transparent-logo.png 2x"
            alt="Spaceborn"
            width={142}
            height={18}
          />
        </Link>
        <button className="close-menu" onClick={toggleMenu} aria-label="Close menu"><Icon name="xmark" /></button>
      </div>
      <div className="mobile-menu-content">
        <ul className="mobile-nav-links">
          {isCareer ? (
            <>
              <li><Link href="/" onClick={toggleMenu}>HOME</Link></li>
              <li><Link href="/#simulation" onClick={toggleMenu}>SIMULATION</Link></li>
              <li><Link href="/#platforms" onClick={toggleMenu}>PLATFORMS</Link></li>
              <li><Link href="/company/careers" onClick={toggleMenu}>CAREER</Link></li>
            </>
          ) : (
            <>
              {/* Accordion items for submenus */}
              {(Object.keys(DROPDOWN_NAV) as DropdownKey[]).map((key) => {
                const nav = DROPDOWN_NAV[key];
                const isExpanded = !!openAccordions[key];
                return (
                  <li key={key} className="mobile-accordion-item">
                    <button 
                      className={`mobile-accordion-trigger ${isExpanded ? 'active' : ''}`}
                      onClick={() => toggleAccordion(key)}
                      aria-expanded={isExpanded} aria-controls={`mobile-nav-${key}`}
                    >
                      {nav.label}
                      <Icon name="chevron-down" className={`chevron ${isExpanded ? 'open' : ''}`} />
                    </button>
                    
                    <div id={`mobile-nav-${key}`} inert={!isExpanded} className={`mobile-submenu-wrapper ${isExpanded ? 'open' : ''}`}>
                      <ul className="mobile-submenu-list">
                        {nav.items.map((item) => (
                          <li key={item.label}>
                            {item.href.startsWith('/') ? (
                              <Link href={item.href} onClick={toggleMenu}>
                                {item.label}
                              </Link>
                            ) : (
                              <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
                                {item.label}
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              })}

              {/* Independent Links */}
              <li>
                <a href="https://spaceborn-web.vercel.app/" onClick={toggleMenu}>
                  DERYK
                </a>
              </li>
              <li>
                <a href="https://khonsu.in" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
                  KHONSU
                </a>
              </li>

              {/* Upcoming Launches Accordion */}
              <li className="mobile-accordion-item">
                <button 
                  className={`mobile-accordion-trigger ${isLaunchesExpanded ? 'active' : ''}`}
                  onClick={toggleLaunches}
                  aria-expanded={isLaunchesExpanded} aria-controls="mobile-releases"
                >
                  RELEASES
                  <Icon name="chevron-down" className={`chevron ${isLaunchesExpanded ? 'open' : ''}`} />
                </button>
                
                <div id="mobile-releases" inert={!isLaunchesExpanded} className={`mobile-submenu-launches ${isLaunchesExpanded ? 'open' : ''}`}>
                  <div className="mobile-launches-list">
                    {launches.map((launch, index) => (
                      <div className="mobile-launch-item" key={index}>
                        <div className="mobile-launch-image">
                          <img src={launch.image} alt={launch.title} />
                        </div>
                        <div className="mobile-launch-info">
                          <h4 className="mobile-launch-title">{launch.title}</h4>
                          <p className="mobile-launch-time">{launch.timeString}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mobile-launches-footer">
                    <Link href="/launches" className="mobile-all-launches-link" onClick={toggleMenu}>
                      <Icon name="table-cells-large" className="grid-icon" />
                      ALL RELEASES
                    </Link>
                  </div>
                </div>
              </li>
            </>
          )}
        </ul>
      </div>
    </dialog>
  );

  return (
    <>
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu"
        aria-expanded={isOpen} aria-controls={isOpen ? "mobile-menu" : undefined}>
        <Icon name="bars" />
      </button>
      {isOpen && mounted && createPortal(overlayContent, document.body)}
    </>
  );
}
