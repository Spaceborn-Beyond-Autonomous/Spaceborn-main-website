'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDownRight, ArrowRight, Bot, BrainCircuit, Check, ChevronDown, CircleDot, Database, Gamepad2, Globe2, Layers3, LockKeyhole, Network, Radio, ShieldCheck, Sparkles, Terminal, Waves, Zap } from 'lucide-react';
import ImmersiveMissionReplay from './MissionReplay';
import './mission-control.css';

const lifecycle = [
  { key: 'plan', label: 'PLAN', title: 'Turn intent into a mission.', copy: 'An operator describes the objective. DERYK structures the request into a mission contract without touching a vehicle.', icon: Terminal },
  { key: 'validate', label: 'VALIDATE', title: 'Make the boundary explicit.', copy: 'The proposed route is checked against declared constraints. The Safety Judge can advise; the EnforcementGate decides.', icon: ShieldCheck },
  { key: 'execute', label: 'EXECUTE', title: 'Carry the approved contract.', copy: 'The execution backend receives only what the deterministic gate allowed. Simulator first, compatible hardware later.', icon: Zap },
  { key: 'observe', label: 'OBSERVE', title: 'Keep the signal honest.', copy: 'Telemetry moves to the analytics logbook. Measured values stay distinct from fields the connector cannot report.', icon: Radio },
  { key: 'replay', label: 'REPLAY', title: 'Remember what happened.', copy: 'Every mission becomes a queryable record: decisions, events, durations, and the signals that actually existed.', icon: Waves },
] as const;

const faqs = [
  ['What is DERYK?', 'DERYK is intelligence infrastructure that connects AI models to dynamic environments so intelligent systems can understand, predict, decide, act, and evaluate.'],
  ['Is DERYK another AI model?', 'No. DERYK is the operating layer around models and environments rather than a new general-purpose foundation model.'],
  ['What environments does DERYK target?', 'Physical systems, simulations, games, and selected digital or enterprise environments.'],
  ['Who is DERYK for?', 'Developers and organizations building robotics, autonomous systems, simulations, games, and environment-aware AI applications.'],
  ['Does DERYK work with one model only?', 'The platform is designed to integrate with multiple AI models and services.'],
];

const loop = [
  { label: 'CONTEXT', detail: 'What is happening now?', icon: Globe2 },
  { label: 'MEMORY', detail: 'What happened before?', icon: Database },
  { label: 'UNDERSTAND', detail: 'What does the world mean?', icon: BrainCircuit },
  { label: 'PREDICT', detail: 'What may happen next?', icon: Sparkles },
  { label: 'REASON', detail: 'What should happen?', icon: Bot },
  { label: 'ACT', detail: 'Interact with the environment.', icon: Zap },
  { label: 'EVALUATE', detail: 'Did it work as intended?', icon: Check },
  { label: 'SAFETY', detail: 'Keep action governed.', icon: ShieldCheck },
];

const environments = [
  { label: 'PHYSICAL', title: 'Robots, drones, and machines.', copy: 'Connect intelligence to sensors, actuators, and real-world systems that change over time.', icon: Bot },
  { label: 'DIGITAL', title: 'Software and enterprise systems.', copy: 'Give AI a durable view of operational state, workflows, and system actions.', icon: Layers3 },
  { label: 'GAMES', title: 'Interactive worlds and agents.', copy: 'Build characters and opponents with memory, perception, telemetry, and adaptive behaviour.', icon: Gamepad2 },
  { label: 'SIMULATION', title: 'Virtual spaces for validation.', copy: 'Develop and evaluate intelligent behaviour before it reaches the physical world.', icon: Globe2 },
];

const productAreas = [
  { label: '01 / PHYSICAL AI', title: 'Intelligence for systems that move.', copy: 'World understanding, prediction, runtime infrastructure, SDKs, and studio workflows for autonomous machines.', products: ['World Intelligence Engine', 'Autonomous Environment Intelligence', 'Physical Intelligence Runtime', 'Physical Intelligence SDK', 'Physical AI Studio'] },
  { label: '02 / PLATFORM AI', title: 'The shared foundation underneath.', copy: 'APIs, services, identity, model integrations, memory, and serving infrastructure for environment-aware intelligence.', products: ['AI Platform', 'AI Services', 'AI Runtime', 'Environment Interface Layer'] },
  { label: '03 / GAMING AI', title: 'World-aware game intelligence.', copy: 'Persistent, state-aware, perceptive agents that respond to players and evolving game worlds.', products: ['NPC Intelligence SDK', 'Adaptive Opponent', 'Gaming Intelligence SDK'] },
];

const replayEvents = [
  { time: 0, label: 'MISSION INITIALIZED', phase: 'OBSERVE' },
  { time: 10, label: 'MISSION STARTED', phase: 'ACT' },
  { time: 20, label: 'OBJECTS DETECTED', phase: 'OBSERVE' },
  { time: 30, label: 'WORLD MODEL UPDATED', phase: 'MODEL' },
  { time: 45, label: 'PATH BLOCKED', phase: 'OBSERVE' },
  { time: 50, label: '3 POSSIBLE FUTURES', phase: 'PREDICT' },
  { time: 60, label: 'TRAJECTORY 02 SELECTED', phase: 'DECIDE' },
  { time: 70, label: 'MANEUVER EXECUTED', phase: 'ACT' },
  { time: 80, label: 'WORLD STATE UPDATED', phase: 'OBSERVE' },
  { time: 120, label: 'TARGET REACHED', phase: 'ACT' },
] as const;

