'use client';

import Link from 'next/link';
import Icon from './Icon';

type FooterProps = {
  isHome?: boolean;
};

export default function Footer({ isHome = false }: FooterProps) {
  const footerContent = (
    <>
      <div className="footer-social-group">
        <a 
          href="https://www.linkedin.com/company/spaceborn-future/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={isHome ? 'linkedin-link du-btn du-btn-ghost du-btn-square' : 'linkedin-link'}
          aria-label="Spaceborn LinkedIn"
        >
          {isHome
            ? <i className="fa-brands fa-linkedin" aria-hidden="true" />
            : <img src="https://res.cloudinary.com/kpa1wv3h/image/upload/v1783382862/spaceborn_assets/linkedin-icon.png" alt="LinkedIn Logo" />}
        </a>
        <a 
          href="mailto:adarshkumar@spaceborn.in" 
          className={isHome ? 'du-btn du-btn-outline' : 'ceo-contact-btn font-mono'}
        >
          {isHome && <Icon name="envelope" />}
          Contact our CEO
        </a>
      </div>

      <ul className="footer-nav">
        <li><Link href="/company/careers">Careers</Link></li>
        {isHome ? (
          <li><a href="#releases">Updates</a></li>
        ) : (
          <li><Link href="/#releases">Updates</Link></li>
        )}
        <li><a href="#">Privacy policy</a></li>
        <li><Link href="/company/partners">Partners</Link></li>
      </ul>

      <span className="footer-copyright">
        Copyright © 2026 Spaceborn
      </span>
    </>
  );

  return (
    <footer className="simulators-scroll-section footer-wrapper-responsive" data-theme={isHome ? "spaceborn" : undefined}>
      <div className="footer-fixed" style={{ borderTop: 'none' }}>
        {footerContent}
      </div>
    </footer>
  );
}
