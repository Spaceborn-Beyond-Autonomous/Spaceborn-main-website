import CompanyPageLayout from '../../../components/CompanyPageLayout';

export const metadata = {
  title: 'GPS-Denied Navigation | Spaceborn',
  description: 'Navigate Anywhere. Even Without GPS.',
};

export default function GPSDeniedNavigationPage() {
  return (
    <CompanyPageLayout
      title="GPS-DENIED NAVIGATION"
      subtitle="Navigate Anywhere. Even Without GPS."
      paragraphs={[
        'GPS-Denied Navigation is Spaceborn\'s navigation framework designed to enable autonomous systems to operate reliably in environments where Global Positioning System (GPS) signals are unavailable, unreliable, degraded, or intentionally disrupted. By combining multiple sensing technologies with intelligent localization algorithms, the platform ensures continuous navigation and mission execution even in the most challenging operating conditions.',
        'While GPS has become the foundation of modern autonomous navigation, it is not always available. Urban canyons, dense forests, underground facilities, indoor environments, tunnels, mountainous terrain, and electronic warfare scenarios can all interfere with satellite signals. In many defense and industrial applications, GPS may also be intentionally jammed or spoofed, making conventional navigation systems ineffective. GPS-Denied Navigation addresses these challenges by allowing autonomous platforms to determine their position using onboard sensors rather than relying solely on external satellite infrastructure.',
        'The system fuses information from multiple sensor sources—including LiDAR, cameras, inertial measurement units (IMUs), wheel encoders, radar, barometers, and visual landmarks—to continuously estimate the platform\'s location and orientation. Advanced localization and mapping algorithms analyze the surrounding environment, enabling autonomous systems to recognize previously visited locations, build maps in real time, and navigate safely through unfamiliar terrain.',
        'Integrated within the Spaceborn ecosystem, GPS-Denied Navigation works alongside the LiDAR Simulator and Reality Engine to develop and validate localization algorithms under realistic conditions. Engineers can recreate complex environments where satellite signals are intentionally removed, evaluate navigation performance under varying sensor conditions, and optimize algorithms before deployment to physical hardware. Once validated, ANSA executes these navigation capabilities during real-world missions while Fleet Manager provides operators with continuous mission monitoring and telemetry.',
        'The platform is designed to support a wide range of autonomous applications, including drones operating indoors, warehouse robots, defense reconnaissance systems, underground inspection vehicles, search-and-rescue missions, and future space exploration platforms where conventional GPS infrastructure does not exist.',
        'As autonomous systems increasingly move into environments where satellite navigation cannot be guaranteed, GPS-Denied Navigation provides the resilience, reliability, and intelligence required for safe and continuous autonomous operation, ensuring that missions can continue regardless of external positioning infrastructure.',
      ]}
      sections={[
        {
          title: 'Key Capabilities',
          items: [
            'Sensor Fusion-Based Localization',
            'Visual-Inertial Navigation',
            'LiDAR-Based Mapping and Localization',
            'Simultaneous Localization and Mapping (SLAM)',
            'Landmark Recognition',
            'Dead Reckoning',
            'Obstacle-Aware Path Planning',
            'Real-Time Position Estimation',
            'GPS Failure Detection',
            'Autonomous Mission Continuity',
          ],
        },
        {
          title: 'Applications',
          items: [
            'Indoor drone navigation',
            'Underground inspections',
            'Warehouse robotics',
            'Defense and tactical operations',
            'Search and rescue missions',
            'Industrial automation',
            'Mining operations',
            'Planetary and lunar exploration',
          ],
        },
        {
          title: 'Related Platforms',
          items: [
            'ANSA',
            'Reality Engine',
            'LiDAR Simulator',
            'Digital Twins',
            'Certanity',
            'Fleet Manager',
          ],
        },
      ]}
    />
  );
}
