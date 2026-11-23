'use client';
import { useState, useRef, type KeyboardEvent } from 'react';
import Link from 'next/link';
import LoopingVideo from './LoopingVideo';
import Footer from './Footer';
import Navbar from './Navbar';
import Icon from './Icon';
import styles from './HomePage.module.css';

const CLD = 'https://res.cloudinary.com/kpa1wv3h';
const ARIA_IMAGE = `${CLD}/image/upload/v1783382813/spaceborn_assets/ESC%2050A.png`;
const cldVideo = (path: string, compact = false) =>
  `${CLD}/video/upload/${compact ? 'c_limit,w_1440/' : ''}f_auto/q_auto:best/${path}.mp4`;
const cldPoster = (path: string) =>
  `${CLD}/video/upload/so_1/f_auto/q_auto:best/${path}.jpg`;

type Tile = {
  id: string;
  name: string;
  desc: string;
  href: string;
  size: 'square' | 'wide' | 'tall';
  image: string;
  alt: string;
  video?: string;
  compactVideo?: string;
  fit?: 'cover' | 'contain';
  position?: string;
};

const TILES: Tile[] = [
  {
    id: 'flight-controller',
    name: 'Flight Controller',
    desc: 'Flight control and onboard autonomy, powered by ANSA on ELARA hardware.',
    href: '/systems/flight-cont',
    size: 'wide',
    image: cldPoster('v1785868057/VideoProject_hzk4kg'),
    video: cldVideo('v1785868057/VideoProject_hzk4kg'),
    alt: 'ELARA flight controller mounted on a drone frame',
  },
  {
    id: 'elara',
    name: 'ELARA SB2',
    desc: 'High-performance STM32H7 flight controller.',
    href: '/systems/flight-cont',
    size: 'tall',
    image: '/media/home/elara-sb2.webp',
    video: '/media/home/elara-sb2.mp4',
    alt: 'ELARA SB2 flight controller on a dark surface',
  },
  {
    id: 'aria',
    name: 'ARIA 50A',
    desc: 'Precise motor control with live current feedback to the flight controller.',
    href: '/systems/Esc-sys',
    size: 'square',
    image: ARIA_IMAGE,
    alt: 'ARIA 50A electronic speed controller PCB',
    fit: 'contain',
  },
  {
    id: 'hpu',
    name: 'HPU',
    desc: 'Brings camera, LiDAR, radar, and GNSS data together for onboard AI.',
    href: '/systems/edgecompute',
    size: 'square',
    image: '/media/home/hpu.webp',
    alt: 'HPU edge compute board, 3D render',
    fit: 'contain',
  },
  {
    id: 'deryk',
    name: 'DERYK',
    desc: 'Turns operator intent into executable machine action.',
    href: 'https://spaceborn-web.vercel.app/',
    size: 'wide',
    image: cldPoster('v1785966524/womanAndDrone_xjbmqm'),
    video: cldVideo('v1785966524/womanAndDrone_xjbmqm'),
    compactVideo: cldVideo('v1785966524/womanAndDrone_xjbmqm', true),
    alt: 'Operator collaborating with autonomous drone platform in the field',
  },
  {
    id: 'certanity',
    name: 'CERTANITY',
    desc: 'Test and validate autonomous systems in 24+ simulation domains before deployment.',
    href: 'https://certanity.com/',
    size: 'square',
    image: cldPoster('v1785781462/Quadcopter_drone_hovers_in_tunnel_202608030904_hvg4oj'),
    video: cldVideo('v1785781462/Quadcopter_drone_hovers_in_tunnel_202608030904_hvg4oj'),
    alt: 'Quadcopter holding position inside a concrete tunnel',
    position: '68% 50%',
  },
  {
    id: 'elio',
    name: 'SB ELIO',
    desc: 'Dual-MCU development board. ESP32-S3 and RP2350 on one platform.',
    href: '/systems/embedded-sdk',
    size: 'square',
    image: '/media/home/sb-elio.webp',
    alt: 'SB ELIO development board',
    fit: 'contain',
  },
  {
    id: 'gcs',
    name: 'GROUND CONTROL',
    desc: 'Monitor live attitude and telemetry through a 3D digital twin at 50 Hz.',
    href: '/platforms/missionstudio',
    size: 'wide',
    image: '/media/home/gcs-twin.webp',
    video: '/media/home/gcs-twin.mp4',
    alt: 'ANSA digital twin cockpit mirroring a hand-tilted IMU board on the attitude indicator and 3D drone model',
  },
];

