import CompanyPageLayout from '../../../components/CompanyPageLayout';

export const metadata = {
  title: 'About | Spaceborn',
  description: 'Building the Future of Intelligent Autonomy.',
};

export default function AboutPage() {
  return (
    <CompanyPageLayout
      title="ABOUT SPACEBORN"
      subtitle="Building the Future of Intelligent Autonomy."
      paragraphs={[
        'Spaceborn is an autonomous systems technology company dedicated to building the software infrastructure that powers the next generation of intelligent machines. We develop platforms, simulation technologies, and autonomy solutions that enable drones, robots, industrial systems, and future aerospace platforms to perceive their surroundings, make intelligent decisions, and execute complex missions with confidence.',
        'Our vision extends beyond building individual products. We are creating an integrated ecosystem where autonomy development becomes faster, safer, and more accessible. By combining simulation, artificial intelligence, digital twins, mission planning, fleet operations, and embedded software into a unified platform, Spaceborn enables organizations to move seamlessly from concept to deployment while reducing development complexity and operational risk.',
        'Autonomous systems represent one of the most significant technological transformations of the coming decades. As industries increasingly rely on intelligent machines to perform tasks that are repetitive, hazardous, or impossible for humans, the demand for reliable autonomy software continues to grow. Spaceborn exists to provide the software foundation that allows these machines to operate safely, efficiently, and intelligently across a wide variety of industries.',
        'Our ecosystem is built around a simulation-first philosophy. Before autonomous systems enter the physical world, they can be designed, tested, validated, and optimized inside realistic digital environments. This approach significantly reduces development costs, accelerates innovation, improves safety, and allows organizations to deploy autonomous technologies with greater confidence.',
        'At the center of this ecosystem is ANSA, our flagship autonomy platform, supported by complementary technologies including Certainty for simulation, Reality Engine for high-fidelity digital environments, Mission Studio for mission planning, Fleet Manager for operational management, and specialized tools for perception, telemetry, navigation, and embedded development. Together, these technologies create a complete software stack capable of supporting the entire lifecycle of autonomous systems.',
        'Spaceborn serves organizations across aerospace, robotics, defense, industrial automation, logistics, agriculture, energy, research, and public safety. Whether enabling autonomous drone operations, industrial inspection robots, intelligent fleet management, or future aerospace missions, our technologies are designed to adapt to the evolving needs of modern industries while remaining scalable, modular, and hardware agnostic.',
        'Innovation is driven by engineering excellence, collaboration, and a commitment to solving complex real-world challenges. Every platform we develop is built with long-term scalability, interoperability, and reliability in mind, ensuring that customers can continue evolving their autonomous capabilities without rebuilding their technological foundation.',
        'Just as operating systems transformed personal computing and cloud platforms transformed modern software development, autonomous systems require a common foundation that allows them to perceive, navigate, reason, and operate reliably regardless of their physical form. Spaceborn exists to become that foundation.',
        'We envision a future where developers no longer need to build every autonomy component from scratch. Instead, they can focus on solving real-world problems while relying on a robust, scalable platform that provides navigation, perception, simulation, mission planning, fleet management, artificial intelligence, and hardware integration through a unified architecture.',
        'As autonomous systems become an increasingly integral part of everyday life, Spaceborn is committed to building the software infrastructure that enables intelligent machines to operate safely on Earth today while laying the foundation for the autonomous systems of tomorrow—and beyond.',
      ]}
      sections={[
        {
          title: 'What We Build',
          items: [
            'Autonomy Platforms',
            'High-Fidelity Simulation',
            'Digital Twins',
            'Mission Planning Software',
            'Fleet Management Systems',
            'Embedded Software',
            'AI-Powered Robotics',
            'Edge Computing Infrastructure',
            'Sensor Technologies',
            'Enterprise Autonomy Solutions',
          ],
        },
        {
          title: 'Industries We Serve',
          items: [
            'Aerospace',
            'Defense',
            'Robotics',
            'Enterprise',
            'Energy & Utilities',
            'Logistics',
            'Agriculture',
            'Government & Public Safety',
            'Research & Education',
            'OEM Manufacturers',
          ],
        },
        {
          title: 'Core Principles',
          items: [
            'Simulation-First Development',
            'Hardware-Agnostic Architecture',
            'Safety by Design',
            'Open & Modular Systems',
            'AI-Driven Innovation',
            'Engineering Excellence',
            'Scalable Enterprise Solutions',
          ],
        },
      ]}
      relatedLinks={[
        { label: 'Leadership', href: '/company/leadership' },
        { label: 'Careers', href: '/company/careers' },
        { label: 'Partners', href: '/company/partners' },
        { label: 'Newsroom', href: '/company/newsroom' },
        { label: 'Contact', href: '/company/contact' },
      ]}
    />
  );
}
