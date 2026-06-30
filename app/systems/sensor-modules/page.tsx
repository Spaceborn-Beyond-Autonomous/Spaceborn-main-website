import Link from 'next/link';
import MobileMenu from '../../../components/MobileMenu';
import Footer from '../../../components/Footer';

export const metadata = {
  title: 'Digital Twins | Spaceborn',
  description: 'Digital Twins by Spaceborn.',
};

export default function DigitalTwinsPage() {
  return (
    <>
      <header className="navbar-wrapper">
        <nav className="navbar">
          <Link href="/" className="logo" aria-label="Spaceborn home">
            <img
              src="https://res.cloudinary.com/dq9x4mk1y/image/upload/v1782734333/spaceborn_assets/spaceborn-transparent-logo.png"
              alt="Spaceborn Logo"
            />
          </Link>

          <ul className="nav-links">
            <li><Link href="/#platforms">PLATFORMS</Link></li>
            <li><Link href="/#simulation">SIMULATION</Link></li>
            <li><Link href="/#systems">SYSTEMS</Link></li>
            <li><Link href="/#thoth">THOTH</Link></li>
            <li><a href="https://khonsu.in" target="_blank" rel="noopener noreferrer">KHONSU</a></li>
            <li><Link href="/#simulators-hub">COMPANY</Link></li>
          </ul>

          <Link href="/#releases" className="btn font-mono desktop-only">
            UPCOMING RELEASES →
          </Link>

          <MobileMenu />
        </nav>
      </header>

      <main
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#000000',
          color: '#ffffff',
        }}
      >
        <section
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center', 
            paddingTop: '160px',  
            paddingBottom: '120px',
            paddingLeft: '80px',  
            paddingRight: '64px',
          }}
        >
          {/* Left-aligned container */}
          <div
            style={{
              width: '100%',
              margin: '0', 
              textAlign: 'left',  
            }}
          >
            {/* Large Accent Title */}
            <h1
              className="font-ethno"
              style={{
                fontSize: 'clamp(36px, 5vw, 64px)',
                lineHeight: '1.1',
                letterSpacing: '2px',
                margin: '0 0 16px 0',
                textTransform: 'uppercase',
              }}
            >
              SENSOR MODULES
            </h1>

            {/* Subheading / Tagline */}
            <h2
              className="font-inter"
              style={{
                fontSize: '24px',
                fontWeight: 400,
                color: '#ffffff',
                margin: '0 0 40px 0',
                opacity: 0.9,
              }}
            >
              Expanding Perception. Enabling Intelligence.
            </h2>

            {/* Paragraph Content Blocks */}
            <div style={{ maxWidth: '900px' }}>
              <p
                className="font-inter"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: '#B7B7B7',
                  marginBottom: '24px',
                }}
              >
                Spaceborn Sensor Modules provide the sensing foundation that allows autonomous systems to understand and interact with
                the world around them. From navigation and positioning to obstacle detection and environmental awareness, these modules
                deliver the critical data required for intelligent autonomy.
              </p>

              <p
                className="font-inter"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: '#B7B7B7',
                  margin: 0,
                }}
              >
                Our sensor ecosystem includes GPS, IMUs, magnetometers, barometers, LiDAR, and vision sensors, all designed to integrate
                seamlessly with the Spaceborn autonomy stack. Together, they enable reliable perception, precise localization, and
                real-time decision-making across a wide range of autonomous platforms.
              </p>
            </div>

          </div>
        </section>

        <Footer isHome={false} />
      </main>
    </>
  );
}