type Board = {
  id: string;
  tab: string;
  name: string;
  kind: string;
  desc: string;
  specs: [string, string][];
  href: string;
  image: { src: string; alt: string; width: number; height: number; fit?: 'cover' | 'contain' };
};

const BOARDS: Board[] = [
  {
    id: 'sb0',
    tab: 'ELARA SB0',
    name: 'ELARA SB0',
    kind: 'Flight controller',
    desc: '4-layer STM32F7 flight controller for advanced autonomous drones and research platforms.',
    specs: [
      ['MCU family', 'STM32F7'],
      ['PCB stack-up', '4-LAYER'],
      ['Autonomy stack', 'ANSA VIA HAL'],
    ],
    href: '/systems/flight-cont',
    image: { src: '/media/home/elara-sb0-wide.webp', alt: 'ELARA SB0 flight controller, top view', width: 1280, height: 960 },
  },
  {
    id: 'sb1',
    tab: 'ELARA SB1',
    name: 'ELARA SB1',
    kind: 'Flight controller',
    desc: '6-layer STM32F7 flight controller. Two additional copper layers over SB0 for power and signal routing.',
    specs: [
      ['MCU family', 'STM32F7'],
      ['PCB stack-up', '6-LAYER'],
      ['Autonomy stack', 'ANSA VIA HAL'],
    ],
    href: '/systems/flight-cont',
    image: { src: '/media/home/elara-sb1.webp', alt: 'ELARA SB1 flight controller wired on the bench', width: 1190, height: 896 },
  },
  {
    id: 'sb2',
    tab: 'ELARA SB2',
    name: 'ELARA SB2',
    kind: 'Flight controller',
    desc: 'High-performance STM32H7 controller with increased processing headroom, expanded connectivity, and support for complex AI workloads.',
    specs: [
      ['MCU family', 'STM32H7'],
      ['Class', 'HIGH-PERFORMANCE'],
      ['Autonomy stack', 'ANSA VIA HAL'],
    ],
    href: '/systems/flight-cont',
    image: { src: '/media/home/elara-sb2.webp', alt: 'ELARA SB2 flight controller', width: 1280, height: 720 },
  },
  {
    id: 'aria',
    tab: 'ARIA 50A',
    name: 'ARIA 50A',
    kind: 'Electronic speed controller',
    desc: 'Electronic speed controller with live current telemetry streamed back to the flight controller.',
    specs: [
      ['Continuous current', '50 A'],
      ['Firmware', 'AM32'],
      ['Input voltage', '3S – 6S LIPO'],
      ['Telemetry', 'LIVE CURRENT'],
      ['Board dimensions', '37 × 42.5 MM'],
    ],
    href: '/systems/Esc-sys',
    image: {
      src: ARIA_IMAGE,
      alt: 'ARIA 50A electronic speed controller PCB',
      width: 2000,
      height: 2000,
    },
  },
];

type Scenario = {
  id: string;
  tab: string;
  title: string;
  desc: string;
  readouts: [string, string][];
  video: { src: string; poster: string; compactSrc?: string };
};

