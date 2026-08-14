'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';

export type LaunchData = {
  project: string;
  classification: string;
  date: string;
  targetUtc?: string;
  image?: string;
  video?: string;
};

export const DEFAULT_LAUNCHES: LaunchData[] = [
  { project: 'LiDAR Simulator (Public Level)', classification: 'PUBLIC RELEASE', date: 'JULY 1, 2026', targetUtc: '2026-07-01T23:59:59Z', image: 'https://res.cloudinary.com/dq9x4mk1y/image/upload/w_2000,h_1200,c_fill/v1782859776/WhatsApp_Image_2026-06-30_at_19.48.56_g8owa7.jpg' },
  { project: 'Digital Twins', classification: 'PLATFORM RELEASE', date: 'JULY 5, 2026', targetUtc: '2026-07-05T12:00:00Z', image: 'https://res.cloudinary.com/dq9x4mk1y/image/upload/w_2000,h_1200,c_fill/v1782859776/WhatsApp_Image_2026-06-30_at_19.48.56_g8owa7.jpg' },
  { project: 'Gazebo Code', classification: 'SIMULATION UPDATE', date: 'JULY 6, 2026' },
  { project: 'AI/ML in Certanity', classification: 'POC', date: 'JULY 7, 2026' },
  { project: 'Kernel', classification: 'POC', date: 'JULY 7, 2026' },
  { project: 'Certanity Integration', classification: 'PLATFORM UPDATE', date: 'JULY 7, 2026' },
  { project: 'GPS Denied Navigation', classification: 'SYSTEM UPDATE', date: 'JULY 10, 2026' },
  { project: 'F7 & ESC 50A', classification: 'HARDWARE RELEASE', date: 'JULY 15, 2026' },
  { project: 'LLM Mission Parsing AI Copilot', classification: 'POC', date: 'JULY 17, 2026' },
  { project: 'LiDAR Simulator', classification: 'SYSTEM UPDATE', date: 'JULY 20, 2026' },
  { project: 'Telemetry', classification: 'PLATFORM RELEASE', date: 'JULY 25, 2026' },
  { project: 'GUI', classification: 'POC', date: 'JULY 26, 2026' },
  { project: 'DERYK', classification: 'PLATFORM RELEASE', date: 'JULY 30, 2026' },
  { project: 'Mission More States', classification: 'POC', date: 'AUGUST 2, 2026', targetUtc: '2026-08-02T00:00:00Z' },
  { project: 'GPS Denied Phase 1', classification: 'SYSTEM UPDATE', date: 'AUGUST 3, 2026', targetUtc: '2026-08-03T00:00:00Z' },
  { project: 'LiDAR V2', classification: 'PLATFORM UPDATE', date: 'AUGUST 4, 2026', targetUtc: '2026-08-04T00:00:00Z' },
  { project: 'Environment & Weather Simulator', classification: 'PLATFORM RELEASE', date: 'AUGUST 5, 2026', targetUtc: '2026-08-05T00:00:00Z' },
  { project: 'Zero Sensor', classification: 'SIMULATION UPDATE', date: 'AUGUST 7, 2026', targetUtc: '2026-08-07T00:00:00Z' },
  { project: 'Prototyping F7 Layer 4 Lite Version', classification: 'HARDWARE RELEASE', date: 'AUGUST 8, 2026', targetUtc: '2026-08-08T00:00:00Z' },
  { project: 'Manufacturing & Industry Simulator', classification: 'PLATFORM RELEASE', date: 'AUGUST 9, 2026', targetUtc: '2026-08-09T00:00:00Z' },
  { project: 'Point Cloud', classification: 'SYSTEM UPDATE', date: 'AUGUST 11, 2026', targetUtc: '2026-08-11T00:00:00Z' },
  { project: 'HAL Simulator', classification: 'SIMULATION UPDATE', date: 'AUGUST 12, 2026', targetUtc: '2026-08-12T00:00:00Z' },
  { project: 'World Model (DERYK 2.0)', classification: 'AI UPDATE', date: 'AUGUST 14, 2026', targetUtc: '2026-08-14T00:00:00Z' },
  { project: 'Multimodal Fusion', classification: 'AI UPDATE', date: 'AUGUST 15, 2026', targetUtc: '2026-08-15T00:00:00Z' },
  { project: 'GPS Denied Phase 2', classification: 'SYSTEM UPDATE', date: 'AUGUST 16, 2026', targetUtc: '2026-08-16T00:00:00Z' },
  { project: 'Aggressive & Predictive Behaviour (DERYK 2.0)', classification: 'AI UPDATE', date: 'AUGUST 18, 2026', targetUtc: '2026-08-18T00:00:00Z' },
  { project: 'DERYK Integration with DevOps & Sim', classification: 'PLATFORM UPDATE', date: 'AUGUST 25, 2026', targetUtc: '2026-08-25T00:00:00Z' },
  { project: 'ANSA V1', classification: 'PLATFORM RELEASE', date: 'AUGUST 26, 2026', targetUtc: '2026-08-26T00:00:00Z' },
  { project: 'Safety & Fault Detection', classification: 'POC', date: 'AUGUST 26, 2026', targetUtc: '2026-08-26T00:00:00Z' },
  { project: 'H7 Flight Controller', classification: 'HARDWARE RELEASE', date: 'AUGUST 29, 2026', targetUtc: '2026-08-29T00:00:00Z' },
  { project: 'GPS Denied', classification: 'PLATFORM UPDATE', date: 'AUGUST 30, 2026', targetUtc: '2026-08-30T00:00:00Z' },
  { project: 'ESC Prototyping', classification: 'HARDWARE RELEASE', date: 'AUGUST 30, 2026', targetUtc: '2026-08-30T00:00:00Z' },
  { project: 'S09 HAL Portability Emulator', classification: 'PLATFORM RELEASE', date: 'AUGUST 31, 2026', targetUtc: '2026-08-31T00:00:00Z' },
  { project: 'Swarm / Fleet', classification: 'COMING SOON', date: 'COMING SOON' },
];