const replayPhases = ['OBSERVE', 'MODEL', 'PREDICT', 'DECIDE', 'ACT'];

function MissionReplay() {
  const [replayTime, setReplayTime] = useState(0);
  const replayEvent = [...replayEvents].reverse().find((event) => replayTime >= event.time) ?? replayEvents[0];
  const missionProgress = Math.min(replayTime / 120, 1);
  const droneX = 88 + missionProgress * 442;
  const approachProgress = Math.min(Math.max((replayTime - 60) / 60, 0), 1);
  const droneY = 222 - approachProgress * 92;
  const obstacleVisible = replayTime >= 45 && replayTime < 80;
  const perceptionVisible = replayTime >= 20;
  const predictionVisible = replayTime >= 50 && replayTime < 70;
  const decisionVisible = replayTime >= 60;
  const selectedPath = replayTime >= 60 ? 'M88 222 C185 222 270 222 340 180 S455 160 558 112' : 'M88 222 C220 222 350 222 558 112';
  const scenePhase = replayTime < 20 ? 'initial' : replayTime < 45 ? 'transit' : replayTime < 80 ? 'hazard' : 'resolved';

  const updateReplayTime = (value: number) => {
    setReplayTime(Math.max(0, Math.min(120, value)));
  };

  return <section className="mission-replay" id="replay">
    <div className="replay-heading">
      <div>
        <span className="reference-kicker">06 / MISSION REPLAY</span>
        <h2>Watch a decision<br /><em>become an action.</em></h2>
      </div>
      <p>Scrub through an autonomous inspection mission. Every frame is a derived world state: what DERYK saw, predicted, selected, and executed.</p>
    </div>

    <div className="replay-console">
      <div className={`replay-stage ${obstacleVisible ? 'is-blocked' : ''} replay-stage-${scenePhase}`}>
        <div className="replay-stage-head"><span>SECTOR 04 / INDUSTRIAL INSPECTION</span><b>{String(Math.floor(replayTime / 60)).padStart(2, '0')}:{String(Math.floor(replayTime % 60)).padStart(2, '0')}</b></div>
        <svg className="replay-map" viewBox="0 0 640 300" role="img" aria-label="Interactive autonomous drone mission replay">
          <defs><pattern id="replay-grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" stroke="rgba(130,173,255,.12)" strokeWidth="1" /></pattern><linearGradient id="replay-ground" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#16283a" /><stop offset=".58" stopColor="#0d1a28" /><stop offset="1" stopColor="#07111c" /></linearGradient><linearGradient id="replay-roof" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#607b92" stopOpacity=".9" /><stop offset="1" stopColor="#1b3045" stopOpacity=".95" /></linearGradient><linearGradient id="replay-wall" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#294156" /><stop offset="1" stopColor="#142638" /></linearGradient><linearGradient id="replay-sky" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#152d43" /><stop offset="1" stopColor="#0c1826" /></linearGradient><filter id="replay-glow"><feGaussianBlur stdDeviation="4" /></filter><filter id="replay-shadow"><feDropShadow dx="0" dy="8" stdDeviation="7" floodColor="#02070d" floodOpacity=".65" /></filter></defs>
          <rect width="640" height="300" fill="url(#replay-ground)" />
          <rect className="replay-sky-band" width="640" height="185" fill="url(#replay-sky)" />
          <motion.rect className="replay-color-wash" width="640" height="300" initial={false} animate={{ opacity: replayTime < 20 ? 0.16 : replayTime >= 80 ? 0.07 : 0 }} transition={{ duration: 0.8 }} />
          <path className="replay-site-line" d="M0 216H640M0 268H640M214 0V300M410 0V300" />
          <path className="replay-perspective-grid" d="M0 212L320 172 640 212M0 254L320 220 640 254M0 282L320 255 640 282M320 172V300M320 220V300M320 255V300" />
          <path className="replay-road" d="M0 242H640M0 246H640M236 0V300M240 0V300" />
          <path className="replay-road-marking" d="M0 244H210M270 244H430M490 244H640" />
          <g className="replay-building" filter="url(#replay-shadow)"><path d="M24 74L104 40 184 74v111H24Z" fill="url(#replay-wall)" /><path d="M24 74l80-34 80 34" fill="url(#replay-roof)" /><path d="M42 93h124v74H42zM56 110h28v28H56zM98 110h52v28H98zM56 148h94v9H56z" /><path className="replay-windows" d="M50 105h18v12H50zM76 105h18v12H76zM106 105h18v12h-18zM132 105h18v12h-18zM50 126h18v12H50zM76 126h18v12H76zM106 126h18v12h-18zM132 126h18v12h-18z" /><path d="M452 38l66-22 102 36v54H452Z" fill="url(#replay-wall)" /><path d="M452 38l66-22 102 36" fill="url(#replay-roof)" /><path className="replay-windows" d="M470 62h38v22h-38zM520 62h68v22h-68zM470 94h28v14h-28zM508 94h28v14h-28zM546 94h28v14h-28z" /><path d="M472 122h96v10h-96z" /></g>
          <g className="replay-foreground-structure"><path d="M24 270h116v30H24z" /><path d="M40 270v-17h84v17" /><path d="M42 277h18v14H42zM70 277h18v14H70zM98 277h18v14H98z" /></g>
          <text className="replay-map-label" x="30" y="62">ASSEMBLY HALL / A-04</text><text className="replay-map-label" x="454" y="28">LOGISTICS BAY</text>
          <text className="replay-map-label replay-map-label-muted" x="260" y="194">SERVICE CORRIDOR</text>
          <path className="replay-zone" d="M400 192h144v58H400z" />
          <text className="replay-map-label" x="402" y="185">RESTRICTED ZONE</text>
          <path className="replay-planned-path" d="M88 222 C220 222 350 222 558 112" />
          <motion.path className="replay-selected-path" d={selectedPath} initial={false} animate={{ opacity: decisionVisible ? 1 : 0, pathLength: decisionVisible ? 1 : 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} />
          {predictionVisible && <motion.g className="replay-predictions" initial={{ opacity: 0, scale: 0.96, transformOrigin: '270px 222px' }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45, ease: 'easeOut' }}><path d="M270 222 C350 130 430 150 558 112" /><path d="M270 222 C340 255 420 210 558 112" /><text x="292" y="125">01</text><text x="418" y="230">03</text><text className="safe" x="382" y="153">02 / SAFE</text></motion.g>}
          {obstacleVisible && <motion.g className="replay-obstacle" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.38, ease: 'easeOut' }}><path d="M310 205v-64M286 205l24-64 24 64M294 178h32M288 190h44" /><text x="278" y="130">CRANE / 14.7m</text></motion.g>}
          {perceptionVisible && <motion.g className="replay-object" initial={{ opacity: 0, scale: 0.9, transformOrigin: '214px 116px' }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: 'easeOut' }}><rect x="190" y="98" width="48" height="36" /><text x="190" y="88">VEHICLE / 98.2%</text></motion.g>}
          <motion.g className="replay-drone" initial={false} animate={{ x: droneX, y: droneY }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}><ellipse className="replay-drone-shadow" cx="3" cy="12" rx="22" ry="5" /><path className="replay-drone-wing" d="M-5-2L-30 9-11 7 0 3 14 7 34 9 7-2Z" /><path className="replay-drone-body" d="M-11 1L-2-7 12 0 4 5Z" /><path className="replay-drone-tail" d="M-8 0L-15-8-7-4Z" /><circle className="replay-drone-light" cx="3" cy="0" r="2" /></motion.g>
          <circle className="replay-target" cx="558" cy="112" r="8" /><text className="replay-target-label" x="550" y="92">TARGET</text>
        </svg>
        <AnimatePresence mode="wait" initial={false}><motion.div className="replay-event" key={replayEvent.label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25, ease: 'easeOut' }}><span>EVENT</span><strong>{replayEvent.label}</strong><small>{replayEvent.phase} / WORLD STATE {replayTime >= 30 ? 'KNOWN' : 'FORMING'}</small></motion.div></AnimatePresence>
      </div>

      <aside className="replay-sidebar">
        <div className="replay-sidebar-head"><span>DERYK / MISSION STATE</span><i className={obstacleVisible ? 'warning' : ''} /></div>
        <div className="replay-stat"><span>{obstacleVisible ? 'PATH STATUS' : replayTime >= 120 ? 'MISSION' : 'MISSION'}</span><b>{obstacleVisible ? 'BLOCKED' : replayTime >= 120 ? 'COMPLETE' : replayTime >= 10 ? 'TRANSIT' : 'STANDBY'}</b></div>
        <div className="replay-stat"><span>ALTITUDE</span><b>{replayTime < 10 ? '0.0' : replayTime >= 70 ? '14.1' : '12.4'} m</b></div>
        <div className="replay-stat"><span>VELOCITY</span><b>{replayTime < 10 ? '0.0' : replayTime >= 70 ? '5.1' : '4.2'} m/s</b></div>
        <div className="replay-stat"><span>BATTERY</span><b>94%</b></div>
        <div className="replay-stat"><span>{obstacleVisible ? 'REASON' : 'TRACKED OBJECTS'}</span><b>{obstacleVisible ? 'OBSTACLE' : perceptionVisible ? '07' : '00'}</b></div>
        <div className="replay-known"><span>{obstacleVisible ? 'NEW INFORMATION' : 'DERYK KNEW'}</span><p>{obstacleVisible ? 'Crane detected 14.7 m ahead. Planned corridor is invalid.' : replayTime >= 30 ? 'Drone, target, boundaries, current trajectory.' : 'Mission intent and destination waypoint.'}</p></div>
      </aside>

      <div className="replay-controls">
        <div className="replay-timeline-head"><span>MISSION TIMELINE</span><b>{String(Math.floor(replayTime / 60)).padStart(2, '0')}:{String(Math.floor(replayTime % 60)).padStart(2, '0')} / 02:00</b></div>
        <div className="replay-range-wrap"><input aria-label="Scrub mission replay" type="range" min="0" max="120" step="1" value={replayTime} onChange={(event) => updateReplayTime(Number(event.target.value))} /><div className="replay-markers">{replayEvents.map((event) => <button key={event.time} className={replayTime >= event.time ? 'active' : ''} style={{ left: `${(event.time / 120) * 100}%` }} onClick={() => updateReplayTime(event.time)} aria-label={`Jump to ${event.label}`}><i /><small>{event.time === 0 ? '00:00' : event.time === 120 ? '02:00' : `00:${String(event.time).padStart(2, '0')}`}</small></button>)}</div></div>
        <div className="replay-phases">{replayPhases.map((phase) => <span className={replayEvent.phase === phase ? 'active' : ''} key={phase}>{phase}</span>)}</div>
      </div>
    </div>
  </section>;
}

