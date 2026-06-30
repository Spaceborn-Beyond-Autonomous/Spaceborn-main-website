'use client';

import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function DownloadsComingSoon() {
  return (
    <>
      <div className="viewport-border-frame" />

      <Navbar />

      <main className="coming-soon-main-container">
        <div className="coming-soon-content-box">
          <h1 className="coming-soon-title font-ethno">COMING SOON</h1>
        </div>
        <Footer isHome={false} />
      </main>
    </>
  );
}
