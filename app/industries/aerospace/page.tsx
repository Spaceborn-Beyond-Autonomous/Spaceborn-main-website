import CompanyPageLayout from '../../../components/CompanyPageLayout';

export const metadata = {
  title: 'Aerospace | Spaceborn',
  description: 'Building the Software Infrastructure for the Next Generation of Aerospace Systems.',
};

export default function AerospacePage() {
  return (
    <CompanyPageLayout
      title="AEROSPACE"
      subtitle="Building the Software Infrastructure for the Next Generation of Aerospace Systems."
      paragraphs={[
        'Spaceborn is developing the software infrastructure that powers intelligent aerospace systems, enabling aircraft, unmanned aerial vehicles, high-altitude platforms, and future space technologies to operate with greater autonomy, reliability, and efficiency. By combining advanced autonomy software, realistic simulation, intelligent mission planning, and scalable fleet operations, Spaceborn provides a unified platform for designing, testing, and deploying next-generation aerospace solutions.',
        'The aerospace industry is undergoing a significant transformation as autonomy, artificial intelligence, and digital engineering become central to aircraft design and operations. Modern aerospace systems are expected to perform increasingly complex missions while operating safely in dynamic environments with minimal human intervention. Spaceborn addresses these challenges by delivering a software ecosystem that supports the complete lifecycle of autonomous aerospace development—from initial concept and simulation to deployment and mission analysis.',
        'Through Certanity and Reality Engine, aerospace developers can validate autonomous flight systems within highly realistic virtual environments before conducting expensive physical flight tests. Aircraft dynamics, environmental conditions, terrain, weather, communication constraints, and onboard sensor behavior can all be accurately simulated, allowing engineers to identify potential issues early in the development process and significantly reduce testing costs.',
        'ANSA serves as the autonomy layer responsible for navigation, mission execution, sensor fusion, and intelligent decision-making. Whether operating a single unmanned aerial vehicle or coordinating multiple autonomous aircraft, ANSA enables reliable autonomous behavior while maintaining flexibility across different hardware platforms. Combined with Mission Studio, engineers can design complex flight missions, define operational objectives, and validate mission execution entirely within simulation before deployment.',
        'Fleet Manager provides centralized operational oversight for aerospace organizations managing multiple autonomous platforms. Operators can monitor aircraft health, telemetry, mission progress, and system performance in real time while remotely assigning missions and analyzing historical operational data. This centralized approach improves fleet efficiency and enhances situational awareness across distributed operations.',
        'Spaceborn also supports emerging aerospace technologies including digital twins, AI-assisted mission planning, swarm coordination, and GPS-denied navigation. These capabilities enable autonomous aircraft to operate in environments where conventional navigation systems may be unavailable while providing engineers with advanced tools for predictive maintenance, performance optimization, and operational planning.',
        'Designed for commercial aviation, industrial UAVs, aerospace research, government programs, and future space systems, the Spaceborn ecosystem provides a scalable software foundation that adapts to the rapidly evolving aerospace landscape. As autonomous flight continues to redefine the future of aviation, Spaceborn remains committed to delivering the technologies that enable safer, smarter, and more capable aerospace systems.',
      ]}
      sections={[
        {
          title: 'Key Capabilities',
          items: [
            'Autonomous Flight Systems',
            'High-Fidelity Flight Simulation',
            'Mission Planning & Execution',
            'Digital Twin Technology',
            'GPS-Denied Navigation',
            'Fleet Operations Management',
            'AI-Assisted Decision Making',
            'Real-Time Telemetry',
            'Predictive Maintenance',
            'Multi-Aircraft Coordination',
          ],
        },
        {
          title: 'Applications',
          items: [
            'Unmanned Aerial Vehicles (UAVs)',
            'eVTOL Aircraft',
            'High-Altitude Platforms',
            'Aerospace Research',
            'Flight Testing',
            'Infrastructure Inspection',
            'Commercial Drone Operations',
            'Emergency Response Aviation',
            'Government & Defense Aviation',
            'Future Space Missions',
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
            'GPS-Denied Navigation',
            'Telemetry',
          ],
        },
      ]}
    />
  );
}
