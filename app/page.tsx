import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import HomePage from '../components/HomePage';
import './home-daisyui.css';

const geist = Geist({ subsets: ['latin'], variable: '--home-font' });

export const metadata: Metadata = {
  description: 'Spaceborn connects AI, software, simulation, and hardware to help teams build, test, and deploy autonomous machines with less repeated engineering.',
};

export default function Page() {
  return <HomePage fontClassName={geist.variable} />;
}