function Mark() { return <img className="mc-logo" src="/images/deryk-logo.jpeg" alt="DERYK" />; }

function AirspaceMap({ compact = false }: { compact?: boolean }) {
  return <div className={`airspace-map ${compact ? 'compact' : ''}`}>
    <svg viewBox="0 0 700 390" role="img" aria-label="Conceptual mission route visualization">
      <defs><linearGradient id="route" x1="0" x2="1"><stop stopColor="#477B2B" stopOpacity=".15" /><stop offset=".5" stopColor="#477B2B" /><stop offset="1" stopColor="#111513" /></linearGradient><filter id="mapGlow"><feGaussianBlur stdDeviation="3" /></filter></defs>
      <g className="map-grid"><path d="M0 65H700M0 130H700M0 195H700M0 260H700M0 325H700M70 0V390M140 0V390M210 0V390M280 0V390M350 0V390M420 0V390M490 0V390M560 0V390M630 0V390" /></g>
      <path className="contour contour-one" d="M-20 290 C100 210 130 360 270 270 S460 180 720 250" /><path className="contour contour-two" d="M-40 180 C100 80 185 240 325 145 S520 60 740 130" />
      <path className="geofence" d="M85 75 L590 52 L642 300 L170 344 Z" />
      <path className="route-shadow" d="M112 285 C160 240 187 112 290 134 S365 278 448 246 S513 118 585 87" /><motion.path className="route-line" d="M112 285 C160 240 187 112 290 134 S365 278 448 246 S513 118 585 87" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.4, ease: 'easeInOut' }} />
      {[['WP-01', 112, 285], ['WP-02', 210, 126], ['WP-03', 365, 270], ['WP-04', 585, 87]].map(([label, x, y], index) => <g className="waypoint" key={label as string}><circle cx={x as number} cy={y as number} r="7" /><circle cx={x as number} cy={y as number} r="14" /><text x={(x as number) + 14} y={(y as number) - 12}>{label as string}</text><motion.circle cx={x as number} cy={y as number} r="20" fill="none" stroke="#477B2B" initial={{ opacity: 0 }} animate={{ opacity: [0, .7, 0], scale: [0.7, 1.25, 1.25] }} transition={{ duration: 2.4, delay: index * .45, repeat: Infinity }} /></g>)}
      <motion.g className="map-drone" animate={{ x: [0, 95, 245, 336, 473], y: [0, -88, 0, -39, -198] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}><path d="M-12 0 L0 -7 L18 0 L0 7Z" fill="#111513" /><circle cx="0" cy="0" r="3" fill="#477B2B" /></motion.g>
      <g className="map-label"><text x="34" y="35">AIRSPACE / DEMO ENVIRONMENT</text><text x="530" y="365">ALT RINGS / 124.6 m</text><text x="20" y="370">18° 32' 44.2" N</text></g>
    </svg>
    <div className="map-readout"><span><b className="live-dot" /> MISSION ACTIVE</span><strong>OPIP-2048</strong><small>SIMULATED ROUTE / NOT LIVE HARDWARE</small></div>
  </div>;
}

