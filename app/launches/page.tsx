'use client';

import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { DEFAULT_LAUNCHES, LaunchData, sortLaunches } from '../../components/UpcomingLaunches';

export default function LaunchesPage() {
  const [upcomingLaunches, setUpcomingLaunches] = useState<LaunchData[]>(() => {
    const now = Date.now();
    const filtered = DEFAULT_LAUNCHES.filter(l => {
      const targetTime = l.targetUtc ? new Date(l.targetUtc).getTime() : new Date(l.date).getTime();
      return isNaN(targetTime) || targetTime >= now;
    });
    return sortLaunches(filtered, true);
  });

  const [pastLaunches, setPastLaunches] = useState<LaunchData[]>(() => {
    const now = Date.now();
    const filtered = DEFAULT_LAUNCHES.filter(l => {
      const targetTime = l.targetUtc ? new Date(l.targetUtc).getTime() : new Date(l.date).getTime();
      return !isNaN(targetTime) && targetTime < now;
    });
    return sortLaunches(filtered, false);
  });
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isComingSoon, setIsComingSoon] = useState(false);

  useEffect(() => {
    async function loadData() {
      const url = process.env.NEXT_PUBLIC_LAUNCHES_JSON_URL;
      if (url) {
        try {
          const fetchUrl = `${url}${url.includes('?') ? '&' : '?'}t=${Date.now()}`;
          const res = await fetch(fetchUrl, { cache: 'no-store' });
          if (res.ok) {
            const json = await res.json();
            if (Array.isArray(json) && json.length > 0) {
              const now = Date.now();
              const upcoming: LaunchData[] = [];
              const past: LaunchData[] = [];
              json.forEach((l: LaunchData) => {
                const targetTime = l.targetUtc ? new Date(l.targetUtc).getTime() : new Date(l.date).getTime();
                if (!isNaN(targetTime) && targetTime < now) {
                  past.push(l);
                } else {
                  upcoming.push(l);
                }
              });
              setUpcomingLaunches(sortLaunches(upcoming, true));
              setPastLaunches(sortLaunches(past, false));
            }
          }
        } catch (error) {
          console.error("Failed to load launches JSON:", error);
        }
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    const firstLaunch = upcomingLaunches[0];
    if (!firstLaunch) return;

    if (!firstLaunch.targetUtc || firstLaunch.date?.toUpperCase().includes('COMING SOON')) {
      setIsComingSoon(true);
      return;
    }

    setIsComingSoon(false);
    const targetDate = new Date(firstLaunch.targetUtc).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [upcomingLaunches]);

  const formatUnit = (unit: number) => unit.toString().padStart(2, '0');

  return (
    <>
      <Navbar />
      <main className="launches-main">
        <section className="launches-hero">
          {/* We use a high quality placeholder space image which can be replaced later */}
          <div className="launches-hero-bg">
            {upcomingLaunches[0]?.video ? (
              <video 
                src={upcomingLaunches[0].video} 
                autoPlay 
                loop 
                muted 
                playsInline 
              />
            ) : (
              <img 
                src={upcomingLaunches[0]?.image || "https://res.cloudinary.com/dq9x4mk1y/image/upload/w_2000,h_1200,c_fill/v1782859776/WhatsApp_Image_2026-06-30_at_19.48.56_g8owa7.jpg"} 
                alt="Rocket Launch" 
              />
            )}
            <div className="launches-hero-overlay"></div>
          </div>
          
          <div className="launches-hero-content">
            <div className="launches-countdown font-mono">
              {isComingSoon ? (
                'COMING SOON'
              ) : (
                `T-${timeLeft.days}D ${formatUnit(timeLeft.hours)}:${formatUnit(timeLeft.minutes)}:${formatUnit(timeLeft.seconds)}`
              )}
            </div>
            <h1 className="launches-hero-title font-ethno" style={{ whiteSpace: 'pre-wrap' }}>
              {upcomingLaunches[0]?.project?.toUpperCase() || ''}
            </h1>
            <button className="btn font-mono launches-watch-btn">
              WATCH →
            </button>
          </div>
        </section>

        <section className="launches-table-section">
          <div className="launches-container">
            <h2 className="launches-table-heading font-ethno">UPCOMING LAUNCHES</h2>
            
            <div className="launches-table">
              <div className="launches-table-header font-mono">
                <div className="col-project">PROJECT</div>
                <div className="col-classification">CLASSIFICATION</div>
                <div className="col-date">TARGET DATE</div>
              </div>
              
              <div className="launches-table-body font-mono">
                {upcomingLaunches.map((launch, index) => (
                  <div className="launches-table-row" key={index}>
                    <div className="col-project">{launch.project}</div>
                    <div className="col-classification">{launch.classification}</div>
                    <div className="col-date">{launch.date}</div>
                  </div>
                ))}
              </div>
            </div>

            {pastLaunches.length > 0 && (
              <>
                <h2 className="launches-table-heading font-ethno" style={{ marginTop: '4rem' }}>PAST LAUNCHES</h2>
                
                <div className="launches-table">
                  <div className="launches-table-header font-mono">
                    <div className="col-project">PROJECT</div>
                    <div className="col-classification">CLASSIFICATION</div>
                    <div className="col-date">TARGET DATE</div>
                  </div>
                  
                  <div className="launches-table-body font-mono">
                    {pastLaunches.map((launch, index) => (
                      <div className="launches-table-row" key={index} style={{ opacity: 0.6 }}>
                        <div className="col-project">{launch.project}</div>
                        <div className="col-classification">{launch.classification}</div>
                        <div className="col-date">{launch.date}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer isHome={false} />
    </>
  );
}
