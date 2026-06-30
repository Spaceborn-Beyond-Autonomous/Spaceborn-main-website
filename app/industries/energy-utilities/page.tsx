import CompanyPageLayout from '../../../components/CompanyPageLayout';

export const metadata = {
  title: 'Energy & Utilities | Spaceborn',
  description: 'Powering Critical Infrastructure with Intelligent Autonomy.',
};

export default function EnergyUtilitiesPage() {
  return (
    <CompanyPageLayout
      title="ENERGY & UTILITIES"
      subtitle="Powering Critical Infrastructure with Intelligent Autonomy."
      paragraphs={[
        'Spaceborn enables energy providers, utility companies, and infrastructure operators to modernize the inspection, monitoring, and maintenance of critical assets through intelligent autonomous systems. By combining advanced autonomy software, high-fidelity simulation, AI-powered analytics, and centralized fleet management, Spaceborn helps organizations improve operational efficiency, enhance worker safety, and ensure the continuous reliability of essential infrastructure.',
        'The energy and utilities sector manages some of the world\'s most extensive and mission-critical assets, including power transmission networks, substations, pipelines, renewable energy installations, water distribution systems, and industrial facilities. Inspecting and maintaining these assets often requires personnel to operate in hazardous, remote, or difficult-to-access environments. Spaceborn\'s autonomous technologies reduce these challenges by enabling drones and robotic platforms to perform inspections safely, efficiently, and with minimal operational disruption.',
        'Using Certanity and Reality Engine, organizations can create accurate digital representations of utility infrastructure and simulate inspection missions before deploying autonomous systems in the field. Engineers can evaluate flight paths, optimize sensor placement, validate navigation algorithms, and test emergency response procedures within realistic virtual environments, reducing operational risks while improving mission planning.',
        'ANSA provides the intelligence required for autonomous inspection by enabling drones and robots to navigate complex environments, avoid obstacles, collect sensor data, and execute missions with minimal human intervention. Combined with GPS-Denied Navigation, autonomous systems can continue operating inside industrial facilities, tunnels, substations, or other environments where conventional satellite positioning may be unreliable.',
        'Digital Twins allow utility operators to continuously monitor critical infrastructure by maintaining virtual replicas of physical assets. Combined with Telemetry, organizations gain real-time visibility into asset conditions, inspection history, equipment performance, and operational health. Historical data and AI-assisted analytics help identify maintenance trends, predict potential failures, and support proactive decision-making before problems escalate into costly outages.',
        'Fleet Manager enables centralized coordination of inspection fleets operating across multiple locations. Operators can monitor mission progress, assign inspection schedules, review telemetry, and remotely manage autonomous assets from a unified operational dashboard. Whether managing a single facility or a nationwide infrastructure network, organizations can maintain complete visibility across their autonomous operations.',
        'From renewable energy installations and transmission networks to oil & gas pipelines and water treatment facilities, Spaceborn provides a scalable autonomy platform that supports the evolving needs of modern infrastructure management. By replacing manual inspections with intelligent autonomous systems, organizations can reduce maintenance costs, minimize downtime, improve safety, and increase the long-term reliability of critical infrastructure.',
      ]}
      sections={[
        {
          title: 'Key Capabilities',
          items: [
            'Autonomous Infrastructure Inspection',
            'Digital Twin Asset Monitoring',
            'AI-Based Predictive Maintenance',
            'High-Fidelity Simulation',
            'GPS-Denied Navigation',
            'Fleet Operations Management',
            'Real-Time Telemetry',
            'Remote Inspection Planning',
            'Asset Performance Analytics',
            'Multi-Site Operations',
          ],
        },
        {
          title: 'Applications',
          items: [
            'Power Line Inspection',
            'Electrical Substation Monitoring',
            'Wind Farm Inspection',
            'Solar Farm Monitoring',
            'Oil & Gas Pipeline Inspection',
            'Water Treatment Facilities',
            'Hydroelectric Infrastructure',
            'Utility Asset Management',
            'Remote Industrial Sites',
            'Renewable Energy Operations',
          ],
        },
        {
          title: 'Related Platforms',
          items: [
            'ANSA',
            'Certanity',
            'Reality Engine',
            'Digital Twins',
            'Fleet Manager',
            'Telemetry',
            'Mission Studio',
            'GPS-Denied Navigation',
          ],
        },
      ]}
    />
  );
}
