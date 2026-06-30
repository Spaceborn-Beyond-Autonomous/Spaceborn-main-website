import CompanyPageLayout from '../../../components/CompanyPageLayout';

export const metadata = {
  title: 'Defense | Spaceborn',
  description: 'Autonomous Technologies for Mission-Critical Operations.',
};

export default function DefensePage() {
  return (
    <CompanyPageLayout
      title="DEFENSE"
      subtitle="Autonomous Technologies for Mission-Critical Operations."
      paragraphs={[
        'Spaceborn develops advanced autonomy technologies that support the evolving needs of modern defense organizations. By combining intelligent software, realistic simulation, resilient navigation, and scalable autonomous systems, Spaceborn enables defense agencies to design, validate, and deploy mission-ready solutions capable of operating in complex and contested environments.',
        'Modern defense operations demand systems that can adapt rapidly to changing conditions while reducing operational risk and improving mission effectiveness. Autonomous drones, robotic platforms, and intelligent surveillance systems are becoming increasingly important for reconnaissance, logistics, perimeter security, disaster response, and tactical support. Spaceborn provides the software infrastructure that enables these systems to operate reliably through intelligent decision-making, real-time perception, and mission automation.',
        'A core advantage of the Spaceborn ecosystem is its simulation-first approach. Before autonomous systems are deployed in the field, missions can be designed and validated within high-fidelity virtual environments using Certanity and Reality Engine. Developers can simulate complex terrains, changing weather, GPS-denied environments, communication failures, and dynamic mission scenarios, allowing organizations to evaluate system performance without exposing personnel or equipment to unnecessary risk.',
        'ANSA provides the autonomy layer responsible for navigation, mission execution, obstacle avoidance, sensor fusion, and autonomous decision-making. Combined with Fleet Manager, operators can monitor multiple autonomous assets simultaneously, distribute missions across fleets, analyze operational telemetry, and maintain situational awareness from a centralized command environment.',
        'Spaceborn technologies also support operations in environments where conventional satellite navigation cannot be relied upon. Through advanced sensor fusion, LiDAR-based localization, visual navigation, and inertial positioning, autonomous platforms can continue operating even when GPS signals are unavailable, degraded, or intentionally disrupted. This resilience is critical for modern tactical operations where electronic interference is increasingly common.',
        'The modular architecture of the Spaceborn ecosystem enables defense organizations, research laboratories, and system integrators to build solutions tailored to specific operational requirements while maintaining interoperability across multiple hardware platforms. Whether supporting surveillance drones, unmanned ground vehicles, autonomous logistics systems, or future collaborative swarms, Spaceborn provides a scalable software foundation capable of adapting to rapidly changing mission needs.',
        'As defense technology continues to evolve, Spaceborn remains committed to advancing safe, reliable, and intelligent autonomy that enhances operational capability while reducing complexity throughout the entire system lifecycle.',
      ]}
      sections={[
        {
          title: 'Key Capabilities',
          items: [
            'Autonomous Mission Execution',
            'High-Fidelity Mission Simulation',
            'GPS-Denied Navigation',
            'Multi-Vehicle Coordination',
            'Real-Time Fleet Monitoring',
            'Sensor Fusion',
            'Secure Telemetry',
            'Digital Twin Validation',
            'Obstacle Avoidance',
            'Scalable Autonomy Architecture',
          ],
        },
        {
          title: 'Applications',
          items: [
            'Intelligence, Surveillance & Reconnaissance (ISR)',
            'Border Monitoring',
            'Tactical Drone Operations',
            'Search & Rescue',
            'Disaster Response',
            'Autonomous Logistics',
            'Perimeter Security',
            'Infrastructure Monitoring',
            'Explosive Hazard Assessment',
            'Autonomous Ground Vehicles',
          ],
        },
        {
          title: 'Related Platforms',
          items: [
            'ANSA',
            'Certanity',
            'Reality Engine',
            'Fleet Manager',
            'Mission Studio',
            'GPS-Denied Navigation',
            'Swarm Simulator',
            'Telemetry',
          ],
        },
      ]}
    />
  );
}
