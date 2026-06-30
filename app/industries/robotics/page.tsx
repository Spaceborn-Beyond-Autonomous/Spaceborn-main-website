import CompanyPageLayout from '../../../components/CompanyPageLayout';

export const metadata = {
  title: 'Robotics | Spaceborn',
  description: 'Empowering the Next Generation of Intelligent Robots.',
};

export default function RoboticsPage() {
  return (
    <CompanyPageLayout
      title="ROBOTICS"
      subtitle="Empowering the Next Generation of Intelligent Robots."
      paragraphs={[
        'Spaceborn develops advanced autonomy software and simulation technologies that enable robots to perceive, navigate, reason, and operate intelligently in dynamic real-world environments. From industrial automation and warehouse robotics to research platforms and field operations, the Spaceborn ecosystem provides a complete software foundation for building autonomous robotic systems that are reliable, scalable, and adaptable.',
        'Robotics is rapidly transforming industries by automating repetitive tasks, improving operational efficiency, and enabling machines to perform work in environments that are hazardous or inaccessible to humans. As robots become increasingly intelligent, they require more than mechanical precision—they need advanced perception, autonomous decision-making, real-time navigation, and seamless coordination with other systems. Spaceborn addresses these challenges by delivering a unified platform that simplifies the development and deployment of autonomous robotic applications.',
        'At the core of the robotics ecosystem is ANSA, Spaceborn\'s autonomy platform that enables robots to understand their environment, interpret mission objectives, make intelligent decisions, and execute complex tasks with minimal human intervention. Through sensor fusion, path planning, obstacle avoidance, localization, and mission management, ANSA provides the intelligence layer required for modern autonomous robotics.',
        'Before robots are deployed into operational environments, developers can use Certanity and Reality Engine to create realistic simulations that accurately replicate factories, warehouses, construction sites, research facilities, and outdoor environments. This simulation-first approach allows algorithms to be tested, validated, and optimized without interrupting live operations or risking expensive hardware.',
        'Spaceborn also supports advanced perception technologies including LiDAR simulation, digital twins, telemetry analysis, and GPS-denied navigation. Robots can operate effectively indoors, underground, or in environments where satellite navigation is unavailable by combining visual perception, inertial sensing, LiDAR mapping, and AI-powered localization. Every mission can be monitored in real time through Fleet Manager, providing operators with complete visibility into robot health, performance, and operational status.',
        'The modular architecture of the Spaceborn platform allows robotics developers, research institutions, OEMs, and industrial organizations to integrate existing hardware while benefiting from standardized software interfaces and scalable autonomy capabilities. Whether building autonomous mobile robots, warehouse automation systems, inspection robots, collaborative robots, or future humanoid platforms, Spaceborn provides the tools needed to accelerate development and simplify deployment.',
        'As robotics continues to redefine industries across the world, Spaceborn remains committed to building the software infrastructure that enables intelligent machines to work safely, efficiently, and autonomously alongside people.',
      ]}
      sections={[
        {
          title: 'Key Capabilities',
          items: [
            'Autonomous Navigation',
            'Sensor Fusion',
            'Real-Time Perception',
            'AI-Based Decision Making',
            'Mission Planning',
            'Fleet Coordination',
            'High-Fidelity Simulation',
            'Digital Twin Integration',
            'GPS-Denied Operation',
            'Remote Monitoring & Telemetry',
          ],
        },
        {
          title: 'Applications',
          items: [
            'Warehouse Automation',
            'Autonomous Mobile Robots (AMRs)',
            'Industrial Inspection Robots',
            'Manufacturing Automation',
            'Collaborative Robotics (Cobots)',
            'Healthcare Robotics',
            'Agricultural Robotics',
            'Mining & Construction Robotics',
            'Research Platforms',
            'Service Robotics',
          ],
        },
        {
          title: 'Related Platforms',
          items: [
            'ANSA',
            'Certanity',
            'Reality Engine',
            'Mission Studio',
            'Fleet Manager',
            'Digital Twins',
            'LiDAR Simulator',
            'Telemetry',
          ],
        },
      ]}
    />
  );
}