const SCENARIOS: Scenario[] = [
  {
    id: 'tunnel-drone',
    tab: 'GPS-denied',
    title: 'GPS-denied tunnel navigation',
    desc: 'When satellites disappear, autonomy takes over. Optical flow and LiDAR point clouds hold trajectory through unmapped subterranean corridors.',
    readouts: [['GNSS', 'DENIED'], ['HOLD', 'OPTICAL FLOW'], ['TRAJECTORY', 'LOCKED']],
    video: {
      src: cldVideo('v1785966759/tunnelDrone_nhqulg'),
      compactSrc: cldVideo('v1785966759/tunnelDrone_nhqulg', true),
      poster: cldPoster('v1785966759/tunnelDrone_nhqulg'),
    },
  },
  {
    id: 'drone-swarm',
    tab: 'Swarm',
    title: '128-unit swarm coordination',
    desc: 'Distributed consensus and decentralized collision avoidance. Autonomous agents negotiate airspace and execute synchronized group missions.',
    readouts: [['AGENTS', '128'], ['CONSENSUS', 'SYNCED'], ['LINK', 'MESH 5.8GHZ']],
    video: {
      src: cldVideo('v1786023546/swarmFleet_x4tlds'),
      compactSrc: cldVideo('v1786023546/swarmFleet_x4tlds', true),
      poster: cldPoster('v1786023546/swarmFleet_x4tlds'),
    },
  },
  {
    id: 'factory',
    tab: 'Industrial inspection',
    title: 'Industrial inspection cell',
    desc: 'Four robot stations, a conveyor, and an inspection line in a simulated factory, proven before any arm moves on the floor.',
    readouts: [['STATIONS', '4'], ['LINE', 'INSPECTION'], ['DOMAIN', 'INDUSTRIAL']],
    video: {
      src: '/media/home/sim-factory.mp4',
      poster: '/media/home/sim-factory.webp',
    },
  },
];

/* Logo heights are set by eye in em, so each mark carries the same visual weight.
   Companies without a verified official logo stay as text. */
const PARTNERS: { name: string; logo?: string; width?: number; height?: number; em?: number }[] = [
  { name: 'Tata Electronics', logo: '/images/partners/tata-electronics.svg', width: 228, height: 20, em: 0.85 },
  { name: 'Weebit Nano', logo: '/images/partners/weebit-nano.svg', width: 190, height: 40, em: 1.5 },
  { name: 'JLCPCB', logo: '/images/partners/jlcpcb.png', width: 316, height: 70, em: 1.3 },
  { name: 'NVIDIA', logo: '/images/partners/nvidia.svg', width: 656, height: 120, em: 1.3 },
];

function SectionHead({ title, lede }: { title: string; lede: string }) {
  return (
    <header className={styles.sectionHead}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <p className={styles.sectionLede}>{lede}</p>
    </header>
  );
}

function Hero() {
  return (
    <section className={styles.hero} id="releases" aria-labelledby="home-title">
      <LoopingVideo className={styles.heroVideo} src="/media/home/hero-sb1.mp4"
        poster="/media/home/hero-sb1.webp" aria-hidden="true" />
      <div className={styles.heroVignette} />
      <div className={`${styles.container} ${styles.heroContent}`}>
        <h1 className={styles.heroTitle} id="home-title">Build autonomous<br className={styles.heroBreak} /> machines.</h1>
        <p className={styles.heroSub}>Autonomy software, simulation, and flight hardware in one Spaceborn stack.</p>
      </div>
    </section>
  );
}

const ADVANTAGES = [
  { title: 'Build faster', icon: 'gauge-high', desc: 'Repeat tests in simulation to find and fix issues before a hardware trial.', image: '/media/home/sim-factory.webp', alt: 'Spaceborn industrial inspection simulation' },
  { title: 'Built for real machines', icon: 'microchip', desc: 'Ground Control mirrors live attitude and telemetry in a digital twin.', image: '/media/home/gcs-twin.webp', alt: 'Spaceborn Ground Control telemetry and digital twin' },
  { title: 'More accurate', icon: 'crosshairs', desc: 'Compare outcomes across repeatable tests as conditions change.' },
  { title: 'One connected stack', icon: 'diagram-project', desc: 'Test with Certanity, run ANSA on hardware, and turn intent into action with DERYK.' },
  { title: 'AI for operators', icon: 'brain', desc: 'Interpret operator intent and review what happened in a test before the next run.' },
  { title: 'Ready to scale', icon: 'globe', desc: 'Carry forward scenarios, software, and hardware experience as new machines come online.' },
];

