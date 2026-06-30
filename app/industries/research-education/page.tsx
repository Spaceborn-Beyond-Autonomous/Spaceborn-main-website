import CompanyPageLayout from '../../../components/CompanyPageLayout';

export const metadata = {
  title: 'Research & Education | Spaceborn',
  description: 'Accelerating Innovation Through Autonomous Technologies.',
};

export default function ResearchEducationPage() {
  return (
    <CompanyPageLayout
      title="RESEARCH & EDUCATION"
      subtitle="Accelerating Innovation Through Autonomous Technologies."
      paragraphs={[
        'Spaceborn is committed to advancing research, education, and technological innovation by providing students, universities, research institutions, and innovation laboratories with professional-grade autonomy software, simulation tools, and development platforms. By making advanced autonomous technologies more accessible, Spaceborn empowers the next generation of engineers, researchers, and innovators to explore, experiment, and build intelligent systems that solve real-world challenges.',
        'Research plays a critical role in the evolution of autonomous systems. From artificial intelligence and robotics to aerospace engineering and computer vision, today\'s breakthroughs begin as experimental ideas that require powerful development environments for testing and validation. Spaceborn provides a complete ecosystem that allows researchers to move from theoretical concepts to practical implementation using realistic simulation, modular autonomy software, and scalable deployment tools.',
        'The Spaceborn platform enables universities and research organizations to develop autonomous drones, mobile robots, AI perception systems, navigation algorithms, digital twins, and intelligent mission planning workflows without requiring extensive custom infrastructure. Through Certanity and Reality Engine, students and researchers can build highly realistic virtual environments where experiments can be safely conducted, repeated, and analyzed under controlled conditions.',
        'ANSA provides a flexible autonomy framework that allows researchers to focus on developing new algorithms rather than rebuilding low-level system components. Navigation, sensor fusion, mission execution, telemetry, and hardware integration are provided through standardized interfaces, allowing research teams to rapidly prototype and evaluate innovative ideas across multiple hardware platforms.',
        'Simulation-first development significantly reduces both development costs and operational risks. Researchers can evaluate perception algorithms, autonomous navigation systems, swarm coordination, and AI decision-making within realistic virtual environments before transitioning to physical hardware. This approach enables faster experimentation while ensuring greater repeatability and scientific accuracy.',
        'The Spaceborn ecosystem also supports collaborative research through Digital Twins, telemetry analysis, mission replay, and performance analytics. Every experiment can be recorded, analyzed, and reproduced, allowing research teams to compare results, validate improvements, and share findings across institutions.',
        'Whether supporting undergraduate education, postgraduate research, doctoral programs, robotics competitions, aerospace laboratories, or AI innovation centers, Spaceborn provides a scalable platform that encourages exploration while maintaining professional engineering standards. By bridging the gap between academic research and industrial deployment, Spaceborn helps transform innovative ideas into practical autonomous technologies that shape the future.',
      ]}
      sections={[
        {
          title: 'Key Capabilities',
          items: [
            'Research-Ready Autonomy Platform',
            'High-Fidelity Simulation',
            'Digital Twin Development',
            'AI Algorithm Testing',
            'Autonomous Navigation Research',
            'Swarm Robotics Development',
            'Mission Replay & Analytics',
            'Open Development Environment',
            'Hardware Integration',
            'Educational Resources',
          ],
        },
        {
          title: 'Applications',
          items: [
            'University Research Laboratories',
            'Robotics Competitions',
            'AI & Machine Learning Research',
            'Aerospace Engineering Programs',
            'Computer Vision Research',
            'Autonomous Vehicle Development',
            'Graduate & Doctoral Research',
            'STEM Education',
            'Academic Publications',
            'Innovation Incubators',
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