function MissionContract() {
  return <div className="mission-contract"><div className="contract-prompt"><span>OPERATOR REQUEST</span><strong>“Inspect sector 07<br />and return to base.”</strong></div><div className="contract-route"><span>MISSION GENERATED</span><b>OBJECTIVE <em>SECTOR INSPECTION</em></b><b>ROUTE <em>04 WAYPOINTS</em></b><b>CONSTRAINTS <em>GEOFENCE / RETURN</em></b><b>STATUS <em className="green">READY</em></b></div></div>;
}

function EnforcementChamber() {
  return <div className="enforcement-chamber"><div className="chamber-beam" /><div className="vault"><motion.div className="vault-door" animate={{ rotate: [0, 0, 90, 90, 0] }} transition={{ duration: 8, repeat: Infinity, times: [0, .25, .42, .7, 1], ease: 'easeInOut' }}><span /><span /><span /><span /></motion.div><div className="vault-core"><LockKeyhole size={19} /><b>ENFORCEMENT</b><small>LLM-FREE / DETERMINISTIC</small></div></div><div className="chamber-readout"><span>CHECKSUM / 7C-04-A9</span><b><i /> ONLY EXECUTION AUTHORITY</b><small>REQUEST → CHECK → ALLOW</small></div></div>;
}

function ConnectedStudios() {
  return <div className="studio-system"><div className="studio-rail"><motion.i animate={{ y: [0, 250] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} /></div><div className="studio-node core"><Mark /><span>DERYK CORE</span></div><div className="studio-node console"><Terminal size={16} /><span>CONSOLE<small>MISSION PLANNING</small></span></div><div className="studio-node connector"><Network size={16} /><span>CONNECTOR<small>MACHINE INTERFACE</small></span></div><div className="studio-node telemetry"><Radio size={16} /><span>TELEMETRY<small>LIVE SYSTEM STATE</small></span></div><div className="studio-node logbook"><Waves size={16} /><span>LOGBOOK<small>HISTORICAL RECORD</small></span></div><svg className="studio-lines" viewBox="0 0 700 340"><path d="M350 170H180M350 170H520M350 170L350 45M350 170L350 295" /></svg></div>;
}

function Logbook() {
  const events = [['09:41:02', 'MISSION START', 'Mission contract accepted'], ['09:41:08', 'WAYPOINT 01', 'Navigation route active'], ['09:41:31', 'POLICY CHECK', 'EnforcementGate / ALLOW'], ['09:42:04', 'WAYPOINT 02', 'Altitude 124.6 m'], ['09:43:12', 'RETURN', 'Return-to-base constraint'], ['09:44:02', 'MISSION COMPLETE', 'Record exported to logbook']];
  return <div className="logbook"><div className="logbook-head"><span>FLIGHT RECORD / OPIP-2048</span><b>REPLAY 01</b></div><div className="logbook-track"><motion.i animate={{ left: ['0%', '100%'] }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }} /></div>{events.map(([time, label, detail], index) => <div className="log-event" key={label}><span>{time}</span><i className={label === 'POLICY CHECK' ? 'amber' : ''} /><div><b>{label}</b><small>{detail}</small></div><ArrowRight size={13} /></div>)}</div>;
}