export function sortLaunches(arr: LaunchData[], ascending = true) {
  return [...arr].sort((a, b) => {
    const tA = new Date(a.targetUtc || a.date).getTime();
    const tB = new Date(b.targetUtc || b.date).getTime();
    if (isNaN(tA) && isNaN(tB)) return 0;
    if (isNaN(tA)) return 1;
    if (isNaN(tB)) return -1;
    return ascending ? tA - tB : tB - tA;
  });
}

export function formatTimeLocal(utcIso?: string) {
  if (!utcIso) return 'TIME TBD';
  try {
    const date = new Date(utcIso);
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    const datePart = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const timePart = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    
    let shortTz = date.toLocaleTimeString('en-US', { timeZoneName: 'short' }).split(' ').pop() || '';
    
    // Chrome often defaults Indian time to GMT+5:30 instead of IST. Force IST for India.
    if (tz === 'Asia/Kolkata' || tz === 'Asia/Calcutta') {
      shortTz = 'IST';
    }
    
    return `${datePart} at ${timePart} ${shortTz}`;
  } catch (e) {
    return 'TIME TBD';
  }
}

export default function UpcomingLaunches() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setIsOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimerRef.current = setTimeout(() => setIsOpen(false), 150);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const [dropdownItems, setDropdownItems] = useState<{ title: string, image: string, timeString: string }[]>([]);

  useEffect(() => {
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
          console.error("Failed to load launches JSON:", error);
        }
      }

      // Partition launches based on 'date' string
      const now = Date.now();
      const upcoming: LaunchData[] = [];
      const past: LaunchData[] = [];

      data.forEach(l => {
        const targetTime = l.targetUtc ? new Date(l.targetUtc).getTime() : new Date(l.date).getTime();
        // Check exact date against now
        if (!isNaN(targetTime) && targetTime < now) {
          past.push(l);
        } else {
          upcoming.push(l);
        }
      });

      const sortedUpcoming = sortLaunches(upcoming, true);
      const sortedPast = sortLaunches(past, false);

      const sortedData = [...sortedUpcoming, ...sortedPast];

      // Take top 2 for dropdown
      const topTwo = sortedData.slice(0, 2).map(l => ({
        title: l.project,
        image: l.image || 'https://res.cloudinary.com/kpa1wv3h/image/upload/v1785937211/WhatsApp_Image_2026-08-04_at_12.45.41_PM_1_wigjed.jpg',
        timeString: formatTimeLocal(l.targetUtc)
      }));
      setDropdownItems(topTwo);
    }

    loadLaunches();
  }, []);

  return (
    <div 
      className="upcoming-launches-wrapper desktop-only" 
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        className="btn font-mono launches-btn"
        aria-expanded={isOpen}
      >
        UPCOMING LAUNCHES 
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className={`chevron ${isOpen ? 'open' : ''}`}>
          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {isOpen && (
        <div className="launches-dropdown-panel">
          <div className="launches-list">
            {dropdownItems.map((launch, index) => (
              <div className="launch-item" key={index}>
                <div className="launch-image">
                  <img src={launch.image} alt={launch.title} />
                </div>
                <div className="launch-info">
                  <h3 className="launch-title">{launch.title}</h3>
                  <p className="launch-time">{launch.timeString}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="launches-footer">
            <Link href="/launches" className="all-launches-link font-inter">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="grid-icon">
                <circle cx="2" cy="2" r="1.5"/>
                <circle cx="8" cy="2" r="1.5"/>
                <circle cx="14" cy="2" r="1.5"/>
                <circle cx="2" cy="8" r="1.5"/>
                <circle cx="8" cy="8" r="1.5"/>
                <circle cx="14" cy="8" r="1.5"/>
                <circle cx="2" cy="14" r="1.5"/>
                <circle cx="8" cy="14" r="1.5"/>
                <circle cx="14" cy="14" r="1.5"/>
              </svg>
              ALL UPCOMING LAUNCHES
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