function WhySpaceborn() {
  return (
    <section className={styles.section} id="why-spaceborn">
      <div className={styles.container}>
        <SectionHead title="Why Spaceborn?" lede="Find problems earlier and carry what you learn in simulation into hardware testing and deployment." />
        <div className={styles.advantages}>
          {ADVANTAGES.map(({ title, icon, desc, image, alt }) => (
            <article key={title} className={`du-card du-card-border ${styles.advantage} ${image ? styles.advantageFeatured : ''}`}>
              <div className={`du-card-body ${styles.advantageBody}`}>
                <span className={styles.advantageIcon}><Icon name={icon} /></span>
                <h3 className="du-card-title">{title}</h3>
                <p>{desc}</p>
              </div>
              {image && <img src={image} alt={alt} loading="lazy" decoding="async" className={styles.advantageImage} />}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductTile({ tile }: { tile: Tile }) {
  const mediaClassName = tile.fit === 'contain' ? styles.tileImageContain : styles.tileImage;
  const position = tile.position ? { objectPosition: tile.position } : undefined;
  const body = (
    <div className={`du-card du-card-border ${styles.tile}`}>
      <div className={styles.tileMedia}>
        {tile.video ? (
          <LoopingVideo className={mediaClassName} style={position} src={tile.video}
            compactSrc={tile.compactVideo} poster={tile.image} aria-hidden="true" />
        ) : (
          <img className={mediaClassName} src={tile.image} alt={tile.alt}
            loading="lazy" decoding="async" style={position} />
        )}
      </div>
      <div className={`du-card-body ${styles.tileText}`}>
        <h3 className="du-card-title">{tile.name}</h3>
        <p>{tile.desc}</p>
      </div>
      <Icon name="circle-arrow-right" className={styles.tileArrow} />
    </div>
  );

  return (
    <div className={`${styles.tileCell} ${styles[tile.size]}`} data-tile={tile.id}>
      {tile.href.startsWith('http') ? (
        <a href={tile.href} target="_blank" rel="noopener noreferrer" className={styles.tileLink}>{body}</a>
      ) : (
        <Link href={tile.href} className={styles.tileLink}>{body}</Link>
      )}
    </div>
  );
}

function ProductGrid() {
  return (
    <section className={styles.section} id="platforms">
      <div className={styles.container}>
        <SectionHead
          title="One stack from software to silicon"
          lede="Each product has a role in getting the machine into the field. ANSA runs the control software, DERYK translates operator intent into machine actions, and Certanity lets engineers test those behaviors in simulation. Flight controllers, motor controllers, and onboard compute bring the workflow onto physical hardware."
        />
        <div className={styles.tiles}>
          {TILES.map((tile) => (
            <ProductTile key={tile.id} tile={tile} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowcaseTabs({
  items, label, prefix, active, onSelect, className,
}: {
  items: { id: string; tab: string }[];
  label: string;
  prefix: string;
  active: number;
  onSelect: (index: number) => void;
  className: string;
}) {
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    let next: number;
    if (event.key === 'ArrowRight') next = (active + 1) % items.length;
    else if (event.key === 'ArrowLeft') next = (active + items.length - 1) % items.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = items.length - 1;
    else return;

    event.preventDefault();
    onSelect(next);
    buttons.current[next]?.focus();
  }

  return (
    <div className={`du-tabs du-tabs-box ${styles.tabs} ${className}`} role="tablist"
      aria-label={label} onKeyDown={handleKeyDown}>
      {items.map((item, index) => (
        <button key={item.id} id={`${prefix}-tab-${item.id}`} type="button" role="tab"
          ref={(button) => { buttons.current[index] = button; }}
          className={`du-tab ${styles.tab} ${index === active ? 'du-tab-active' : ''}`}
          aria-selected={index === active} aria-controls={`${prefix}-panel-${item.id}`}
          tabIndex={index === active ? 0 : -1} onClick={() => onSelect(index)}>
          {item.tab}
        </button>
      ))}
    </div>
  );
}

function HardwareLab() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section} id="systems">
      <div className={styles.container}>
        <SectionHead
          title="Flight control up close"
          lede="Flight controllers run the control software, and electronic speed controllers drive the motors. Compare the ELARA boards that run ANSA and the ARIA 50A speed controller that feeds live current readings back to the flight controller. Open the specifications to see what fits your build."
        />

        <ShowcaseTabs items={BOARDS} label="Hardware" prefix="hw" active={active}
          onSelect={setActive} className={styles.hardwareTabs} />
        <div className={`du-card du-card-border ${styles.showcase}`}>
          {BOARDS.map((board, index) => (
            <div key={board.id} className={`${styles.showcasePanel} ${styles.lab}`}
              role="tabpanel" data-board={board.id} id={`hw-panel-${board.id}`} aria-labelledby={`hw-tab-${board.id}`}
              aria-hidden={index !== active} inert={index !== active}>
              <div className={styles.labMedia}>
                <img className={styles.labImage} src={board.image.src} alt={board.image.alt}
                  width={board.image.width} height={board.image.height} decoding="async" loading="lazy" />
              </div>
              <div className={`du-card-body ${styles.labBody}`}>
                <div className={styles.labIntro}>
                  <h3 className={`du-card-title ${styles.labTitle}`}>{board.name}</h3>
                  <p className={styles.labKind}>{board.kind}</p>
                  <p className={styles.labDesc}>{board.desc}</p>
                </div>
                <table className={`du-table ${styles.specTable}`}>
                  <thead>
                    <tr>
                      <th scope="col">Parameter</th>
                      <th scope="col">Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {board.specs.map(([param, spec]) => (
                      <tr key={param}>
                        <th scope="row">{param}</th>
                        <td>{spec}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Link href={board.href} className={`du-btn du-btn-link ${styles.labLink}`}>
                  Full documentation <Icon name="circle-arrow-right" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RealityEngine() {
  const [active, setActive] = useState(0);
  const [visited, setVisited] = useState([0]);

  function selectScenario(index: number) {
    setActive(index);
    setVisited((previous) => previous.includes(index) ? previous : [...previous, index]);
  }

  return (
    <section className={styles.section} id="simulation">
      <div className={styles.container}>
        <SectionHead title="Prove it before deployment" lede="Explore three of Certanity’s 24+ simulation domains with Spaceborn’s existing demonstration footage." />
        <ShowcaseTabs items={SCENARIOS} label="Simulation scenarios" prefix="sim" active={active}
          onSelect={selectScenario} className={styles.scenarioTabs} />
        <div className={`du-card du-card-border ${styles.showcase}`}>
          {SCENARIOS.map((scenario, index) => {
            const selected = active === index;
            return (
              <div key={scenario.id} className={`${styles.showcasePanel} ${styles.engine}`}
                role="tabpanel" id={`sim-panel-${scenario.id}`} aria-labelledby={`sim-tab-${scenario.id}`}
                aria-hidden={!selected} inert={!selected} tabIndex={selected ? 0 : -1}>
                <div className={styles.viewport}>
                  <img className={styles.viewportPoster} src={scenario.video.poster} alt=""
                    loading="lazy" decoding="async" />
                  {visited.includes(index) && (
                    <LoopingVideo className={styles.viewportVideo} src={scenario.video.src}
                      compactSrc={scenario.video.compactSrc} active={selected}
                      poster={scenario.video.poster} aria-label={scenario.title} />
                  )}
                </div>
                <div className={`du-card-body ${styles.scenarioCopy}`}>
                  <h3>{scenario.title}</h3>
                  <p>{scenario.desc}</p>
                  <dl className={styles.readouts}>
                    {scenario.readouts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
                  </dl>
                </div>
              </div>
            );
          })}
        </div>
        <ul className={styles.partners} aria-label="Key customers and partners">
          {PARTNERS.map((partner) => (
            <li key={partner.name}>
              {partner.logo ? <img src={partner.logo} alt={partner.name} width={partner.width} height={partner.height}
                loading="lazy" decoding="async" style={{ height: `${partner.em}em` }} /> : partner.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const PLATFORM_LAYERS = [
  { name: 'AI', icon: 'brain', desc: 'Turn operator intent into actions the machine can execute.' },
  { name: 'Software', icon: 'code', desc: 'Run the control logic and process the data from onboard sensors.' },
  { name: 'Simulation', icon: 'layer-group', desc: 'Repeat the same scenario to see how a change affects performance.' },
  { name: 'Hardware', icon: 'microchip', desc: 'Connect controllers, onboard compute, and motors on the physical machine.' },
];

function TheProblem() {
  return (
    <section className={styles.section} id="how-the-stack-fits" aria-label="The problem Spaceborn solves">
      <div className={styles.container}>
        <SectionHead
          title="How the stack fits together"
          lede="A drone, a rover, and an industrial robot do different jobs, yet their teams face the same integration work. They have to connect sensors and controllers, adapt software to the machine, and set up tests to see how it behaves. When these pieces live in separate tools, each new machine can mean rebuilding much of the same stack."
        />
        <div className={styles.platformDiagram}>
          <ul className={styles.platformLayers}>
            {PLATFORM_LAYERS.map(({ name, icon, desc }) => (
              <li key={name} className={styles.platformLayerSlot}>
                <div className={`du-aura du-aura-glow ${styles.platformAura}`}>
                  <div className={`du-card du-card-side du-card-border ${styles.platformLayer}`}>
                    <span className={styles.platformIcon} aria-hidden="true">
                      <Icon name={icon} />
                    </span>
                    <div className={`du-card-body ${styles.platformLayerBody}`}>
                      <h3 className={`du-card-title ${styles.platformLayerTitle}`}>{name}</h3>
                      <p>{desc}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.platformConnection} aria-hidden="true">
            <span><Icon name="arrow-down" /></span>
          </div>
          <div className={`du-aura du-aura-glow ${styles.platformAura} ${styles.platformSummaryAura}`}>
            <div className={`du-card du-card-border du-card-body ${styles.platformSummary}`}>
              <h3 className="du-card-title">One connected Spaceborn platform</h3>
              <p>Spaceborn brings those four layers into a single workflow. Test how the control software responds in a simulated environment, then carry that work forward as you validate it on real hardware. Your team can spend more time on what makes the machine unique.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className={styles.closing} id="simulators-hub">
      <span id="thoth" />
      <div className={`${styles.container} ${styles.closingInner}`}>
        <div>
          <h2 className={styles.closingTitle}>Build with Spaceborn.</h2>
          <p className={`${styles.sectionLede} ${styles.closingLede}`}>
            Tell our engineering team what you’re building and where you need help, whether you’re choosing
            hardware, planning simulation tests, or preparing a prototype for field trials.
          </p>
        </div>
        <a
          href="https://www.linkedin.com/in/adarsh-kumar-ab8111377?originalSubdomain=in"
          target="_blank"
          rel="noopener noreferrer"
          className={`du-btn du-btn-primary ${styles.ctaButton} ${styles.ctaPrimary}`}
        >
          Contact engineering <Icon name="arrow-right" />
        </a>
      </div>
    </section>
  );
}

export default function HomePage({ fontClassName }: { fontClassName: string }) {
  return (
    <div className={`${styles.page} ${fontClassName}`}>
      <Navbar hideOnScroll={false} />

      <main data-theme="spaceborn">
        <Hero />
        <WhySpaceborn />
        <ProductGrid />
        <RealityEngine />
        <HardwareLab />
        <TheProblem />
        <Closing />
      </main>

      <Footer isHome />
    </div>
  );
}
