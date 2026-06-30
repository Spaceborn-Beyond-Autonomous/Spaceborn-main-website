import CompanyPageLayout from '../../../components/CompanyPageLayout';

export const metadata = {
  title: 'Reality Engine | Spaceborn',
  description: 'Test Reality Before Reality with Spaceborn Reality Engine.',
};

export default function RealityEnginePage() {
  return (
    <CompanyPageLayout
      title="REALITY ENGINE"
      subtitle="Test Reality Before Reality."
      paragraphs={[
        'Reality Engine is Spaceborn\'s high-fidelity simulation environment designed to recreate the physical world with exceptional realism for autonomous systems development. It serves as the foundation upon which developers can safely design, test, validate, and optimize intelligent machines before they are deployed into real-world environments. By accurately simulating physics, terrain, weather, lighting, and sensor behavior, Reality Engine enables organizations to reduce development risks while accelerating innovation.',
        'Developing autonomous systems requires extensive testing under countless operating conditions, many of which are difficult, expensive, or unsafe to reproduce in reality. Reality Engine bridges this gap by creating digital environments that closely mimic real-world scenarios. Whether simulating dense urban landscapes, remote industrial facilities, forests, deserts, airports, or disaster zones, the platform provides a realistic environment where autonomous machines can safely learn, adapt, and improve their performance.',
        'At its core, Reality Engine combines advanced physics simulation with highly accurate environmental modeling to ensure that every interaction behaves as expected. Vehicles respond to terrain conditions, sensors experience realistic noise and interference, weather affects visibility and navigation, and environmental objects interact according to physical laws. This level of fidelity allows developers to confidently evaluate navigation algorithms, perception systems, mission planning strategies, and autonomous decision-making before any hardware leaves the laboratory.',
        'Reality Engine is fully integrated into the Spaceborn ecosystem. Developers can import missions created in Mission Studio, execute autonomy software powered by ANSA, validate AI models developed with DERYK, and monitor performance through Fleet Manager. This seamless integration creates a continuous development workflow where software can move from simulation to deployment with minimal modification.',
        'Designed for scalability, Reality Engine supports everything from single autonomous vehicles to large fleets operating simultaneously in complex environments. It is equally suited for research institutions, industrial automation, defense applications, aerospace development, robotics companies, and educational organizations seeking a reliable simulation platform for intelligent systems.',
        'By allowing engineers to "test reality before reality," Reality Engine significantly reduces operational costs, shortens development cycles, improves system reliability, and enables safer deployment of autonomous technologies across a wide range of industries.',
      ]}
      sections={[
        {
          title: 'Key Capabilities',
          items: [
            'High-fidelity physics simulation',
            'Dynamic weather systems',
            'Realistic terrain generation',
            'Environmental lighting simulation',
            'Sensor modeling and simulation',
            'Digital Twin integration',
            'Mission replay and debugging',
            'Multi-vehicle simulation',
            'Real-time visualization',
            'Performance analytics',
          ],
        },
        {
          title: 'Applications',
          items: [
            'Autonomous drone testing',
            'Robotics development',
            'Defense mission validation',
            'Aerospace system simulation',
            'Industrial automation',
            'Digital Twin environments',
            'AI model training',
            'Academic research',
          ],
        },
        {
          title: 'Related Platforms',
          items: [
            'Certanity',
            'ANSA',
            'Mission Studio',
            'DERYK',
            'Fleet Manager',
          ],
        },
      ]}
    />
  );
}