function DerykPage() {
  const [activeStage, setActiveStage] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const active = lifecycle[activeStage];
  const ActiveIcon = active.icon;
  const matrix = useMemo(() => Array.from({ length: 66 }, (_, index) => index), []);

  return <div className="mission-control" id="top">
    <header className="mission-nav"><a href="#top" aria-label="DERYK home"><Mark /></a><nav><a href="#architecture">Architecture</a><a href="#worlds">Worlds</a><a href="#capabilities">Capabilities</a><a href="#careers">Careers</a><a className="mission-nav-button" href="#architecture">Explore DERYK <ArrowRight size={13} /></a></nav></header>

    <main>
      <section className="mission-hero"><video className="hero-video" autoPlay muted loop playsInline aria-hidden="true"><source src="/images/deryk-hero-video.mp4" type="video/mp4" /></video><div className="hero-editorial"><span className="eyebrow">DERYK / AUTONOMOUS MISSION SYSTEM</span><h1>Autonomy,<br /><em>with receipts.</em></h1><p>A mission-control intelligence layer for planning, enforcing, executing and observing autonomous operations.</p><div className="hero-actions"><a className="mission-button primary" href="#architecture">Explore the architecture <ArrowRight size={15} /></a><a className="mission-button text" href="#worlds">Explore DERYK <ArrowDownRight size={15} /></a></div><div className="hero-footnote"><span>SIMULATED DEMO ENVIRONMENT</span><span>NO LIVE HARDWARE CONNECTED</span></div></div></section>

      <section className="mission-claim"><span>THE INVARIANT</span><h2>The AI proposes.<br /><em>The Gate decides.</em></h2><p>DERYK keeps intelligence expressive and execution accountable by placing deterministic authority between the request and the vehicle.</p></section>

      <section className="mission-section lifecycle-section" id="lifecycle"><div className="section-intro"><span className="eyebrow">01 / MISSION LIFECYCLE</span><h2>One mission.<br /><em>Five deliberate states.</em></h2><p>From the first sentence to the final record, DERYK makes the operating environment legible.</p></div><div className="lifecycle-layout"><div className="lifecycle-nav">{lifecycle.map((stage, index) => { const Icon = stage.icon; return <button className={activeStage === index ? 'active' : ''} key={stage.key} onClick={() => setActiveStage(index)}><span>0{index + 1}</span><Icon size={15} /><b>{stage.label}</b><i /></button>; })}</div><div className="lifecycle-stage"><AnimatePresence mode="wait"><motion.div key={active.key} initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0)' }} exit={{ opacity: 0, y: -12, filter: 'blur(8px)' }} transition={{ duration: .45 }}><div className="stage-heading"><ActiveIcon size={18} /><span>{active.label} / SYSTEM STATE</span></div><h3>{active.title}</h3><p>{active.copy}</p>{active.key === 'plan' && <MissionContract />}{active.key === 'validate' && <EnforcementChamber />}{active.key === 'execute' && <AirspaceMap compact />}{active.key === 'observe' && <TelemetryPanel />}{active.key === 'replay' && <Logbook />}</motion.div></AnimatePresence></div></div></section>

      <section className="mission-section studios-section" id="studios"><div className="section-intro split"><div><span className="eyebrow">02 / DERYK STUDIOS</span><h2>The parts are connected.<br /><em>The record is one.</em></h2></div><p>Console, Connector, Telemetry and Logbook are not features in a grid. They are the surfaces of one mission system.</p></div><ConnectedStudios /></section>

      <section className="mission-section safety-section" id="safety"><div className="section-intro"><span className="eyebrow">03 / SAFETY BOUNDARY</span><h2>Authority belongs<br /><em>in the system.</em></h2><p>The model may interpret. The judge may advise. Only the gate can enforce.</p></div><div className="safety-flow">{['REQUEST', 'INTERPRET', 'CHECK', 'ENFORCE', 'EXECUTE'].map((label, index) => <div className={label === 'ENFORCE' ? 'safety-step gate' : 'safety-step'} key={label}><span>{String(index + 1).padStart(2, '0')}</span><b>{label}</b>{index < 4 && <ArrowRight size={14} />}</div>)}</div><div className="safety-quote"><LockKeyhole size={22} /><div><span>ENFORCEMENTGATE / DETERMINISTIC</span><strong>Every approved mission carries a decision that can be inspected.</strong></div><Check size={22} /></div></section>

      <section className="mission-section matrix-section"><div className="section-intro split"><div><span className="eyebrow">04 / CAPABILITY MASKS</span><h2>Measure what exists.<br /><em>Name what does not.</em></h2></div><p>A connector that cannot measure a field reports Not Measured. DERYK never turns absence into a fabricated zero.</p></div><div className="matrix-comparison">{[['CERTAINTY', 45], ['LIDAR SIMULATOR', 11]].map(([name, count]) => <div className="matrix-system" key={name as string}><header><span>{name as string}</span><b>{count} / 66</b></header><div>{matrix.map((cell) => <i className={cell < (count as number) ? 'on' : ''} key={cell} title={`Telemetry field ${cell + 1}`} />)}</div><small>{count === 45 ? 'MOTOR / PID / GPS / BATTERY' : 'POSITION / VELOCITY'} <em>{66 - (count as number)} NOT MEASURED</em></small></div>)}</div></section>

      <section className="mission-section" id="logbook"><div className="section-intro split"><div><span className="eyebrow">05 / OBSERVABILITY & LOGBOOK</span><h2>DERYK remembers<br /><em>what happened.</em></h2></div><p>Telemetry is exported best-effort to an analytics logbook. It never participates in the safety path.</p></div><Logbook /></section>

      <section className="mission-faq"><div><span className="eyebrow">06 / QUESTIONS, ANSWERED</span><h2>Precision over<br />promises.</h2></div><div>{faqs.map(([question, answer], index) => <article className={openFaq === index ? 'open' : ''} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>{question}<ChevronDown size={16} /></button><p>{answer}</p></article>)}</div></section>
      <section className="mission-cta" id="connect"><span className="eyebrow">07 / START WITH PROOF</span><h2>Build autonomous systems<br /><em>you can prove safe.</em></h2><p>Bring your mission loop into focus. DERYK gives every proposal a boundary and every flight a record.</p><a className="mission-button primary" href="mailto:hello@deryk.ai">Enter mission control <ArrowRight size={15} /></a></section>
      <ReferenceSections />
    </main>
    <footer className="mission-footer"><div><Mark /><span>INTELLIGENCE INFRASTRUCTURE FOR AUTONOMOUS WORLDS</span></div><div><i className="live-dot" /> SYSTEM NOMINAL <span>© 2026 DERYK SYSTEMS</span></div></footer>
  </div>;
}

function IntelligencePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return <div className="mission-control intelligence-page" id="top">
    <header className="mission-nav"><a href="#top" aria-label="DERYK home"><Mark /></a><span className="mission-nav-status"><i /> INTELLIGENCE / DERYK-01</span><nav><a href="#loop">The loop</a><a href="#products">Products</a><a href="#worlds">Worlds</a><a href="#faq">FAQ</a><a className="mission-nav-button" href="#connect">Talk to DERYK <ArrowRight size={13} /></a></nav></header>

    <main>
      <section className="intelligence-hero"><div className="hero-editorial"><span className="eyebrow">DERYK / INTELLIGENCE INFRASTRUCTURE</span><h1>Intelligence<br /><em>for autonomous worlds.</em></h1><p>DERYK connects AI models to dynamic environments so they can understand context, maintain state, predict change, make decisions, take actions, and evaluate outcomes.</p><div className="hero-actions"><a className="mission-button primary" href="#loop">Explore the system <ArrowRight size={15} /></a><a className="mission-button text" href="#products">View product areas <ArrowDownRight size={15} /></a></div><div className="hero-footnote"><span>PHYSICAL / DIGITAL / GAMES / SIMULATION</span><span>FROM PERCEPTION TO EVALUATION</span></div></div><div className="hero-orbit"><div className="orbit-ring ring-a" /><div className="orbit-ring ring-b" /><div className="orbit-ring ring-c" /><div className="orbit-core"><Mark /><span>WORLD STATE</span><b>ONLINE</b></div><div className="orbit-node node-top">CONTEXT</div><div className="orbit-node node-right">PREDICT</div><div className="orbit-node node-bottom">ACTION</div><div className="orbit-node node-left">MEMORY</div></div></section>

      <section className="positioning-band"><span>THE MISSING OPERATING LAYER</span><h2>AI intelligence for worlds,<br /><em>not just prompts.</em></h2><p>Capable models still need a connected loop to operate continuously inside changing environments. DERYK builds that layer around them.</p></section>

      <section className="mission-section loop-section" id="loop"><div className="section-intro split"><div><span className="eyebrow">01 / THE INTELLIGENCE LOOP</span><h2>From isolated reasoning<br /><em>to continuous interaction.</em></h2></div><p>DERYK keeps the system grounded in the world around it: what has happened, what is changing, what could happen next, and what action is safe to take.</p></div><div className="loop-grid">{loop.map(({ label, detail, icon: Icon }, index) => <div className={`loop-step ${index === 5 ? 'active' : ''}`} key={label}><span>0{index + 1}</span><Icon size={18} /><b>{label}</b><small>{detail}</small>{index < loop.length - 1 && <ArrowRight size={13} />}</div>)}</div></section>

      <section className="mission-section worlds-section" id="worlds"><div className="section-intro"><span className="eyebrow">02 / ONE FOUNDATION, MANY WORLDS</span><h2>Meet intelligence<br /><em>where it operates.</em></h2><p>The same high-level intelligence concepts can move across physical, simulated, gaming, and digital environments.</p></div><div className="world-grid">{environments.map(({ label, title, copy, icon: Icon }) => <article className="world-card" key={label}><div><Icon size={20} /><span>{label}</span></div><h3>{title}</h3><p>{copy}</p><ArrowDownRight size={18} /></article>)}</div></section>

      <section className="mission-section products-section" id="products"><div className="section-intro split"><div><span className="eyebrow">03 / DERYK PRODUCT AREAS</span><h2>Infrastructure that<br /><em>meets the world.</em></h2></div><p>Three product areas share one intelligence foundation, so teams can build for the environment in front of them without starting from zero.</p></div><div className="product-grid">{productAreas.map((area, index) => <article className={`product-area area-${index + 1}`} key={area.label}><span>{area.label}</span><h3>{area.title}</h3><p>{area.copy}</p><div className="product-list">{area.products.map((product) => <div key={product}><Check size={14} /> {product}</div>)}</div><a href="#connect">Explore area <ArrowRight size={14} /></a></article>)}</div></section>

      <section className="mission-section capability-section"><div className="capability-copy"><span className="eyebrow">04 / SHARED CAPABILITIES</span><h2>Built around<br /><em>the whole loop.</em></h2><p>DERYK is model-agnostic infrastructure for systems that need more than inference: persistent state, temporal understanding, environment interaction, evaluation, and controlled execution.</p><a className="mission-button primary" href="#connect">Build with DERYK <ArrowRight size={15} /></a></div><div className="capability-panel"><div className="capability-panel-head"><span>INTELLIGENCE FOUNDATION</span><b>8 CONNECTED LAYERS</b></div>{['Multimodal perception & scene understanding', 'Persistent memory & state management', 'Temporal reasoning & world-state tracking', 'Prediction & outcome modelling', 'Decision and action interfaces', 'Simulation, evaluation & safety'].map((item, index) => <div className="capability-row" key={item}><span>0{index + 1}</span><b>{item}</b><ArrowRight size={14} /></div>)}</div></section>

      <section className="mission-section proof-section"><div className="proof-mark"><Mark /><span>WORLD STATE / 24:07:18</span></div><div><span className="eyebrow">05 / A PRACTICAL STARTING POINT</span><h2>Give your AI<br /><em>a world to work in.</em></h2><p>From robotics and drones to games, simulation, and enterprise workflows, DERYK helps intelligent systems move from understanding to accountable action.</p></div></section>

      <section className="mission-faq" id="faq"><div><span className="eyebrow">06 / QUESTIONS, ANSWERED</span><h2>Precision over<br />promises.</h2></div><div>{faqs.map(([question, answer], index) => <article className={openFaq === index ? 'open' : ''} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>{question}<ChevronDown size={16} /></button><p>{answer}</p></article>)}</div></section>
      <section className="mission-cta" id="connect"><span className="eyebrow">07 / START WITH THE WORLD</span><h2>Build systems that<br /><em>can keep up.</em></h2><p>Tell us what your intelligent system needs to understand, remember, predict, and do.</p><a className="mission-button primary" href="mailto:hello@deryk.ai">Talk to DERYK <ArrowRight size={15} /></a></section>
    </main>
    <footer className="mission-footer"><div><Mark /><span>INTELLIGENCE INFRASTRUCTURE FOR AUTONOMOUS WORLDS</span></div><div><i className="live-dot" /> SYSTEM NOMINAL <span>© 2026 DERYK SYSTEMS</span></div></footer>
  </div>;
}

