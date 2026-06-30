import CompanyPageLayout from '../../../components/CompanyPageLayout';

export const metadata = {
  title: 'OEM & Manufacturers | Spaceborn',
  description: 'Building the Foundation for the Next Generation of Autonomous Products.',
};

export default function OEMManufacturersPage() {
  return (
    <CompanyPageLayout
      title="OEM & MANUFACTURERS"
      subtitle="Building the Foundation for the Next Generation of Autonomous Products."
      paragraphs={[
        'Spaceborn partners with Original Equipment Manufacturers (OEMs), robotics companies, aerospace organizations, and hardware manufacturers to accelerate the development of intelligent autonomous products. Rather than building every software component from scratch, manufacturers can leverage the Spaceborn ecosystem to integrate advanced autonomy, simulation, AI, and fleet management capabilities into their products, significantly reducing development time while maintaining complete flexibility over hardware design.',
        'Developing an autonomous product requires far more than assembling sensors and processors. Manufacturers must build reliable navigation systems, sensor fusion pipelines, mission management software, telemetry infrastructure, simulation environments, and deployment tools—all while ensuring long-term maintainability and scalability. Spaceborn simplifies this process by providing a modular software platform that integrates seamlessly with a wide range of hardware architectures.',
        'At the core of this ecosystem is ANSA, which provides a complete autonomy framework capable of supporting drones, robots, autonomous vehicles, and future intelligent machines. Through the Hardware Abstraction Layer (HAL), manufacturers can integrate custom flight controllers, sensor modules, communication systems, motor controllers, and embedded computing platforms without rewriting high-level autonomy software. This hardware-agnostic approach allows products to evolve while preserving software compatibility across multiple generations.',
        'Before production hardware reaches customers, manufacturers can validate their systems using Certanity and Reality Engine. Complete digital prototypes can be created to simulate real-world operating conditions, evaluate navigation performance, optimize sensor placement, and test software updates before manufacturing begins. This simulation-first workflow reduces engineering costs, shortens development cycles, and improves overall product reliability.',
        'The Embedded SDK provides developers with production-ready APIs, device drivers, firmware libraries, and hardware integration tools, enabling rapid development of custom embedded solutions while maintaining compatibility with the broader Spaceborn platform. Manufacturers can extend existing products with AI capabilities, advanced perception systems, telemetry, fleet management, and mission planning without rebuilding their software architecture.',
        'Fleet Manager enables OEMs to provide customers with enterprise-grade fleet operations, remote diagnostics, firmware updates, telemetry analysis, and operational analytics. Digital Twins allow manufacturers to monitor deployed products throughout their lifecycle, improving predictive maintenance, product optimization, and customer support through continuous operational insights.',
        'Whether building commercial drones, industrial robots, autonomous vehicles, agricultural machinery, inspection systems, or next-generation aerospace platforms, Spaceborn provides manufacturers with a scalable software infrastructure that accelerates innovation while ensuring long-term product growth.',
        'By enabling manufacturers to focus on product innovation instead of rebuilding common autonomy technologies, Spaceborn helps transform engineering ideas into commercially successful autonomous systems that are ready for deployment at scale.',
      ]}
      sections={[
        {
          title: 'Key Capabilities',
          items: [
            'Hardware-Agnostic Autonomy Platform',
            'Hardware Abstraction Layer (HAL)',
            'Embedded SDK & APIs',
            'Custom Sensor Integration',
            'Flight Controller Integration',
            'AI & Edge Computing Support',
            'Digital Twin Technology',
            'Simulation-Based Product Validation',
            'Fleet Management Infrastructure',
            'Remote Firmware Updates',
            'Long-Term Software Scalability',
            'Enterprise Deployment Support',
          ],
        },
        {
          title: 'Applications',
          items: [
            'Commercial Drone Manufacturing',
            'Industrial Robotics',
            'Autonomous Ground Vehicles',
            'Smart Agriculture Equipment',
            'Inspection Robots',
            'Aerospace Hardware',
            'Embedded Electronics',
            'AI Edge Devices',
            'Research Platforms',
            'Custom Autonomous Systems',
          ],
        },
        {
          title: 'Related Platforms',
          items: [
            'ANSA',
            'Embedded SDK',
            'Flight Controllers',
            'Edge Compute',
            'Certanity',
            'Reality Engine',
            'Fleet Manager',
            'Digital Twins',
          ],
        },
      ]}
    />
  );
}
