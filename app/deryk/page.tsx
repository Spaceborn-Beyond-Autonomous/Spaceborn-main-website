'use client';

import { MotionConfig } from 'framer-motion';
import MissionControl from './MissionControl';

export default function DerykPage() {
  return <MotionConfig reducedMotion="user"><MissionControl /></MotionConfig>;
}