function TelemetryPanel() { return <div className="telemetry-panel"><div className="telemetry-chart"><svg viewBox="0 0 600 180" preserveAspectRatio="none"><path d="M0 145 C50 125 75 150 115 92 S180 125 225 72 S285 105 335 48 S390 75 445 35 S530 65 600 18" /><path className="secondary" d="M0 100 C80 70 110 120 180 94 S280 130 350 82 S450 105 600 58" /></svg><span>ALTITUDE / METRES</span><b>124.6</b></div><div className="telemetry-values"><span>VELOCITY <b>18.4 m/s</b></span><span>GPS <b>18 SAT</b></span><span>BATTERY <b>87%</b></span><span>HDG <b>047°</b></span><span>SIGNAL <b>STRONG</b></span><span>LATENCY <b>018 ms</b></span></div></div>; }

function ReferenceSections() {
  const stack = ['Perception', 'Representation', 'World Model', 'Prediction', 'Action Model', 'Planning', 'Safety', 'Execution'];
  const areas = [
    ['AGI', 'Systems that reason, plan, coordinate, and act across time.'],
    ['PHYSICAL', 'AI for the real world: perception, prediction, and safe action.'],
    ['NEURAL', 'Reusable learning systems for multimodal intelligence.'],
    ['GAMING', 'Agents that understand, adapt, and bring worlds to life.'],
    ['PLATFORM', 'The infrastructure connecting intelligence to everything.'],
  ];
  return <>
    <section className="reference-principles"><div><span className="reference-kicker">TRUSTED ENGINEERING PRINCIPLES</span><h2>Built across<br />the autonomy stack.</h2></div><p>From foundational models to real-world applications, DERYK builds the technology infrastructure and environments for a more capable and beneficial future.</p><div className="principle-tags">{['AI SYSTEMS', 'WORLD MODELS', 'AGENTS', 'SIMULATION', 'ROBOTICS', 'SAFETY', 'EVALUATION', 'MEMORY'].map((item) => <span key={item}><CircleDot size={13} />{item}</span>)}</div></section>
    <section className="reference-thesis"><div><span className="reference-kicker">OUR THESIS</span><h2>AI has learned<br />to generate.<br /><em>The next step is<br />to understand and act.</em></h2></div><div className="thesis-copy"><p>The world is dynamic, complex, and physical. True intelligence requires more than language. It requires an understanding of the world, the ability to predict what happens next, and the capability to choose and execute actions safely.</p><a className="reference-link" href="#architecture">Our vision <ArrowRight size={14} /></a></div><div className="world-loop"><div className="loop-globe"><Mark /><small>INTELLIGENCE LOOP</small></div>{['OBSERVE', 'MODEL', 'DECIDE', 'LEARN', 'ACT', 'PREDICT'].map((item, index) => <span className={`world-loop-label label-${index}`} key={item}>{item}<small>{['Multimodal perception', 'World representation', 'Action intelligence', 'Continuous improvement', 'Safe execution', 'Possible futures'][index]}</small></span>)}</div></section>
    <ImmersiveMissionReplay />
    <section className="reference-architecture" id="architecture"><div className="reference-heading"><span className="reference-kicker">OUR ARCHITECTURE</span><h2>The intelligence stack</h2><span>A unified architecture from perception to action.</span></div><div className="stack-layout"><div className="stack-worlds"><span>REAL-TIME<br />ENVIRONMENTS</span><i />PHYSICAL WORLD<br /><small>Robots, drones, machines</small><i />VIRTUAL WORLDS<br /><small>Simulation, games</small><i />COGNITIVE SYSTEMS<br /><small>Agents, tools, workflows</small></div><div className="stack-layers">{stack.map((item, index) => <div key={item} style={{ '--layer': index } as React.CSSProperties}><span>0{index + 1}</span><b>{item}</b><small>{['Multimodal inputs', 'Unified state', 'Understanding dynamics', 'Possible futures', 'What can we do', 'The best path', 'Validation and constraints', 'Request-ready action'][index]}</small></div>)}</div><div className="stack-result">ONE<br /><b>CONTINUOUS<br />LEARNING LOOP</b><ArrowRight size={18} /></div></div></section>
    <section className="reference-areas" id="worlds"><div className="reference-heading"><span className="reference-kicker">OUR INTELLIGENCE AREAS</span><h2>One architecture. Many worlds.</h2><span>Explore all areas <ArrowRight size={13} /></span></div><div className="area-cards">{areas.map(([name, copy], index) => <article key={name} className={`area-card area-image-${index}`}><div className="area-art" /><h3>{name}</h3><p>{copy}</p><ArrowRight size={15} /></article>)}</div></section>
    <section className="reference-action" id="capabilities"><div className="reference-heading"><span className="reference-kicker">FROM SENSORS TO ACTION</span><h2>From perception to real-world impact.</h2><span>Learn more <ArrowRight size={13} /></span></div><div className="action-steps">{['Sense', 'Understand', 'Predict', 'Decide', 'Execute'].map((item, index) => <div key={item}><span>0{index + 1}</span><div className={`action-art action-art-${index}`} /><h3>{item}</h3><p>{['Cameras, radar, LiDAR, GPS, telemetry', 'World models that create context', 'Future states, risks, and outcomes', 'Action models & planning', 'Rules, safety, deployment'][index]}</p></div>)}</div></section>
    <section className="reference-careers" id="careers"><div><span className="reference-kicker">CAREERS</span><h2>Build intelligence<br />for the real world.</h2><p>Join a team of researchers, engineers, and builders working on some of the most important challenges of our time.</p><div><a className="reference-button" href="mailto:hello@deryk.ai">View open roles <ArrowRight size={13} /></a><a className="reference-text-link" href="#top">Life at DERYK</a></div></div></section>
  </>;
}

export default DerykPage;
