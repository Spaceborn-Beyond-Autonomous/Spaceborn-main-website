'use client';

import { useEffect, useRef, type ComponentPropsWithoutRef } from 'react';

type LoopingVideoProps = Omit<
  ComponentPropsWithoutRef<'video'>,
  'autoPlay' | 'controls' | 'loop' | 'muted' | 'playsInline' | 'preload' | 'src'
> & { src: string; active?: boolean; compactSrc?: string };

export default function LoopingVideo({ active = true, compactSrc, src, ...props }: LoopingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !active) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    const syncPlayback = () => {
      if (visible && !document.hidden && !reducedMotion.matches) {
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.intersectionRatio >= 0.05;
      syncPlayback();
    }, { threshold: 0.05 });

    observer.observe(video);
    document.addEventListener('visibilitychange', syncPlayback);
    reducedMotion.addEventListener('change', syncPlayback);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', syncPlayback);
      reducedMotion.removeEventListener('change', syncPlayback);
      video.pause();
    };
  }, [active]);

  return (
    <video {...props} ref={videoRef} src={compactSrc ? undefined : src} muted loop playsInline preload="none">
      {compactSrc && <source src={compactSrc} media="(max-width: 820px)" />}
      {compactSrc && <source src={src} />}
    </video>
  );
}
